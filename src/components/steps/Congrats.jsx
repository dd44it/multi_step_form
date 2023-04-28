export default function Congrats({title, subtitle}){
  return (
    <section className="congrats">
      <div className="congrats-icon-wrapper"></div>
      <h3 className="congrats-title"> {title} </h3>
      <p className="congrats-description"> {subtitle} </p>
    </section>
  )
}