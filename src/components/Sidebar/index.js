import './index.scss'
import { Link, NavLink } from 'react-router-dom'
//import LogoS from '../../assets/images/logo-s.png'
//import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {Bandlez_logo} from '../../assets/images/Bandlez_logo.png'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
//Fix <img> source below//
const Sidebar = () => (
   <div className="nav-bar">
      <Link className="logo" to="/">
         <img src="/images/Bandlez_logo.png" alt="logo" />
         <img
            className="sub-logo"
            src="/images/Bandlez_txt.png"
            alt="slobodan"
         />
      </Link>
      <nav>
         <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#9999" />
         </NavLink>
         <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
         >
            <FontAwesomeIcon icon={faUser} color="#9999" />
         </NavLink>
         <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
         >
            <FontAwesomeIcon icon={faEnvelope} color="#9999" />
         </NavLink>
      </nav>
      <div className="wrapper">
         <ul>
         <li>
               <a
                  name="Spotify"
                  target="_blank"
                  rel="noreferrer"
                  href="https://open.spotify.com/artist/7kIxfmjYGQui2LCqXGLfWA?si=tPhvq0XFSpCThhp1dIdJFQ"
               >
                  <img
                     className="social_icon"
                     src="/images/spotify_icon.png"
                     alt="logo"
                  />
               </a>
            </li>
            <li>
               <a
                  name="Facebook"
                  target="_blank"
                  rel="noreferrer"
                  href="https://Facebook.com/Bandlez"
               >
                  <img
                     className="social_icon"
                     src="/images/facebook_icon.png"
                     alt="logo"
                  />
               </a>
            </li>
            <li>
               <a
                  name="Github"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/DiandreRuiz"
               >
                  <img
                     className="social_icon"
                     src="/images/github_icon.png"
                     alt="logo"
                  />
               </a>
            </li>
            
         </ul>
      </div>
   </div>
)

export default Sidebar
