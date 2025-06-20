import '../styles/navbar.css'
import React, { useState } from "react";


const Navbar: React.FC = () => {
      const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    return (
    <>
      <button className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar top"></span>
        <span className="bar middle"></span>
        <span className="bar bottom"></span>
      </button>


      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <div className='menu'>
            
            <li><h1><a href="#section1">Projet</a></h1></li>
            <li><h1><a href="#section2">Matériel</a></h1></li>
            <li><h1><a href="#section3">L'équipe</a></h1></li>
            <li><h1>Contact</h1></li>
            
        </div>
        <div className='lignesubtile2'></div>
    </div>
    </>
    );
};

export default Navbar;