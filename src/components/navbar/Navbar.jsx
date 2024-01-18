import "./Navbar.scss";
import Wrapper from "../wrapper/Wrapper";
import Logo from "../../assets/Logo.svg"
import { useState } from "react";
import {FaBars} from "react-icons/fa"

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <nav className="navbar">
            <Wrapper className="navbar__container">
                <a href="#" className="navbar__logo" onClick={() => setShowNav(false)}>
                    <img src={Logo} alt="" />
                </a>

                <ul className={`navbar__links ${showNav ? "show-nav" : ""}`}>
                    <li onClick={() => setShowNav (false)}>
                        <a href="#">Home</a>
                    </li>
                    <li onClick={() => setShowNav (false)}>
                        <a href="#">Video</a>
                    </li>
                    <li onClick={() => setShowNav (false)}>
                        <a href="#">Formulario</a>
                    </li>
                    <li onClick={() => setShowNav (false)}>
                        <a href="#">Redes</a>
                    </li>
                </ul>
                <div className={`navbar__menubar ${showNav ? "bg-color" : ""}`} onClick={() => setShowNav(!showNav)}><FaBars/></div>
                
            </Wrapper>
        </nav>
    )
}

export default Navbar