import React, { useState  } from "react"

export default function Form() {
  const [formStep, setFormStep] = useState([
    {
      idStep: 1,
      titleStep: "Personal Information",
      subtitle: "Please provide your personal details so we can get to know you better.",
      fullName: '',
      email: '',
      phone: '',
      portfolio: '',
      active: true,
      show: true

    },
    {
      idStep: 2,
      titleStep: "Skill Level",
      subtitle: "Please tell us about your skill level in frontend development.",
      skillLevel: '',
      active: false,
      show: true
    },
    {
      idStep: 3,
      titleStep: "Challenge Preference",
      subtitle: "Please tell us which frontend challenges you would like to participate in.",
      preferenceStack: '',
      active: false,
      show: true
    },
    {
      idStep: 4,
      titleStep: "Review and Confirm",
      subtitle: "Please review your information to make sure everything is accurate.",
      active: false,
      show: true
    },
    {
      idStep: 5,
      titleStep: "Congratulations! 🎉",
      subtitle: "Your profile has been created and you are now ready to start participating in challenges that match your interests and coding experience level.",
      active: false,
      show: false
    },
  ])

  const stepId = formStep.map(step => {
    if(step.show){
      return (
        <React.Fragment key={step.idStep}>
          <button className={`btn-step ${step.active ? 'btn-primary' : ''}`}> {step.idStep} </button>
          {step.idStep !== 4 && (<hr className="decoration-line" />) }  
        </React.Fragment>
      )
    }
    
  })
  return (
    <main className="main">
      <div className="container-main">
        <div className="form-steps">
          {stepId}
        </div>
        <div className="form-body">
          
        </div>
      </div>
    </main>
  )
}
