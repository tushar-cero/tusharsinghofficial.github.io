import React from 'react';
import "./Landing.css";

const Landing = ({heading}) => {

    return (
        <article className="Landing flex_regular">
            <div className="container">
                <div className="landing_heading">{heading}</div>
            </div>
            <div className="landing_bottom_image background_image"></div>
        </article>
    );
}

export default Landing;