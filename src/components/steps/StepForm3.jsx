export default function StepForm3({ preferenceStack, challengePreference, handleEv }) {
  const preferenceElem = challengePreference.map((item, index) => {
    const checkActive = preferenceStack.includes(item) ? "step-badge-active" : ""
    return (
      <div className={`step-badge ${checkActive}`} key={index}>
        <div className="checkbox-container">
          <input type="checkbox" id={item} name={item} onChange={handleEv} checked={checkActive} />
          <label className="label" htmlFor={item}>
            {item}
          </label>
        </div>
      </div>
    )
  })

  return <div className="row">{preferenceElem}</div>
}
