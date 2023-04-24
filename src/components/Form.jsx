import React, { useState } from "react"
import StepForm1 from "./steps/StepForm1"
import StepForm2 from "./steps/StepForm2"
import data from "../../data.json"

export default function Form() {
  const [formStep, setFormStep] = useState({
    id: 1,
    fullName: "",
    email: "",
    phone: "",
    portfolio: "",
    skillLevel: "",
    preferenceStack: "",
  })

  const stepId = data.map((step) => (
    <React.Fragment key={step.id}>
      <button className={`btn-step ${step.active ? "btn-primary" : ""}`}>{step.id}</button>
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
    formStep.id === 1 ? (
      <StepForm1
        fullName={formStep.fullName}
        email={formStep.email}
        phone={formStep.phone}
        portfolio={formStep.portfolio}
        handleEv={handleEv}
      />
    ) : (
      <StepForm2 skillLevel={formStep.skillLevel} activeBtn={activeBtn} />
    )

  function handleEv(e) {
    const { name, value } = e.target
    setFormStep((prevData) => ({ ...prevData, [name]: value }))
  }

  function activeBtn(e) {
    const { name, className } = e.target
    // console.log(className, name)
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
          <button className="btn btn-border" onClick={previousForm}>
            Go Back
          </button>
          <button className="btn btn-primary" onClick={nextForm}>
            Next Step
          </button>
        </div>
      </div>
    </main>
  )
}
