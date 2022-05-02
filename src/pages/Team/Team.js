import React, { Fragment } from 'react';
import "./Team.css";
import Header from '../../components/Header/Header';
import Sidedrawer from '../../components/SideDrawer/SideDrawer';
import Landing from '../../components/Landing/Landing';
import Footer from '../../components/Footer/Footer';

import abhishek_sharma from "../../assets/team/new_team/abhishek_sharma.jpeg";
import poojan_naik from "../../assets/team/new_team/poojan_naik.jpeg";
import anagha_nair from "../../assets/team/new_team/anagha_nair_2.jpg";
import chaitanya from "../../assets/team/new_team/chaitanya_mohan.png";
import rudrayani_sawarkar from "../../assets/team/new_team/rudrayani_sawarkar.jpeg";
import sukanya_biradar from "../../assets/team/new_team/sukanya_biradar.jpg";
import vaishnavi_mokadam from "../../assets/team/new_team/vaishnavi_mokadam.png";
import tushar_singh from "../../assets/team/new_team/tushar_singh.jpeg";
import anika_bansal from "../../assets/team/new_team/anika_bansal.png";
import saniya_mulla from "../../assets/team/new_team/saniya_mulla.png";
import kanak_tayal from "../../assets/team/new_team/kanak_tayal.png";
import tanishq_hulyalkar from "../../assets/team/new_team/tanishq_hulyalkar.png";
import utkarsha_kesarkar from "../../assets/team/new_team/utkarsha_kesarkar.png";
import aditi_nalkande from "../../assets/team/new_team/aditi_nalkande.png";
import dnyandeep_chaudhari from "../../assets/team/new_team/dnyandeep_chaudhari.jpeg";
import sharvin_shitole from "../../assets/team/new_team/sharvin_shitole.jpeg";
import sushant_jadhav from "../../assets/team/new_team/sushant_jadhav.png";
import koushani_das from "../../assets/team/new_team/koushani_das.png";
import sanyog_mahajan from "../../assets/team/new_team/sanyog_mahajan.jpeg";
import divya_kumawat from "../../assets/team/new_team/divya_kumawat.png";
import dipalie_pujari from "../../assets/team/new_team/dipalie_pujari.png";
import rachit_roshan from "../../assets/team/new_team/rachit_roshan.jpeg";
import gagan_raj from "../../assets/team/new_team/gagan_raj.png";

