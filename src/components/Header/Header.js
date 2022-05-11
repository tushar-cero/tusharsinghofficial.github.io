import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {

    const handleOpenNav = () => {
        let element = document.getElementById('NaviationSideDrawer');
        element.classList.add('openNavbar');
    }
    
    const [headerBackground, setHeaderBackground] = useState(false);
    const handleHeaderBackground = () => {
        if(window.scrollY >= 100)
            setHeaderBackground(true); 
        else
            setHeaderBackground(false); 
    }
    window.addEventListener('scroll', handleHeaderBackground);

    return (
        <header className={headerBackground?'scrollingOn':' '}>
            <div className="header_container">
                <div className="flex_space_between">
                    <Link to="/" aria-label="logo" target="_blank" rel="noopener">
                        <div className="header_logo"></div>
                    </Link>
                    <div className='header_buttons'>
                        <a aria-label="email" target="_blank" rel="noreferrer noopener"href="https://forms.gle/SmhGX1VCkhsoRJ4NA" className="btn btn_primary hide-720px">Grab a Ticket</a>
                        <button aria-label="open-button" onClick={handleOpenNav} id='menu_icon' className='menu_icon'>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;