export default function StepForm3({ preferenceStack, challengePreference, handleEv }) {
  const preferenceElem = challengePreference.map((item, index) => {
    const checkActive = preferenceStack.includes(item) ? "step-badge-active" : ""
    return (
      <div
        className={`step-badge ${checkActive}`}
        key={index}
        onClick={handleEv}
        data-name-form="preferenceStack"
        data-name-value={item}
        data-count-checked={4}
      >
        <div className="checkbox-container">
          <input
            type="checkbox"
            id={item}
            name={item}
            checked={checkActive}
            data-count-checked={4}
            readOnly
            data-name-form="preferenceStack"
          />
          <label className="label" htmlFor={item}>
            {item}
          </label>
        </div>
      </div>
    )
  })

  return <div className="row">{preferenceElem}</div>
}
