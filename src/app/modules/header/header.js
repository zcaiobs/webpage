import { Link } from 'react-router-dom'
import img from './img/logo.svg'
import './style/header.css'

export default function Header() {
  return (
    <div className='header'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'><img className="img" src={img}/></Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>Início</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/Galeria'>Galeria</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/Sobre'>Sobre</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/Contato'>Contato</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}