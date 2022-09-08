import './index.scss'
import { Link, NavLink } from 'react-router-dom'
//import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {Bandlez_logo} from '../../assets/images/Bandlez_logo.png'
import { faEnvelope, faHome, faUser, fa} from '@fortawesome/free-solid-svg-icons'
//Fix <img> source below//
const Sidebar = () => (
   <div className="nav-bar">
      <Link className="logo" to="/">
         <img src="/images/Bandlez_logo.png" alt="logo" /> 
         <img className="sub-logo" src="/images/Bandlez_txt.png" alt="slobodan" />
      </Link>
      <nav>
         <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
         </NavLink>
         <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
         >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
         </NavLink>
         <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
         >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
         </NavLink>
      </nav>
      <ul>
         <li>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Bandlez">
               
            </a>
         </li>
      </ul>
   </div>
)

export default Sidebar
