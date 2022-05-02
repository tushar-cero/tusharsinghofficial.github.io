import React, { Fragment } from 'react';
import "./Error.css";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <Fragment>
            <Header/>
            <article className="Error flex_regular">
                <div className="container">
                    <div className="error_background background_image_contain"></div>
                    <div className="back_link"><Link to="/">Back to Home</Link></div>
                </div>
            </article>
            <Footer/>
        </Fragment>
    );
}

export default Error;
