import img from './../component/img/barras.svg'
import './style/show-service.css'

export default function ShowService() {
    return (
        <div className='show-service'>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 order-md-1">
                            <img className="img-1" src={img} alt="Suelier - Atelier de costura" />
                        </div>
                        <div className="col-md-4 order-md-2 align-self-center">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Barra Original</li>
                                <li class="list-group-item">Barra à Mão ou Invisível</li>
                                <li class="list-group-item">Barra de Lenço</li>
                                <li class="list-group-item">Barra Italiana</li>
                                <li class="list-group-item">Barra Simples</li>
                                <li class="list-group-item">Barra Galoneira</li>
                                <li class="list-group-item">Barra com viés</li>
                                <li class="list-group-item">Barra Desfiada</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}