const organisingDB = [
    {
        "id": 1,
        "name": "Abhishek Sharma",
        "position": "Organiser",
        "image": abhishek_sharma,
        "email": "mailto:acool9960@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "",
        "instagram": "https://www.instagram.com/nuefehist/",
        "website": ""
    },
    {
        "id": 2,
        "name": "Poojan Naik",
        "position": "Co-Organiser",
        "image": poojan_naik,
        "email": "mailto:poojannaik88@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "",
        "instagram": "https://www.instagram.com/poojan_naik_/",
        "website": ""
    },
    {
        "id": 3,
        "name": "Anagha Nair",
        "position": "Team Advisor",
        "image": anagha_nair,
        "email": "mailto:nairanagha1108@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/anagha-nair-2812981b1",
        "instagram": "http://Instagram.com/anaghanair._",
        "website": ""
    }
];
const curationDB = [
    {
        "id": 1,
        "name": "Tushar Singh",
        "position": "Lead",
        "image": tushar_singh,
        "email": "mailto:tusharsingh.contact@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "",
        "instagram": "https://www.instagram.com/official.tusharsingh?r=nametag",
        "website": "https://tusharsinghofficial.netlify.app/"
    },
    {
        "id": 2,
        "name": "Sukanya Biradar",
        "position": "Member",
        "image": sukanya_biradar,
        "email": "mailto:sukanyabiradar26@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "",
        "instagram": "",
        "website": ""
    },
    {
        "id": 3,
        "name": "Chaitanya",
        "position": "Member",
        "image": chaitanya,
        "email": "mailto:itschaitanyamohan@gmail.com",
        "facebook": "",
        "twitter": "https://twitter.com/chaimhn_",
        "linkedin": "",
        "instagram": "",
        "website": "https://chai.substack.com"
    },
    {
        "id": 4,
        "name": "Vaishnavi Mokadam",
        "position": "Member",
        "image": vaishnavi_mokadam,
        "email": "mailto:vaishnavimokadam@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/𝐕𝐚𝐢𝐬𝐡𝐧𝐚𝐯𝐢-𝐌𝐨𝐤𝐚𝐝𝐚𝐦-9b2b74205/",
        "instagram": "https://www.instagram.com/potatochipzzzzz_27/",
        "website": ""
        // https://twitter.com/VaishnaviMokad1
    },
    {
        "id": 5,
        "name": "Rudrayani Sawarkar ",
        "position": "Member",
        "image": rudrayani_sawarkar,
        "email": "mailto:rudrayanisawarkar18@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/rudrayani-sawarkar-984a27213",
        "instagram": "https://instagram.com/rudrayani_sawarkar?utm_medium=copy_link",
        "website": ""
    }
];
const socialMediaDB = [
    {
        "id": 1,
        "name": "Saniya Mulla",
        "position": "Lead",
        "image": saniya_mulla,
        "email": "mailto:saniyamulla108@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "linkedin.com/in/saniya-mulla-a6b49b205",
        "instagram": "https://www.instagram.com/sanyaaayaa/",
        "website": ""
    },
    {
        "id": 2,
        "name": "Anika Bansal",
        "position": "Member",
        "image": anika_bansal,
        "email": "mailto:anikabansal8153@gmail.com",
        "facebook": "https://www.facebook.com/anika.bansal.969",
        "twitter": "",
        "linkedin": "",
        "instagram": "https://instagram.com/_anikaabansal?utm_medium=copy_link",
        "website": ""
    },
    {
        "id": 3,
        "name": "Kanak Tayal",
        "position": "Member",
        "image": kanak_tayal,
        "email": "mailto:knktyl@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "",
        "instagram": "https://www.instagram.com/_kanak_13_/",
        "website": ""
    },
    {
        "id": 4,
        "name": "Tanishq Hulyalkar",
        "position": "Member",
        "image": tanishq_hulyalkar,
        "email": "mailto:tanishqhulyalkar07@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/tanishq-hulyalkar-482278203",
        "instagram": "https://instagram.com/tanishq_h7?utm_medium=copy_link",
        "website": ""
    },
    {
        "id": 5,
        "name": "Utkarsha Kesarkar ",
        "position": "Member",
        "image": utkarsha_kesarkar,
        "email": "mailto:kesarkarutkarsha1@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "",
        "instagram": "",
        "website": ""
    },
    {
        "id": 6,
        "name": "Aditi Nalkande",
        "position": "Member",
        "image": aditi_nalkande,
        "email": "mailto:aditinalkande146@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/aditi-nalkande-1406",
        "instagram": "",
        "website": ""
    }
];
const designDB = [
    {
        "id": 1,
        "name": "Sushant Jadhav",
        "position": "Lead",
        "image": sushant_jadhav,
        "email": "mailto:sushantjadhav393@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/sushant-s-jadhav-0a929a186",
        "instagram": "https://www.instagram.com/sushhant.j/",
        "website": ""
    },
    {
        "id": 2,
        "name": "Koushani Das",
        "position": "Member",
        "image": koushani_das,
        "email": "mailto:koushani2002@gmail.com",
        "facebook": "https://www.facebook.com/koushani.das.923",
        "twitter": "",
        "linkedin": "",
        "instagram": "https://www.instagram.com/___.koush.___/",
        "website": ""
    },
    {
        "id": 3,
        "name": "Sanyog Dilip Mahajan",
        "position": "Member",
        "image": sanyog_mahajan,
        "email": "mailto:sayogdmahajan@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/sanyog-mahajan-8288a7204",
        "instagram": "https://www.instagram.com/s_a_n_y_o_g_49/",
        "website": ""
    },
    {
        "id": 4,
        "name": "Divya Kumawat",
        "position": "Member",
        "image": divya_kumawat,
        "email": "mailto:divyakum1401@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/divya-kumawat-b651051a2",
        "instagram": "",
        "website": ""
    },
    {
        "id": 5,
        "name": "Sharvin Shitole",
        "position": "Member",
        "image": sharvin_shitole,
        "email": "mailto:win.sharvin15@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/sharvin-shitole-057175205/",
        "instagram": "https://www.instagram.com/win_sharvin/",
        "website": ""
    },
    {
        "id": 6,
        "name": "Dnyandeep Chaudhari",
        "position": "Member",
        "image": dnyandeep_chaudhari,
        "email": "mailto:im.dnyandeep@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://instagram.com/dnyan_deepzz?igshid=YmMyMTA2M2Y=",
        "instagram": "",
        "website": ""
    }
];
const coordinatorDB = [
    {
        "id": 1,
        "name": "Dipalie Pujari ",
        "position": "Chief Faculty Advisor",
        "image": dipalie_pujari,
        "email": "mailto:ddpujari@dypcoeakurdi.ac.in",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/dipalie-pujari-05005092",
        "instagram": "https://www.instagram.com/invites/contact/?i=1esamxsxut2mx&utm_content=m59iemb",
        "website": ""
    },
    {
        "id": 2,
        "name": "Rachit Roshan",
        "position": "Faculty Co-ordinator",
        "image": rachit_roshan,
        "email": "mailto:rroshan@dypcoeakurdi.ac.in",
        "facebook": "https://www.facebook.com/rachit.srivastava.7",
        "twitter": "",
        "linkedin": "",
        "instagram": "https://instagram.com/rachitroshan?r=nametag",
        "website": ""
    }
];
const websiteDB = [
    {
        "id": 1,
        "name": "Tushar Singh",
        "position": "Member",
        "image": tushar_singh,
        "email": "mailto:tusharsingh.contact@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "",
        "instagram": "https://www.instagram.com/official.tusharsingh?r=nametag",
        "website": "https://tusharsinghofficial.netlify.app/"
    },
    {
        "id": 2,
        "name": "Gagan Raj",
        "position": "Member",
        "image": gagan_raj,
        "email": "mailto:mrgaganraj@gmail.com",
        "facebook": "",
        "twitter": "https://twitter.com/savvy___guy",
        "linkedin": "https://www.linkedin.com/in/savvyguy/",
        "instagram": "",
        "website": ""
    }
];



