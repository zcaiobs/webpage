import './global.css'
import img from './component/img/seam.svg'

export default function Home() {
  return (
    <div className='home'>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-8 order-md-2">
              <img className="img-1" src={img} alt="Suelier - Atelier de costura"/>
            </div>
            <div className="col-md-4 order-md-1">
              <div className="content-1">
                <h2><span>Suelier</span>, o lugar certo para cuidar das suas roupas</h2><br/>
              </div>
              <div className='content-2'> 
                <p>Conheça o atelier e se surpreenda com a qualidade dos nossos serviços</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}