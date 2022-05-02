import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {

    const handleScrollTop = () => {
        var rootElement = document.documentElement;
        rootElement.scrollTo(
            {
                top: 0, 
                behavior: "smooth"
            }
        );
    }
    return (
        <footer>
            <div className="container">
                <div className="footer_upper_grid flex_space_between">
                    <Link aria-label="background-image" target="_blank" rel="noreferrer noopener"to="/"><div className="background_image_contain footer_upper_grid_logo"></div></Link>
                    <div className="footer_upper_grid_button">
                        <button aria-label="up" onClick={()=>handleScrollTop()}><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div className="footer_social_media flex_space_evenly">
                    <div><a aria-label="email" target="_blank" rel="noreferrer" href="https://www.instagram.com/tedxdypakurdi/"><i aria-hidden="true" className="fa fa-instagram"></i>&#0;</a></div>
                    <div><a aria-label="linkedin" target="_blank" rel="noreferrer noopener"href="https://www.linkedin.com/company/tedxdypakurdi/"><i aria-hidden="true" className="fa fa-linkedin"></i>&#0;</a></div>
                    <div><a aria-label="facebook" target="_blank" rel="noreferrer noopener"href="https://www.facebook.com/tedxdypakurdi/"><i aria-hidden="true" className="fa fa-facebook"></i>&#0;</a></div>
                </div>
                <div className="footer_info_grid">
                    <div className="footer_info_grid_contact_us">
                        <h1>CONTACT US</h1>
                        <ul>
                            <li><a aria-label="email" target="_blank" rel="noreferrer noopener"href="mailto:tedxdypakurdi@gmail.com"><i aria-hidden="true" className="fa fa-envelope-o"></i> tedxdypakurdi@gmail.com</a></li>
                            <li><a aria-label="google-map" target="_blank" rel="noreferrer noopener"href="https://goo.gl/maps/dCTEdHY9svPqbSSx6"><i aria-hidden="true" className="fa fa-map-marker"></i> D. Y. Patil Educational Complex, Sector 29, Nigidi Pradhikaran, Akurdi, Pune 411044.</a></li>
                            <li><a aria-label="phone" target="_blank" rel="noreferrer noopener"href="tel:+919960304336"><i aria-hidden="true" className="fa fa-phone"></i> Abhishek Sharma (Organiser)</a></li>
                        </ul>
                    </div>
                    <div className="footer_info_grid_partenr_with_us">
                        <h1>PARTNER WITH US</h1>
                        <ul>
                            <li><a aria-label="phone-number" target="_blank" rel="noreferrer noopener"href="tel:+919960304336"><i aria-hidden="true" className="fa fa-phone"></i>  Abhishek Sharma (Organiser)</a></li>
                            <li><a aria-label="phone-number" target="_blank" rel="noreferrer noopener"href="tel:+918849407882"><i aria-hidden="true" className="fa fa-phone"></i> Poojan Naik (Co-Organiser)</a></li>
                            <li><a aria-label="phone-number" target="_blank" rel="noreferrer noopener"href="tel:+918446135153"><i aria-hidden="true" className="fa fa-phone"></i> Anagha Nair (Team Advisor)</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_copyright">
                    <p>This independent TEDx event is operated under license from TED.</p>
                    <p>TEDxDYP Akurdi ©  2021-2022 . All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;