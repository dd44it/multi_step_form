export default function StepForm1({ fullName, email, phone, portfolio, handleEv }) {
  return (
    <>
      <div className="row">
        <div className="row-wrapper">
          <label className="row-label" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            className="row-input"
            placeholder="John Doe"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={handleEv}
          />
        </div>
        <div className="row-wrapper">
          <label className="row-label" htmlFor="email">
            Email Address
          </label>
          <input
            type="text"
            className="row-input"
            placeholder="name@email.com"
            id="email"
            name="email"
            value={email}
            onChange={handleEv}
          />
        </div>
      </div>
      <div className="row">
        <div className="row-wrapper">
          <label className="row-label" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="text"
            className="row-input"
            placeholder="+91 1234567890"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleEv}
          />
        </div>
        <div className="row-wrapper">
          <label className="row-label" htmlFor="portfolio">
            Portfolio/GitHub Link
          </label>
          <input
            type="text"
            className="row-input"
            placeholder="github.com/..."
            id="portfolio"
            name="portfolio"
            value={portfolio}
            onChange={handleEv}
          />
        </div>
      </div>
    </>
  )
}