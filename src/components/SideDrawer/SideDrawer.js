import React from 'react';
import "./SideDrawer.css";
import { Link } from 'react-router-dom';

const SideDrawer = () => {

    const handleCloseNav = () => {
        let element = document.getElementById('NaviationSideDrawer');
        element.classList.remove('openNavbar');
    }

    return (
        <nav id='NaviationSideDrawer' className=''>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/speakers'>Speakers</Link></li>
                <li><Link to='/archive'>Archive</Link></li>
                <li><Link to='/team'>Our Team</Link></li>
                <li><Link to='/terms-and-condition'>Terms and Condtions</Link></li>
                <li><a aria-label="button" target="_blank" rel="noreferrer noopener"href="https://forms.gle/SmhGX1VCkhsoRJ4NA" className="btn btn_primary show_720px">Grab a Ticket</a></li>
            </ul>
            <button aria-label="close" onClick={handleCloseNav} className='close_btn'>
                <i className="fa fa-times" aria-hidden="true" ></i>
            </button>
        </nav>
    );
}

export default SideDrawer;