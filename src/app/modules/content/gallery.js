import './component/style/gallery.css'
import img1 from './component/img/img1.jpg'
import img2 from './component/img/img2.jpg'
import img3 from './component/img/img3.jpg'
import img4 from './component/img/img4.jpg'
import img5 from './component/img/img5.jpg'

export default function Gallery() {
  return (
    <div className='gallery'>
      <img src={img2} className="img-fluid" alt="gallery"/>
      <div className="pack">
        <img src={img1} className="img-fluid" alt="gallery"/>
        <img src={img3} className="img-fluid" alt="gallery"/>
        <img src={img4} className="img-fluid" alt="gallery"/>
        <img src={img5} className="img-fluid" alt="gallery"/>
      </div>

    </div>
  )
}