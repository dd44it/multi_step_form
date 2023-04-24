import React, { useState } from "react"
import StepForm1 from "./steps/StepForm1"
import StepForm2 from "./steps/StepForm2"
import StepForm3 from "./steps/StepForm3"
import data from "../../data.json"

export default function Form() {
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

  const stepId = data.map((step) => (
    <React.Fragment key={step.id}>
      <button className={`btn-step ${formStep.id >= step.id ? "btn-primary" : ""}`}>
        {step.id}
      </button>
      {step.id !== 4 && <hr className="decoration-line" />}
    </React.Fragment>
  ))

  const findCurrentTitle = data.find((step) => step.id === formStep.id)

  const currentTitle = (
    <React.Fragment key={findCurrentTitle.id}>
      <h3 className="form-title">{findCurrentTitle.titleStep}</h3>
      <h4 className="form-subtitle">{findCurrentTitle.subtitle}</h4>
    </React.Fragment>
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
      <StepForm2 skillLevel={formStep.skillLevel} skillLevelData={findCurrentTitle.skillLevel} handleEv={handleEv} />
    ) : formStep.id === THIRD_ID ? (
      <StepForm3
        preferenceStack={formStep.preferenceStack}
        handleEv={handleEv}
        challengePreference={findCurrentTitle.challengePreference}
      />
    ) : formStep.id === FOURTH_ID ? (
      <StepForm2 preferenceStack={formStep.preferenceStack} id={formStep.id} handleEv={handleEv} />
    ) : (
      <StepForm2 preferenceStack={formStep.preferenceStack} handleEv={handleEv} />
    )

  function handleEv(e) {
    const { name, value, type, dataset } = e.target
    console.log(dataset)
    const nameForm = dataset.nameForm
    if (type === "checkbox") {
      if (formStep[nameForm].includes(name)) {
        setFormStep((prevData) => ({
          ...prevData,
          [nameForm]: [...prevData[nameForm]].filter((item) => item !== name),
        }))
      } else {
        setFormStep((prevData) => ({
          ...prevData,
          [nameForm]: [...prevData[nameForm], name],
        }))
      }
    } else {
      setFormStep((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }
  }

  function nextForm() {
    setFormStep((prevData) => ({ ...prevData, id: prevData.id + 1 }))
  }

  function previousForm() {
    setFormStep((prevData) => ({ ...prevData, id: prevData.id - 1 }))
  }

  return (
    <main className="main">
      <div className="container-main">
        <div className="form-steps">{stepId}</div>
        <div className="form-body">
          {currentTitle}
          <div className="action-form">{activeForm}</div>
        </div>
        <div className="form-footer">
          {formStep.id > FIRST_ID && (
            <button className="btn btn-border" onClick={previousForm}>
              Go Back
            </button>
          )}
          {formStep.id < FOURTH_ID && (
            <button className="btn btn-primary" onClick={nextForm}>
              Next Step
            </button>
          )}
          {formStep.id === FOURTH_ID && (
            <button className="btn btn-primary" onClick={nextForm}>
              Submit
            </button>
          )}
        </div>
      </div>
    </main>
  )
}
