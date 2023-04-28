export default function StepForm2({ skillLevel, handleEv, skillLevelData }) {
  const skillLevelElem = skillLevelData.map((item, index) => {
    const checkActive = skillLevel.includes(item) ? "step-badge-active" : ""
    const capitalize = item.slice(0, 1).toUpperCase() + item.slice(1)
    return (
      <div
        className={`step-badge ${checkActive} checkbox-none`}
        key={index}
        onClick={handleEv}
        data-name-form="skillLevel"
        data-name-value={item}
        data-count-checked={1}
      >
        <div className="btn-primary btn-step">
          <div className={`btn-${item} btn-img-wrapper`}></div>
        </div>
        <label className="label" htmlFor={item}>
          {capitalize}
        </label>
      </div>
    )
  })
  return <div className="row">{skillLevelElem}</div>
}