const Team = () => {
    return (
        <Fragment>
            <Header/>
            <Sidedrawer/>
            <Landing  heading="Our Team"/>
            <article className="Team">
                <div className="container">

                    <section>
                        <h2>Organising Team</h2>
                        <div className="flex_wrap_evenly">
                            {organisingDB.map((eachMember) => (
                                <div className="team_member_template" key={eachMember.id}>
                                    <div className="team_member_template_background_image_container background_image"></div>
                                    <div className="team_member_template_image background_image">
                                        <div className="team_member_template_image_member background_image" style={{backgroundImage: `url(${eachMember.image})`}}></div>
                                    </div>
                                    <div className="team_member_template_info flex_regular">
                                        <div>
                                            <p className="team_member_template_info_name">{eachMember.name}</p>
                                            <p className="team_member_template_info_position">{eachMember.position}</p>
                                        </div>
                                    </div>
                                    <div className="team_member_template_social_media flex_space_evenly">
                                        { (eachMember.email!=='') && <div><a aria-label="email" target="_blank" rel="noreferrer noopener"href={eachMember.email}><i aria-hidden="true" className="fa fa-envelope-o"></i>&#0;</a></div> }
                                        { (eachMember.instagram!=='') && <div><a aria-label="instagram" target="_blank" rel="noreferrer noopener"href={eachMember.instagram}><i aria-hidden="true" className="fa fa-instagram"></i>&#0;</a></div> }
                                        { (eachMember.facebook!=='') && <div><a aria-label="facebook" target="_blank" rel="noreferrer noopener"href={eachMember.facebook}><i aria-hidden="true" className="fa fa-facebook"></i>&#0;</a></div> }
                                        { (eachMember.linkedin!=='') && <div><a aria-label="linkedin" target="_blank" rel="noreferrer noopener"href={eachMember.linkedin}><i aria-hidden="true" className="fa fa-linkedin"></i>&#0;</a></div> }
                                        { (eachMember.twitter!=='') && <div><a aria-label="twitter" target="_blank" rel="noreferrer noopener"href={eachMember.twitter}><i aria-hidden="true" className="fa fa-twitter"></i>&#0;</a></div> }
                                        { (eachMember.website!=='') && <div><a aria-label="website" target="_blank" rel="noreferrer noopener"href={eachMember.website}><i aria-hidden="true" className="fa fa-desktop"></i>&#0;</a></div> }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2>Curation Team</h2>
                        <div className="flex_wrap_evenly">
                            {curationDB.map((eachMember) => (
                                <div className="team_member_template" key={eachMember.id}>
                                    <div className="team_member_template_background_image_container background_image"></div>
                                    <div className="team_member_template_image background_image">
                                        <div className="team_member_template_image_member background_image" style={{backgroundImage: `url(${eachMember.image})`}}></div>
                                    </div>
                                    <div className="team_member_template_info flex_regular">
                                        <div>
                                            <p className="team_member_template_info_name">{eachMember.name}</p>
                                            <p className="team_member_template_info_position">{eachMember.position}</p>
                                        </div>
                                    </div>
                                    <div className="team_member_template_social_media flex_space_evenly">
                                    { (eachMember.email!=='') && <div><a aria-label="email" target="_blank" rel="noreferrer noopener"href={eachMember.email}><i aria-hidden="true" className="fa fa-envelope-o"></i>&#0;</a></div> }
                                        { (eachMember.instagram!=='') && <div><a aria-label="instagram" target="_blank" rel="noreferrer noopener"href={eachMember.instagram}><i aria-hidden="true" className="fa fa-instagram"></i>&#0;</a></div> }
                                        { (eachMember.facebook!=='') && <div><a aria-label="facebook" target="_blank" rel="noreferrer noopener"href={eachMember.facebook}><i aria-hidden="true" className="fa fa-facebook"></i>&#0;</a></div> }
                                        { (eachMember.linkedin!=='') && <div><a aria-label="linkedin" target="_blank" rel="noreferrer noopener"href={eachMember.linkedin}><i aria-hidden="true" className="fa fa-linkedin"></i>&#0;</a></div> }
                                        { (eachMember.twitter!=='') && <div><a aria-label="twitter" target="_blank" rel="noreferrer noopener"href={eachMember.twitter}><i aria-hidden="true" className="fa fa-twitter"></i>&#0;</a></div> }
                                        { (eachMember.website!=='') && <div><a aria-label="website" target="_blank" rel="noreferrer noopener"href={eachMember.website}><i aria-hidden="true" className="fa fa-desktop"></i>&#0;</a></div> }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2>Social Media and Engagement Team</h2>
                        <div className="flex_wrap_evenly">
                            {socialMediaDB.map((eachMember) => (
                                <div className="team_member_template" key={eachMember.id}>
                                    <div className="team_member_template_background_image_container background_image"></div>
                                    <div className="team_member_template_image background_image">
                                        <div className="team_member_template_image_member background_image" style={{backgroundImage: `url(${eachMember.image})`}}></div>
                                    </div>
                                    <div className="team_member_template_info flex_regular">
                                        <div>
                                            <p className="team_member_template_info_name">{eachMember.name}</p>
                                            <p className="team_member_template_info_position">{eachMember.position}</p>
                                        </div>
                                    </div>
                                    <div className="team_member_template_social_media flex_space_evenly">
                                    { (eachMember.email!=='') && <div><a aria-label="email" target="_blank" rel="noreferrer noopener"href={eachMember.email}><i aria-hidden="true" className="fa fa-envelope-o"></i>&#0;</a></div> }
                                        { (eachMember.instagram!=='') && <div><a aria-label="instagram" target="_blank" rel="noreferrer noopener"href={eachMember.instagram}><i aria-hidden="true" className="fa fa-instagram"></i>&#0;</a></div> }
                                        { (eachMember.facebook!=='') && <div><a aria-label="facebook" target="_blank" rel="noreferrer noopener"href={eachMember.facebook}><i aria-hidden="true" className="fa fa-facebook"></i>&#0;</a></div> }
                                        { (eachMember.linkedin!=='') && <div><a aria-label="linkedin" target="_blank" rel="noreferrer noopener"href={eachMember.linkedin}><i aria-hidden="true" className="fa fa-linkedin"></i>&#0;</a></div> }
                                        { (eachMember.twitter!=='') && <div><a aria-label="twitter" target="_blank" rel="noreferrer noopener"href={eachMember.twitter}><i aria-hidden="true" className="fa fa-twitter"></i>&#0;</a></div> }
                                        { (eachMember.website!=='') && <div><a aria-label="website" target="_blank" rel="noreferrer noopener"href={eachMember.website}><i aria-hidden="true" className="fa fa-desktop"></i>&#0;</a></div> }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2>Design and Production Team</h2>
                        <div className="flex_wrap_evenly">
                            {designDB.map((eachMember) => (
                                <div className="team_member_template" key={eachMember.id}>
                                    <div className="team_member_template_background_image_container background_image"></div>
                                    <div className="team_member_template_image background_image">
                                        <div className="team_member_template_image_member background_image" style={{backgroundImage: `url(${eachMember.image})`}}></div>
                                    </div>
                                    <div className="team_member_template_info flex_regular">
                                        <div>
                                            <p className="team_member_template_info_name">{eachMember.name}</p>
                                            <p className="team_member_template_info_position">{eachMember.position}</p>
                                        </div>
                                    </div>
                                    <div className="team_member_template_social_media flex_space_evenly">
                                    { (eachMember.email!=='') && <div><a aria-label="email" target="_blank" rel="noreferrer noopener"href={eachMember.email}><i aria-hidden="true" className="fa fa-envelope-o"></i>&#0;</a></div> }
                                        { (eachMember.instagram!=='') && <div><a aria-label="instagram" target="_blank" rel="noreferrer noopener"href={eachMember.instagram}><i aria-hidden="true" className="fa fa-instagram"></i>&#0;</a></div> }
                                        { (eachMember.facebook!=='') && <div><a aria-label="facebook" target="_blank" rel="noreferrer noopener"href={eachMember.facebook}><i aria-hidden="true" className="fa fa-facebook"></i>&#0;</a></div> }
                                        { (eachMember.linkedin!=='') && <div><a aria-label="linkedin" target="_blank" rel="noreferrer noopener"href={eachMember.linkedin}><i aria-hidden="true" className="fa fa-linkedin"></i>&#0;</a></div> }
                                        { (eachMember.twitter!=='') && <div><a aria-label="twitter" target="_blank" rel="noreferrer noopener"href={eachMember.twitter}><i aria-hidden="true" className="fa fa-twitter"></i>&#0;</a></div> }
                                        { (eachMember.website!=='') && <div><a aria-label="website" target="_blank" rel="noreferrer noopener"href={eachMember.website}><i aria-hidden="true" className="fa fa-desktop"></i>&#0;</a></div> }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2>Faculty Co-ordinators</h2>
                        <div className="flex_wrap_evenly">
                            {coordinatorDB.map((eachMember) => (
                                <div className="team_member_template" key={eachMember.id}>
                                    <div className="team_member_template_background_image_container background_image"></div>
                                    <div className="team_member_template_image background_image">
                                        <div className="team_member_template_image_member background_image" style={{backgroundImage: `url(${eachMember.image})`}}></div>
                                    </div>
                                    <div className="team_member_template_info flex_regular">
                                        <div>
                                            <p className="team_member_template_info_name">{eachMember.name}</p>
                                            <p className="team_member_template_info_position">{eachMember.position}</p>
                                        </div>
                                    </div>
                                    <div className="team_member_template_social_media flex_space_evenly">
                                    { (eachMember.email!=='') && <div><a aria-label="email" target="_blank" rel="noreferrer noopener"href={eachMember.email}><i aria-hidden="true" className="fa fa-envelope-o"></i>&#0;</a></div> }
                                        { (eachMember.instagram!=='') && <div><a aria-label="instagram" target="_blank" rel="noreferrer noopener"href={eachMember.instagram}><i aria-hidden="true" className="fa fa-instagram"></i>&#0;</a></div> }
                                        { (eachMember.facebook!=='') && <div><a aria-label="facebook" target="_blank" rel="noreferrer noopener"href={eachMember.facebook}><i aria-hidden="true" className="fa fa-facebook"></i>&#0;</a></div> }
                                        { (eachMember.linkedin!=='') && <div><a aria-label="linkedin" target="_blank" rel="noreferrer noopener"href={eachMember.linkedin}><i aria-hidden="true" className="fa fa-linkedin"></i>&#0;</a></div> }
                                        { (eachMember.twitter!=='') && <div><a aria-label="twitter" target="_blank" rel="noreferrer noopener"href={eachMember.twitter}><i aria-hidden="true" className="fa fa-twitter"></i>&#0;</a></div> }
                                        { (eachMember.website!=='') && <div><a aria-label="website" target="_blank" rel="noreferrer noopener"href={eachMember.website}><i aria-hidden="true" className="fa fa-desktop"></i>&#0;</a></div> }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2>Website and Operations Team</h2>
                        <div className="flex_wrap_evenly">
                            {websiteDB.map((eachMember) => (
                                <div className="team_member_template" key={eachMember.id}>
                                    <div className="team_member_template_background_image_container background_image"></div>
                                    <div className="team_member_template_image background_image">
                                        <div className="team_member_template_image_member background_image" style={{backgroundImage: `url(${eachMember.image})`}}></div>
                                    </div>
                                    <div className="team_member_template_info flex_regular">
                                        <div>
                                            <p className="team_member_template_info_name">{eachMember.name}</p>
                                            <p className="team_member_template_info_position">{eachMember.position}</p>
                                        </div>
                                    </div>
                                    <div className="team_member_template_social_media flex_space_evenly">
                                    { (eachMember.email!=='') && <div><a aria-label="email" target="_blank" rel="noreferrer noopener"href={eachMember.email}><i aria-hidden="true" className="fa fa-envelope-o"></i>&#0;</a></div> }
                                        { (eachMember.instagram!=='') && <div><a aria-label="instagram" target="_blank" rel="noreferrer noopener"href={eachMember.instagram}><i aria-hidden="true" className="fa fa-instagram"></i>&#0;</a></div> }
                                        { (eachMember.facebook!=='') && <div><a aria-label="facebook" target="_blank" rel="noreferrer noopener"href={eachMember.facebook}><i aria-hidden="true" className="fa fa-facebook"></i>&#0;</a></div> }
                                        { (eachMember.linkedin!=='') && <div><a aria-label="linkedin" target="_blank" rel="noreferrer noopener"href={eachMember.linkedin}><i aria-hidden="true" className="fa fa-linkedin"></i>&#0;</a></div> }
                                        { (eachMember.twitter!=='') && <div><a aria-label="twitter" target="_blank" rel="noreferrer noopener"href={eachMember.twitter}><i aria-hidden="true" className="fa fa-twitter"></i>&#0;</a></div> }
                                        { (eachMember.website!=='') && <div><a aria-label="website" target="_blank" rel="noreferrer noopener"href={eachMember.website}><i aria-hidden="true" className="fa fa-desktop"></i>&#0;</a></div> }
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

export default Team;