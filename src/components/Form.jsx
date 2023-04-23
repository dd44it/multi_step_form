import React, { useState } from "react"
import StepForm1 from "./steps/StepForm1"
import StepForm2 from "./steps/StepForm2"

export default function Form() {
  const [formStep, setFormStep] = useState([
    {
      idStep: 1,
      titleStep: "Personal Information",
      subtitle: "Please provide your personal details so we can get to know you better.",
      fullName: "",
      email: "",
      phone: "",
      portfolio: "",
      active: false,
      show: true,
    },
    {
      idStep: 2,
      titleStep: "Skill Level",
      subtitle: "Please tell us about your skill level in frontend development.",
      skillLevel: "",
      active: true,
      show: true,
    },
    {
      idStep: 3,
      titleStep: "Challenge Preference",
      subtitle: "Please tell us which frontend challenges you would like to participate in.",
      preferenceStack: "",
      active: false,
      show: true,
    },
    {
      idStep: 4,
      titleStep: "Review and Confirm",
      subtitle: "Please review your information to make sure everything is accurate.",
      active: false,
      show: true,
    },
    {
      idStep: 5,
      titleStep: "Congratulations! 🎉",
      subtitle:
        "Your profile has been created and you are now ready to start participating in challenges that match your interests and coding experience level.",
      active: false,
      show: false,
    },
  ])

  const stepId = formStep.map((step) => {
    if (step.show) {
      return (
        <React.Fragment key={step.idStep}>
          <button className={`btn-step ${step.active ? "btn-primary" : ""}`}>{step.idStep}</button>
          {step.idStep !== 4 && <hr className="decoration-line" />}
        </React.Fragment>
      )
    }
  })

  const activeTitle = formStep.map((step) => {
    if (step.show && step.active) {
      return (
        <React.Fragment key={step.idStep}>
          <h3 className="form-title">{step.titleStep}</h3>
          <h4 className="form-subtitle">{step.subtitle}</h4>
        </React.Fragment>
      )
    }
  })

  const activeForm = formStep.map((step) => {
    if (step.active && step.idStep === 1) {
      return (
        <React.Fragment key={step.idStep}>
          <StepForm1
            fullName={step.fullName}
            email={step.email}
            phone={step.phone}
            portfolio={step.portfolio}
            handleEv={handleEv}
          />
        </React.Fragment>
      )
    }
    else if(step.active && step.idStep === 2){
      return (
        <React.Fragment key={step.idStep}>
          <StepForm2
            skillLevel={step.skillLevel}
            activeBtn={activeBtn}
          />
        </React.Fragment>
      )
    }
  })

  function handleEv(e) {
    const { name, value } = e.target
    setFormStep((prevData) =>
      prevData.map((obj) => {
        if (obj.idStep === 1) {
          return { ...obj, [name]: value }
        } else {
          return obj
        }
      })
    )
  }

  function activeBtn(e){
    const { name, className } = e.target
    console.log(className, name)

    
  }

  console.log(formStep)
  console.log(activeForm)

  return (
    <main className="main">
      <div className="container-main">
        <div className="form-steps">{stepId}</div>
        <div className="form-body">
          {activeTitle}
          <div className="action-form">{activeForm}</div>
        </div>
        <div className="form-footer">
          <button className="btn btn-border">Go Back</button>
          <button className="btn btn-primary">Next Step</button>
        </div>
      </div>
    </main>
  )
}
