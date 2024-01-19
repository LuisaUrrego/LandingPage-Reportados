import "./Navbar.scss";
import Wrapper from "../wrapper/Wrapper";
import Logo from "../../assets/Logo.svg"
import { useState } from "react";
import {FaBars} from "react-icons/fa"
import banner from "../banner/Banner"
import footer from '../footer/Footer'

const Navbar = ({ onSeccion1Click, onSeccion2Click, onSeccion3Click, onSeccion4Click}) => {
    const [showNav, setShowNav] = useState(false);
    return (
        <nav className="navbar">
            <Wrapper className="navbar__container">
                <a href="#" className="navbar__logo" onClick={() => setShowNav(false)}>
                    <img src={Logo} alt="" />
                </a>

                <ul className={`navbar__links ${showNav ? "show-nav" : ""}`}>
                    <li onClick={(onSeccion1Click) => setShowNav (false)}>
                        <a href="#" >Home</a>
                    </li>
                    <li onClick={(onSeccion2Click) => setShowNav (false)}>
                        <a href="#" o>Video</a>
                    </li>
                    <li onClick={(onSeccion3Click) => setShowNav (false)}>
                        <a href="#" >Formulario</a>
                    </li>
                    <li onClick={(onSeccion4Click) => setShowNav (false)}>
                        <a href="">Redes</a>
                    </li>
                </ul>
                <div className={`navbar__menubar ${showNav ? "bg-color" : ""}`} onClick={() => setShowNav(!showNav)}><FaBars/></div>
                
            </Wrapper>
        </nav>
    )
}

export default Navbar