import { Fragment, useState } from "react"
import StepForm1 from "../components/steps/StepForm1"
import StepForm2 from "../components/steps/StepForm2"
import StepForm3 from "../components/steps/StepForm3"
import StepForm4 from "../components/steps/StepForm4"
import Congrats from "../components/steps/Congrats"
import data from "../../data.json"

export default function useFormSteps() {
  const FIRST_ID = 1,
    SECOND_ID = 2,
    THIRD_ID = 3,
    FOURTH_ID = 4

  const [formStep, setFormStep] = useState({
    id: FIRST_ID,
    fullName: "",
    email: "",
    phone: "",
    portfolio: "",
    skillLevel: [],
    preferenceStack: [],
  })

  const steps = data.filter((step) => step.show)

  const stepId = steps.map((step) => {
    const activeClassBtn = formStep.id >= step.id ? "btn-primary" : ""
    const activeClassLine = formStep.id > step.id ? "line-primary" : ""
    return (
      <Fragment key={step.id}>
        <button className={`btn-step ${activeClassBtn}`}>{step.id}</button>
        {step.id !== steps.length && <hr className={`decoration-line ${activeClassLine}`} />}
      </Fragment>
    )
  })

  const currentForm = data.find((step) => step.id === formStep.id)

  const currentTitle = (
    <Fragment key={currentForm.id}>
      <h3 className="form-title">{currentForm.titleStep}</h3>
      <h4 className="form-subtitle">{currentForm.subtitle}</h4>
    </Fragment>
  )

  const activeForm =
    formStep.id === FIRST_ID ? (
      <StepForm1
        fullName={formStep.fullName}
        email={formStep.email}
        phone={formStep.phone}
        portfolio={formStep.portfolio}
        handleEv={handleEv}
      />
    ) : formStep.id === SECOND_ID ? (
      <StepForm2
        skillLevel={formStep.skillLevel}
        skillLevelData={currentForm.skillLevel}
        handleEv={handleEv}
      />
    ) : formStep.id === THIRD_ID ? (
      <StepForm3
        preferenceStack={formStep.preferenceStack}
        handleEv={handleEv}
        challengePreference={currentForm.challengePreference}
      />
    ) : (
      <StepForm4 formStep={formStep} />
    )

  function handleEv(e) {
    const { name, value, type, dataset } = e.target
    const { nameForm, nameValue, countChecked } = dataset

    if (nameValue) {
      if (countChecked === "1") {
        const parentListElem = e.target.parentElement.childNodes
        parentListElem.forEach((item) => item.classList.remove("step-badge-active"))
        e.target.classList.add("step-badge-active")
        handleStateChooseItem(nameForm, nameValue, countChecked)
      } else {
        e.target.classList.toggle("step-badge-active")
        handleStateChooseItem(nameForm, nameValue, countChecked)
      }
    } else if (type === "checkbox") {
      handleStateChooseItem(nameForm, name, countChecked)
    } else {
      setFormStep((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }
  }

  function handleStateChooseItem(nameForm, nameValue, count) {
    if (formStep[nameForm].includes(nameValue)) {
      setFormStep((prevData) => ({
        ...prevData,
        [nameForm]: [...prevData[nameForm]].filter((item) => item !== nameValue),
      }))
    } else {
      setFormStep((prevData) => {
        const result = +count > 1 ? [...prevData[nameForm], nameValue] : [nameValue]
        return {
          ...prevData,
          [nameForm]: result,
        }
      })
    }
  }

  function nextForm() {
    setFormStep((prevData) => ({ ...prevData, id: prevData.id + 1 }))
  }

  function previousForm() {
    setFormStep((prevData) => ({ ...prevData, id: prevData.id - 1 }))
  }

  const bodyForm =
    formStep.id <= FOURTH_ID ? (
      <div className="form-body">
        <div className="form-steps">{stepId}</div>
        {currentTitle}
        {activeForm}
      </div>
    ) : (
      <div className="form-body-none-border">
        <Congrats title={currentForm.titleStep} subtitle={currentForm.subtitle} />
      </div>
    )

  return { FIRST_ID, FOURTH_ID, bodyForm, formStep, previousForm, nextForm }
}
