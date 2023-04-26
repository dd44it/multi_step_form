import PropTypes from "prop-types"

export default function StepForm4(props) {
  const preferenceStackElements = props.formStep.preferenceStack.map((preference) => (
    <div key={preference}>{preference}</div>
  ))

  return (
    <div className="column-3">
      <div className="step-badge">
        <label className="name-label">Full Name</label>
        <span className="result"> {props.formStep.fullName} </span>
      </div>
      <div className="step-badge">
        <label className="name-label">Email Address</label>
        <span className="result"> {props.formStep.email} </span>
      </div>
      <div className="step-badge">
        <label className="name-label">Phone Number</label>
        <span className="result"> {props.formStep.phone} </span>
      </div>
      <div className="step-badge">
        <label className="name-label">Portfolio/GitHub Link</label>
        <span className="result"> {props.formStep.portfolio} </span>
      </div>
      <div className="step-badge">
        <label className="name-label">Skill Level</label>
        <span className="result"> {props.formStep.skillLevel.join(", ")} </span>
      </div>
      <div className="step-badge">
        <label className="name-label">Challenge Preference</label>
        <span className="result"> {preferenceStackElements} </span>
      </div>
    </div>
  )
}

StepForm4.propTypes = {
  formStep: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    portfolio: PropTypes.string.isRequired,
    skillLevel: PropTypes.arrayOf(PropTypes.string).isRequired,
    preferenceStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}
