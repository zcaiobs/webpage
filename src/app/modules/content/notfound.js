import img1 from './component/img/notfound.svg'
import './component/style/notfound.css'

export default function NotFoundPage() {
    return(
        <div className="not-found-page">
            <img src={img1} alt="not found page"/>
        </div>
    )
}