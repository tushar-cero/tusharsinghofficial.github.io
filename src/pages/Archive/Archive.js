import React, { Fragment } from 'react';
import "./Archive.css";
import Header from '../../components/Header/Header';
import Sidedrawer from '../../components/SideDrawer/SideDrawer';
import Landing from '../../components/Landing/Landing';
import Footer from '../../components/Footer/Footer';

/* ---------- Importing Images ---------- */

import aquib_wani from "../../assets/speakers/old_speakers/aquib_wani.jpeg";
import apurva_joshi from "../../assets/speakers/old_speakers/apurva_joshi.jpeg";
import kopal_nathani from "../../assets/speakers/old_speakers/kopal_nathani.jpeg";
import rj_kabir from "../../assets/speakers/old_speakers/rj_kabir.jpeg";
import suprabha_seshan from "../../assets/speakers/old_speakers/suprabha_seshan.jpeg";

import jayant_kulkarni from "../../assets/team/old_team/jayant_kulkarni.jpeg";
import sudhanshu_mishra from "../../assets/team/old_team/sudhanshu_mishra.jpeg";
import shruti_patil from "../../assets/team/old_team/shruti_patil.jpeg";
import abhishek_sharma from "../../assets/team/old_team/abhishek_sharma.jpeg";
import mugdha_falak from "../../assets/team/old_team/mugdha_falak.jpeg";
import mihika_pokharapurkar from "../../assets/team/old_team/mihika_pokharapurkar.jpeg";
import poojan_naik from "../../assets/team/old_team/poojan_naik.jpeg";
import anagha_nair from "../../assets/team/old_team/anagha_nair.jpeg";
import aman_mulani from "../../assets/team/old_team/aman_mulani.jpeg";
import ankan_biswas from "../../assets/team/old_team/ankan_biswas.jpeg";
import shubham_vijay from "../../assets/team/old_team/shubham_vijay.jpeg";
import shantanu_satpute from "../../assets/team/old_team/shantanu_satpute.jpeg";
import sharvin_shitole from "../../assets/team/old_team/sharvin_shitole.jpeg";
import aakash_tripathi from "../../assets/team/old_team/aakash_tripathi.jpeg";
import vaishnavi_sharma from "../../assets/team/old_team/vaishnavi_sharma.jpeg";
import ruhika_bulani from "../../assets/team/old_team/ruhika_bulani.jpeg";
import saniya_mulla from "../../assets/team/old_team/saniya_mulla.jpeg";
import sheen_tikoo from "../../assets/team/old_team/sheen_tikoo.jpeg";
import tejashree_wankhede from "../../assets/team/old_team/tejashree_wankhede.jpeg";
import saara_bansode from "../../assets/team/old_team/saara_bansode.jpeg";
import dewashish_ranade from "../../assets/team/old_team/dewashish_ranade.jpeg";
import vaishnavi_kadam from "../../assets/team/old_team/vaishnavi_kadam.jpeg";
import darshan_kadam from "../../assets/team/old_team/darshan_kadam.jpeg";
import shivam_ratnawat from "../../assets/team/old_team/shivam_ratnawat.jpeg";
import tushar_solanki from "../../assets/team/old_team/tushar_solanki.jpeg";
import tushar_singh from "../../assets/team/old_team/tushar_singh.jpeg";

