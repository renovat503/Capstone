import '../styles/navbar.css'
import logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'


export default function Navbar(){
    return(<div className = "Navbar-wrapper">
            <div className='navigation-container'>
                <img className='logo' src={logo}/>
                <div className='menu-container'>
                    <h4 className='menu-text'>Home</h4>
                    <h4 className='menu-text'>About</h4>
                    <h4 className='menu-text'>Menu</h4>
                    <h4 className='menu-text'>Reservations</h4>
                    <h4 className='menu-text order'>Order Online</h4>
                    <FontAwesomeIcon className='shopping-icon' icon={faShoppingBag} />


                </div>
            </div>
            </div>)
}