import img1 from './img/img1.jpg'
import img2  from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'

import './style/carousel.css'

export default function Carousel() {
  return (
    <div className="carousel-c">
      <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="5000">
            <img src={img1} className="d-block " alt="Trabalhos realizados" />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img src={img2} className="d-block " alt="Trabalhos realizados" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block " alt="Trabalhos realizados" />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block " alt="Trabalhos realizados" />
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block " alt="Trabalhos realizados" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}