const speakerDB = [
    {
        "id": 1,
        "name": "Aquib Wani",
        "profession": "DESIGNER & ART DIRECTOR",
        "link": "https://www.youtube.com/watch?v=4rgB3vf-cns",
        "image": aquib_wani
    },
    {
        "id": 2,
        "name": "Apurva Joshi",
        "profession": "FOUNDER-PRIVATE MATTERS",
        "link": "https://www.youtube.com/watch?v=9if3IKIddMI",
        "image": apurva_joshi
    },
    {
        "id": 3,
        "name": "Kopal Naithani",
        "profession": "AD-FILM DIRECTOR",
        "link": "https://www.youtube.com/watch?v=d2HsptED4sU",
        "image": kopal_nathani
    },
    {
        "id": 4,
        "name": "RJ Kabir",
        "profession": "RADIO JOCKEY",
        "link": "https://www.youtube.com/watch?v=WtWbkfIfSPc",
        "image": rj_kabir
    },
    {
        "id": 5,
        "name": "Suprabha Seshan",
        "profession": "ENVIRONMENTALIST",
        "link": "https://www.youtube.com/watch?v=2wUTECJl2Mg",
        "image": suprabha_seshan
    }
];
const organisersDB = [
    {
        "id": 1,
        "name": "Sudhanshu Mishra",
        "position": "Organiser",
        "image": sudhanshu_mishra
    },
    {
        "id": 2,
        "name": "Jayant Kulkarni",
        "position": "Co-organiser",
        "image": jayant_kulkarni
    }
];
const curationDB = [
    {
        "id": 1,
        "name": "Shruti Patil",
        "position": "Lead",
        "image": shruti_patil
    },
    {
        "id": 2,
        "name": "Abhishek Sharma",
        "position": "Member",
        "image": abhishek_sharma
    },
    {
        "id": 3,
        "name": "Mugdha Falak",
        "position": "Member",
        "image": mugdha_falak
    },
    {
        "id": 4,
        "name": "Mihika Pokharapurkar",
        "position": "Member",
        "image": mihika_pokharapurkar
    },
    {
        "id": 5,
        "name": "Poojan Naik",
        "position": "Member",
        "image": poojan_naik
    },
    {
        "id": 6,
        "name": "Anagha Nair",
        "position": "Member",
        "image": anagha_nair
    }
];
const sponsorshipDB = [
    {
        "id": 1,
        "name": "Aman Mulani",
        "position": "Lead",
        "image": aman_mulani
    },
    {
        "id": 2,
        "name": "Ankan Biswas",
        "position": "Member",
        "image": ankan_biswas
    },
    {
        "id": 3,
        "name": "Shubham Vijay",
        "position": "Member",
        "image": shubham_vijay
    },
    {
        "id": 4,
        "name": "Shantanu Satpute",
        "position": "Member",
        "image": shantanu_satpute
    },
    {
        "id": 5,
        "name": "Sharvin Shitole",
        "position": "Member",
        "image": sharvin_shitole
    },
    {
        "id": 6,
        "name": "Aakash Tripathi",
        "position": "Member",
        "image": aakash_tripathi
    }
];
const socialMediaDB = [
    {
        "id": 1,
        "name": "Vaishnavi Sharma",
        "position": "Lead",
        "image": vaishnavi_sharma
    },
    {
        "id": 2,
        "name": "Ruhika Bulani",
        "position": "Member",
        "image": ruhika_bulani
    },
    {
        "id": 3,
        "name": "Saniya Mulla",
        "position": "Member",
        "image": saniya_mulla
    },
    {
        "id": 4,
        "name": "Sheen Tikoo",
        "position": "Member",
        "image": sheen_tikoo
    },
    {
        "id": 5,
        "name": "Tejashree Wankhede",
        "position": "Member",
        "image": tejashree_wankhede
    },
    {
        "id": 6,
        "name": "Saara Bansode",
        "position": "Member",
        "image": saara_bansode
    }
];
const designDB = [
    {
        "id": 1,
        "name": "Dewashish Ranade",
        "position": "Lead",
        "image": dewashish_ranade
    },
    {
        "id": 2,
        "name": "Vaishnavi Kadam",
        "position": "Member",
        "image": vaishnavi_kadam
    },
    {
        "id": 3,
        "name": "Darshan Kadam",
        "position": "Member",
        "image": darshan_kadam
    },
    {
        "id": 4,
        "name": "Shivam Ratnawat",
        "position": "Member",
        "image": shivam_ratnawat
    }
];
const websiteDB = [
    {
        "id": 1,
        "name": "Tushar Solanki",
        "position": "Lead",
        "image": tushar_solanki
    },
    {
        "id": 2,
        "name": "Tushar Singh",
        "position": "Member",
        "image": tushar_singh
    }
];

