import React from 'react';

import "./Home.css";
import Header from "../../components/Header/Header";
import Sidedrawer from '../../components/SideDrawer/SideDrawer';
import Footer from "../../components/Footer/Footer";

const Home = () => {
    
    return (

        <React.Fragment>
            
            <Header></Header>
            <Sidedrawer></Sidedrawer>

            <article className="Home_Landing flex_regular">
                <div className='container'>
                    <div className="univocal_background background_image_contain"></div>
                    <div className="underline"></div>
                    <div className="event_date">21st May, 2022</div>
                </div>
                <div className='bottom_image background_image'></div>
                <div class="area" >
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >
            </article>

            <article className="Home_About">
                <div className="container">
                    <div className='section'>
                        <div className='h3'>ABOUT TED</div>
                        <div className='about_grid'>
                            <p>TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks (18 minutes or less). TED is a global community, welcoming people from every discipline and culture who seek a deeper understanding of the world. We believe passionately in the power of ideas to change attitudes, lives and, ultimately, the world.</p>
                            <div className="background_image_contain about_image_about_ted"></div>
                        </div>
                    </div>
                    <div className='section'>
                        <div className='h3'>ABOUT TEDx</div>
                        <div className='about_grid'>
                            <p>In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxDYPAkurdi, where x = independently organized TED event. At our TEDxDYPAkurdi event, TEDTalks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</p>
                            <div className="background_image_contain about_image_about_tedx"></div>
                        </div>
                    </div>
                    <div className='section'>
                        <div className='h3'>UNIVOCAL</div>
                        <div className='about_grid'>
                            <p>The contrariety that lurks around our mind with flamboyant wings can only be nullified by a univocal approach. In a world full of ambiguous connotations, the incongruous battle between our rationale versus our sensation makes it difficult to focus on a specific conclusion. A definitive language thus gradually becomes the need of the hour. To chase away the dichotomy of the universe, we opt for an unambiguous philosophy that leads our way. Our dubious proposition relies on the univocality of our action for a befitting aftermath. For creating a world of unquestionable opportunity, we have to adhere to a particular belief system. A particular set of etiquettes is a prerequisite for reaching a discrete objective. In the arena owned by the implicit territory, only the explicit can prevail through its unrestrained force and rule like a sovereign.</p>
                            <div className="background_image_contain about_image_univocal"></div>
                        </div>
                    </div>
                </div>
            </article>

            <article className="Home_Banner flex_regular background_image">
                <div className="banner_background">
                    <div className="banner_grid">
                        <div className="banner_grid_quote">
                            <div className="banner_grid_quote_data">“The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.”</div>
                            <div className="banner_grid_quote_said_by"> ― Albert Einstein</div>
                        </div>
                        <div className="banner_grid_image background_image_contain"></div>
                    </div>
                </div>
            </article>

            <article className="Home_Sponsors">
                <div className="container">
                    <h1>OUR SPONSORS</h1>
                    <div className="sponsors_grid flex_wrap_evenly">
                        <div className="sponsors_grid_each sponsors_grid_1 background_image_contain"></div>
                        <div className="sponsors_grid_each sponsors_grid_2 background_image_contain"></div>
                        <div className="sponsors_grid_each sponsors_grid_3 background_image_contain"></div>
                        <div className="sponsors_grid_each sponsors_grid_4 background_image_contain"></div>
                        <div className="sponsors_grid_each sponsors_grid_5 background_image_contain"></div>
                    </div>
                </div>
            </article>

            <article className="Home_Venue background_image">
                <div className="venue_container">
                    <div className="venue_grid container">
                        <div className="venue_grid_info">
                            <h1>VENUE</h1>
                            <p>D. Y. Patil Educational Complex, Sector 29, Nigidi Pradhikaran, Akurdi, Pune 411044.</p>
                            <div className="button_container"><a href="https://www.google.com/maps?q=Dr.+D.Y.+Patil+Institute+of+Engineering,+Management+and+Research,+D.+Y.+Patil+Educational+Complex,+Akurdi,+Sector+29,+Ravet+Village+Rd,+Gurudwara+Colony,+Nigdi,+Pimpri-Chinchwad,+Maharashtra+411035&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj31-Tsjcn3AhVDAIgKHZNxAV0Q_AUoAnoECAEQBA" className="btn btn_primary" aria-label="locate">LOCATE</a></div>
                        </div>
                        <div className="venue_grid_map_embedded">
                            <iframe title="google maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15121.631403099624!2d73.7512569!3d18.6456854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9ef588fffff%3A0xed7869959e7d6300!2sDr.%20D.Y.%20Patil%20Institute%20of%20Engineering%2C%20Management%20and%20Research!5e0!3m2!1sen!2sin!4v1641211077076!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </article>

            <Footer></Footer>

        </React.Fragment>
    );
}

export default Home;