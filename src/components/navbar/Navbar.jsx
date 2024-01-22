import "./Navbar.scss";
import Wrapper from "../wrapper/Wrapper";
import Logo from "../../assets/Logo.svg"
import { useState } from "react";
import {FaBars} from "react-icons/fa"
import { Link as ScrollLink } from 'react-scroll';

const Navbar = ({}) => {
    const [showNav, setShowNav] = useState(false);
    return (
        <nav className="navbar">
            <Wrapper className="navbar__container">
                <a href="#" className="navbar__logo" onClick={() => setShowNav(false)}>
                    <img src={Logo} alt="" />
                </a>

                <ul className={`navbar__links ${showNav ? "show-nav" : ""}`}>
                    <ScrollLink to="section1" smooth={true} duration={500} onClick={() => setShowNav (false)}>
                        <a href="#" >Home</a>
                    </ScrollLink>
                    <ScrollLink to="section2" smooth={true} duration={500} onClick={() => setShowNav (false)}>
                        <a href="#" o>Video</a>
                    </ScrollLink>
                    <ScrollLink to="section3" smooth={true} duration={500} onClick={() => setShowNav (false)}>
                        <a href="#" o>Tiendas</a>
                    </ScrollLink>
                    <ScrollLink to="section4" smooth={true} duration={500} onClick={() => setShowNav (false)}>
                        <a href="#" >Formulario</a>
                    </ScrollLink>
                    <ScrollLink to="section5" smooth={true} duration={500} onClick={() => setShowNav (false)}>
                        <a href="">Redes</a>
                    </ScrollLink>
                </ul>
                <div className={`navbar__menubar ${showNav ? "bg-color" : ""}`} onClick={() => setShowNav(!showNav)}><FaBars/></div>
                
            </Wrapper>
        </nav>
    )
}

export default Navbar