const Archive = () => {
    return (
        <Fragment>
            <Header/>
            <Sidedrawer/>
            <Landing heading="Trancending Boundaries"/>
            <article className="Archive_Showcase background_image">
                <div className="archive_showcase_container flex_regular">
                    <div className="container">
                        <h1>Trancending Boundaries</h1>
                        <p>"There are many ways to be liberated, one of them is to transcend prejudged notions by evoking imagination that channels new ideas".The history is a witness of several seemingly ordinary folk who has abided by this in spirit, to unravel the mystic concepts of the world. Stagnated minds create barriers for progression, so a proper blend of thought-provoking ideas and wilful actions give birth to aspired evolution. We intend to bring in speakers who have untied the rigid ropes of conventions to distinct pebbles of progression.</p>
                    </div>
                </div>
            </article>

            <article className="Archive_Speakers">
                <div className="container">
                    <h1 className="archive_heading">Our Speakers</h1>
                    <div className="flex_wrap_evenly" style={{gap: "36px 16px"}}>
                        {speakerDB.map((eachSpeaker) => (
                            <div className="archive_speaker_template" key={eachSpeaker.id}>
                                <div className="front_frame flex_regular">
                                    <div>
                                        <div className="speaker_image background_image"  style={{backgroundImage: `url(${eachSpeaker.image})`}}></div>
                                        <p className="speaker_name">{eachSpeaker.name}</p>
                                        <p className="speakers_profession">{eachSpeaker.profession}</p>
                                        <div className="button_container">
                                            <a href={eachSpeaker.link} className="btn btn_secondary" aria-label="play"><i className="fa fa-play"></i>&nbsp;&nbsp;&nbsp;&nbsp;Watch&nbsp;&nbsp;</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="behind_frame background_image"></div>
                            </div>    
                        ))}
                    </div>
                </div>
            </article>

            <article className="Archive_Team">
                <div className="container">
                    <h1 className="archive_heading">Our Team</h1>
                    <section>
                        <h2>Organising Team</h2>
                        <div className="flex_wrap_evenly" style={{gap: "24px 16px"}}>
                            {organisersDB.map((eachMember) => (
                                <div className="archive_team_card flex_regular" key={eachMember.id}>
                                    <div>
                                        <div className="card_casing"></div>
                                        <div className="archive_team_card_image background_image"  style={{backgroundImage: `url(${eachMember.image})`}}></div>
                                        <div className="archive_team_card_name">{eachMember.name}</div>
                                        <div className="archive_team_card_position">{eachMember.position}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h2>Curation Team</h2>
                        <div className="flex_wrap_evenly" style={{gap: "24px 16px"}}>
                            {curationDB.map((eachMember) => (
                                <div className="archive_team_card flex_regular" key={eachMember.id}>
                                    <div>
                                        <div className="card_casing"></div>
                                        <div className="archive_team_card_image background_image"  style={{backgroundImage: `url(${eachMember.image})`}}></div>
                                        <div className="archive_team_card_name">{eachMember.name}</div>
                                        <div className="archive_team_card_position">{eachMember.position}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h2>Sponsorship and Management Team</h2>
                        <div className="flex_wrap_evenly" style={{gap: "24px 16px"}}>
                            {sponsorshipDB.map((eachMember) => (
                                <div className="archive_team_card flex_regular" key={eachMember.id}>
                                    <div>
                                        <div className="card_casing"></div>
                                        <div className="archive_team_card_image background_image"  style={{backgroundImage: `url(${eachMember.image})`}}></div>
                                        <div className="archive_team_card_name">{eachMember.name}</div>
                                        <div className="archive_team_card_position">{eachMember.position}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h2>Social Media and Engagement Team</h2>
                        <div className="flex_wrap_evenly" style={{gap: "24px 16px"}}>
                            {socialMediaDB.map((eachMember) => (
                                <div className="archive_team_card flex_regular" key={eachMember.id}>
                                    <div>
                                        <div className="card_casing"></div>
                                        <div className="archive_team_card_image background_image"  style={{backgroundImage: `url(${eachMember.image})`}}></div>
                                        <div className="archive_team_card_name">{eachMember.name}</div>
                                        <div className="archive_team_card_position">{eachMember.position}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h2>Design and Production Team</h2>
                        <div className="flex_wrap_evenly" style={{gap: "24px 16px"}}>
                            {designDB.map((eachMember) => (
                                <div className="archive_team_card flex_regular" key={eachMember.id}>
                                    <div>
                                        <div className="card_casing"></div>
                                        <div className="archive_team_card_image background_image"  style={{backgroundImage: `url(${eachMember.image})`}}></div>
                                        <div className="archive_team_card_name">{eachMember.name}</div>
                                        <div className="archive_team_card_position">{eachMember.position}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h2>Website and Operations Team</h2>
                        <div className="flex_wrap_evenly" style={{gap: "24px 16px"}}>
                            {websiteDB.map((eachMember) => (
                                <div className="archive_team_card flex_regular" key={eachMember.id}>
                                    <div>
                                        <div className="card_casing"></div>
                                        <div className="archive_team_card_image background_image"  style={{backgroundImage: `url(${eachMember.image})`}}></div>
                                        <div className="archive_team_card_name">{eachMember.name}</div>
                                        <div className="archive_team_card_position">{eachMember.position}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </article>

            <Footer/>
        </Fragment>
    );
}

export default Archive;