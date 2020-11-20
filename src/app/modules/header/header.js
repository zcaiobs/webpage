import { Link } from 'react-router-dom'
import logo from './img/logo.svg'
import './style/header.css'

export default function Header() {
  return (
    <div className='header'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'><img className="img" src={logo} alt='Logo'/></Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/galeria'>Galeria</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/sobre'>Sobre</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}