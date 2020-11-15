import './style/location.css'

export default function Location() {
  return (
    <div>
      <div className="local bg-light"><h1>Venha nos visitar!</h1></div>
      <a href="https://www.google.com.br/maps/place/Suelier+-+Atelier+de+Costura/@-23.5461856,-46.6365743,16.5z/data=!4m5!3m4!1s0x94ce597ca98e4e69:0x855f628d7d0d99f7!8m2!3d-23.5463017!4d-46.6352977?hl=pt-BR&authuser=0">
        <div className="location bg-light">
          <div className="row">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Rua São Bento , 329, Sala 111</li>
              <li class="list-group-item">Seg a Sex das 8h às 18h</li>
              <li class="list-group-item">Cel.:(11) 96850-1077</li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  )
}