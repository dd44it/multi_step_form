import useHooks from "../hooks/useFormSteps"

export default function Form() {
  const { FIRST_ID, FOURTH_ID, bodyForm, formStep, previousForm, nextForm } = useHooks()
  return (
    <main className="main">
      <div className="container-main">
        <>{bodyForm}</>
        {formStep.id <= FOURTH_ID && (
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
        )}
      </div>
    </main>
  )
}
