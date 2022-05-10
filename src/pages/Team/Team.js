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

import shubhankar_barve from "../../assets/team/new_team/shubhankar_barve.jpeg";
import devansh_borse from "../../assets/team/new_team/devansh_borse.png";
import anshika_tiwari from "../../assets/team/new_team/anshika_tiwari.jpeg";
import abhishek_suryawanshi from "../../assets/team/new_team/abhishek_suryawanshi.jpeg";
import aman_shah from "../../assets/team/new_team/aman_shah.png";
import ajinkya_suryavanshi from "../../assets/team/new_team/ajinkya_suryavanshi.jpeg";

import vaishnavi_varkur from "../../assets/team/new_team/vaishnavi_varkur.jpeg";
import shreya_shankar from "../../assets/team/new_team/shreya_shankar.jpeg";

import nishka_kaushal from "../../assets/team/new_team/nishka_kaushal.jpeg";
import vishnupriya_sajeev from "../../assets/team/new_team/vishnupriya_sajeev.jpeg";
import suzanne_mondal from "../../assets/team/new_team/suzanne_mondal.jpeg";

import kaif_shaikh from "../../assets/team/new_team/kaif_shaikh.jpeg";
import aditya_magdum from "../../assets/team/new_team/aditya_magdum.jpeg";

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
        "id": 3,
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
        "id": 4,
        "name": "Rudrayani Sawarkar ",
        "position": "Member",
        "image": rudrayani_sawarkar,
        "email": "mailto:rudrayanisawarkar18@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/rudrayani-sawarkar-984a27213",
        "instagram": "https://instagram.com/rudrayani_sawarkar?utm_medium=copy_link",
        "website": ""
    },
    {
        "id": 5,
        "name": "Sukanya Biradar",
        "position": "Member",
        "image": sukanya_biradar,
        "email": "mailto:sukanyabiradar26@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "",
        "instagram": "",
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
const eventManagementDB = [
    {
        "id": 1,
        "name": "Anshika Tiwari",
        "position": "Member",
        "image": anshika_tiwari,
        "email": "mailto:anshikatiwari11942@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/anshika-tiwari-9187b7206",
        "instagram": "https://instagram.com/anshikatiwari11942?r=nametag",
        "website": ""
    },
    {
        "id": 2,
        "name": "Abhishek Suryawanshi ",
        "position": "Member",
        "image": abhishek_suryawanshi,
        "email": "mailto:8698abhiksuryawanahi@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/abhishek-suryawanshi-71839121a",
        "instagram": "https://www.instagram.com/_abhishek8881/",
        "website": ""
    },
    {
        "id": 3,
        "name": "Syed Aman Shah",
        "position": "Member",
        "image": aman_shah,
        "email": "mailto:shahaman121@gmail.com",
        "facebook": "https://www.facebook.com/100003186492854/",
        "twitter": "",
        "linkedin": "",
        "instagram": "https://instagram.com/syed._aman._shah",
        "website": ""
    },
    {
        "id": 4,
        "name": "Devansh Borse",
        "position": "Member",
        "image": devansh_borse,
        "email": "mailto:borsedevansh1@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/devansh-borse-722138212/",
        "instagram": "https://www.instagram.com/devansh.borse/",
        "website": ""
    },
    {
        "id": 5,
        "name": "Shubhankar Barve",
        "position": "Member",
        "image": shubhankar_barve,
        "email": "mailto:barveshubhankar@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/shubhankarbarve/",
        "instagram": "https://www.instagram.com/shubhankarbarve/",
        "website": ""
    },
    {
        "id": 6,
        "name": "Ajinkya Suryavanshi",
        "position": "Member",
        "image": ajinkya_suryavanshi,
        "email": "mailto:ajinkyasuryavanshi009@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "",
        "instagram": "https://www.instagram.com/notyet_ajinkya/",
        "website": ""
    }
];
const sponsorshipDB = [
    {
        "id": 1,
        "name": "Vaishnavi Varkur",
        "position": "Member",
        "image": vaishnavi_varkur,
        "email": "mailto:vaishnavi4802@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/vaishnavi-varkur",
        "instagram": "https://www.instagram.com/vaishnavivarkur/",
        "website": ""
    },
    {
        "id": 2,
        "name": "Shreya Shankar",
        "position": "Member",
        "image": shreya_shankar,
        "email": "mailto:shreyashankar97@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "",
        "instagram": "",
        "website": ""
    }
];
const videographyDB = [
    {
        "id": 1,
        "name": "Kaif Shaikh",
        "position": "Member",
        "image": kaif_shaikh,
        "email": "mailto:kaifs0351@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/kaifshaikhhh/",
        "instagram": "https://www.instagram.com/kaifshaikhhhh/",
        "website": ""
    },
    {
        "id": 2,
        "name": "Aditya Magdum",
        "position": "Member",
        "image": aditya_magdum,
        "email": "mailto:aditya19magdum@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/aditya-magdum-8aa908236",
        "instagram": "https://instagram.com/adit.ya_xd?igshid=YmMyMTA2M2Y=",
        "website": ""
    }
];
const stageDesignDB = [
    {
        "id": 1,
        "name": "Suzanne Mondal",
        "position": "Member",
        "image": suzanne_mondal,
        "email": "mailto:suzannemondal@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/suzanne-mondal-737b21213",
        "instagram": "https://www.instagram.com/suzannemondal/",
        "website": ""
    },
    {
        "id": 2,
        "name": "Nishka Kaushal",
        "position": "Member",
        "image": nishka_kaushal,
        "email": "mailto:nishka143177@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "https://www.linkedin.com/in/nishka-kaushal-651a161ba/",
        "instagram": "https://www.instagram.com/n7shka/",
        "website": ""
    },
    {
        "id": 3,
        "name": "Vishnupriya Sajeev",
        "position": "Member",
        "image": vishnupriya_sajeev,
        "email": "mailto:vishnupriyasajeev020@gmail.com",
        "facebook": "",
        "twitter": "",
        "linkedin": "",
        "instagram": "https://instagram.com/vpsajeev020?igshid=YmMyMTA2M2Y=",
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
                        <h2>Event Management Team</h2>
                        <div className="flex_wrap_evenly">
                            {eventManagementDB.map((eachMember) => (
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
                        <h2>Sponsorship and Budgeting Team</h2>
                        <div className="flex_wrap_evenly">
                            {sponsorshipDB.map((eachMember) => (
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
                        <h2>Videography Team</h2>
                        <div className="flex_wrap_evenly">
                            {videographyDB.map((eachMember) => (
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
                        <h2>Stage Design Team</h2>
                        <div className="flex_wrap_evenly">
                            {stageDesignDB.map((eachMember) => (
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