import flower from "../../assets/icons/flower.svg"

export default function StepForm2({ skillLevel, activeBtn }) {
  return (
    <>
      <div className="row">
        <div className="step-badge" onClick={activeBtn}>
          <div className="btn-primary btn-step">
            <div className="btn-flower btn-img-wrapper"></div>
          </div>
          <div className="badge-name">Beginner</div>
        </div>

        <div className="step-badge" onClick={activeBtn}>
          <div className="btn-primary btn-step">
            <div className="btn-compass btn-img-wrapper"></div>
          </div>
          <div className="badge-name">Intermediate</div>
        </div>
      </div>
      <div className="row">
        <div className="step-badge" onClick={activeBtn}>
          <div className="btn-primary btn-step">
            <div className="btn-rocket btn-img-wrapper"></div>
          </div>
          <div className="badge-name">Advanced</div>
        </div>
        <div className="step-badge" onClick={activeBtn}>
          <div className="btn-primary btn-step">
            <div className="btn-title btn-img-wrapper"></div>
          </div>
          <div className="badge-name">Expert</div>
        </div>
      </div>
    </>
  )
}
