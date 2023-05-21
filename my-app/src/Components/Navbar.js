import { useRef } from "react";
import { FaBars,FaTimes } from "react-icons/fa";
import logoWhite from '../Images/AggieReuseLogoWhite.png';
import "../Styles/Navbar.css";


function Navbar() {
    const navRef = useRef();

    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
            <img src={logoWhite} className="navLogo" alt="AggieReuseLogoWhite"></img>
            <nav ref={navRef}>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <a href="/#">Aggie Rescue</a>
                <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;