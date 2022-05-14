import React, { Fragment } from 'react';
import "./Speakers.css";

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Landing from '../../components/Landing/Landing';
import Sidedrawer from '../../components/SideDrawer/SideDrawer';

import shuva_raha from "../../assets/speakers/new_speakers/shuva_raha.jpeg";
import anushka_kelkar from "../../assets/speakers/new_speakers/anushka_kelkar.jpeg";
import ekta_dixit from "../../assets/speakers/new_speakers/ekta_dixit.jpeg";
import surabhi_singh from "../../assets/speakers/new_speakers/surabhi_singh.jpeg";

const speakerDB = [
    {
        "id": 1,
        "name": "Shuva Raha",
        "profession": "Head - New Initiatives at Council on Energy, Environment and Water",
        "image": shuva_raha,
        "summary": "Shuva leads CEEW’s strategic initiatives related to the geopolitics of energy – access, security, and justice; the low-carbon transition of core industrial sectors and transportation; circular economies of resources; and the global imperative for sustainable living amidst economic transformations. Her work includes policy advisory to governments, multilateral institutions, industry, and investors, and taking ‘The India Story’ global. Shuva has over 22 years of experience in public policy, branding, corporate operations, and project management. She manages her family's philanthropic initiative to support the education of underprivileged students through the Subir Raha Memorial Scholarship."
    },
    {
        "id": 2,
        "name": "Anushka Kelkar",
        "profession": "Founder at Brown Girl Gazing",
        "image": anushka_kelkar,
        "summary": "Anushka Kelkar is an entrepreneur, researcher, and photographer who has spent the last three years building Brown Girl Gazing, a virtual space for South Asian women to openly talk about gender-based violence, beauty standards, and unlearn shame together. She has photographed 200+ women and her work has been featured on platforms like The Huffington Post, CNN, Quartz, Times Of India, Hindustan Times, BuzzFeed India, Scroll, Mid-day, and NDTV amongst others. As the co-founder of Therapize, a mental healthcare start-up she is constantly exploring the intersections of mental wellness, self-esteem, and technology."
    },
    {
        "id": 3,
        "name": "Surabhi Singh",
        "profession": "Professor-Mktg. at Institute of Management Studies",
        "image": surabhi_singh,
        "summary": "Dr. Surabhi Singh is Professor-Mktg. in IMS Gaziabad. She has experience of 13 years in academics and 8 years in the industry. Her academic expertise includes Marketing and Data Analytics. She is associated with Emerald and IGI Global on their advisory and reviewer boards. She has more than 50 papers published in National and International journals of repute like Emerald, Inderscience, IGI Global, and Taylor & Francis. She has a dedicated section with Marketing Swan in Times of India/ Economic Times. She has authored three books and edited seven books in the area of Marketing and Research. She has been guiding Ph.D. scholars at Private as well as Government Universities. She had additionally taken up the honorary role in WICCI as President-Ghaziabad City Council between August 2020-August 2021."
    },
    {
        "id": 4,
        "name": "Ekta Dixit",
        "profession": "Life & Relationship Coach",
        "image": ekta_dixit,
        "summary": "Ekta Dixit is a Psychologist & Relationship Coach since a decade and over a year she's turned into content creator on Instagram where she guides people through her self growth strategies and mental health advices. She recently won Cosmopolitan Mental Health influencer of the year'2022 and has been a Tedx speaker in past. She is transforming millions of lives by assisting them through their struggles. After a decade of working with human psychology, Her simple goal is to create cognizance about the right relationship, emotional independence, along personal development."
    }
]

const Speakers = () => {

    return (
        <Fragment>
            <Header/>
            <Sidedrawer/>
            <Landing  heading="Our Speakers"/>
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