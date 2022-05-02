import React, { Fragment } from 'react';
import "./Speakers.css";

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Landing from '../../components/Landing/Landing';
import Sidedrawer from '../../components/SideDrawer/SideDrawer';

import chaitanya_mohan from "../../assets/team/new_team/chaitanya_mohan.png";
import sukanya_biradar from "../../assets/team/new_team/sukanya_biradar.jpg";

const speakerDB = [
    {
        "id": 2,
        "name": "Chaitanya",
        "profession": "Public Intellectual and Futurist",
        "image": chaitanya_mohan,
        "summary": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis molestias sed accusantium nisi recusandae ad quis at dignissimos, libero minima ipsa ipsam mollitia earum quam illo, veritatis quas numquam. Voluptate nemo adipisci exercitationem molestias pariatur voluptatum labore nobis repudiandae neque, illo voluptatem alias corporis aperiam veritatis! Libero, sapiente excepturi."
    },
    {
        "id": 3,
        "name": "Sukanya Biradar",
        "profession": "Public Figure and Philanthropist",
        "image": sukanya_biradar,
        "summary": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis molestias sed accusantium nisi recusandae ad quis at dignissimos, libero minima ipsa ipsam mollitia earum quam illo, veritatis quas numquam. Voluptate nemo adipisci exercitationem molestias pariatur voluptatum labore nobis repudiandae neque, illo voluptatem alias corporis aperiam veritatis! Libero, sapiente excepturi."
    }
]

const Speakers = () => {

    return (
        <Fragment>
            <Header/>
            <Sidedrawer/>
            <Landing  heading="Our Speakers"/>
            <article className="Speakers_Coming_Soon background_image">
                <div className="speakers_coming_soon_container flex_regular">
                    <p>COMING SOON</p>
                </div>
            </article>
            <article className="Speakers_Showcase">
                {speakerDB.map((eachMember) => (
                    <div className="speaker_card flex_space_between" key={eachMember.id}>
                        <div className="speaker_card_container">
                            <div className="speaker_card_image background_image" style={{backgroundImage: `url(${eachMember.image})`}}></div>
                            <div className="speaker_card_info flex_regular">
                                <div>
                                    <h3>SPEAKER</h3>
                                    <h1>{eachMember.name}</h1>
                                    <h2>{eachMember.profession}</h2>
                                    <p>{eachMember.summary}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </article>
            <Footer/>
        </Fragment>
    );
}

export default Speakers;