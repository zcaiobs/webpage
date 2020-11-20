export default function Service(props) {
  return (
    <div className="service">
      <div className="card">
        <div className="card-c">
          <img className="card-img-top" src={props.img} alt="Card cap" />
        </div>
        <div className="card-body">
          <h4>{props.title}</h4>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  )
}