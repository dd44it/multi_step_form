export default function StepForm2({ skillLevel, handleEv, skillLevelData }) {
  const skillLevelElem = skillLevelData.map((item, index) => {
    const checkActive = skillLevel.includes(item) ? "step-badge-active" : ""
    const capitalize = item.slice(0, 1).toUpperCase() + item.slice(1)
    return (
      <div className={`step-badge ${checkActive} checkbox-none`} key={index}>
        <div className="checkbox-container">
          <div className="btn-primary btn-step">
            <div className={`btn-${item} btn-img-wrapper`}></div>
          </div>
          <input
            type="checkbox"
            id={item}
            name={item}
            onChange={handleEv}
            data-name-form="skillLevel"
          />
          <label className="label" htmlFor={item}>
            {capitalize}
          </label>
        </div>
      </div>
    )
  })
  return <div className="row">{skillLevelElem}</div>
}
