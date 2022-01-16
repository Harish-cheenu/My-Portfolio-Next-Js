import React from 'react';
import styles from './Contact.module.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from "react-icons/gr";

const Contact = () => {
    const links= [
        {
            Name: 'LinkedIn',
            Icon: <FaLinkedin size={28}/>,
            Link: "https://www.linkedin.com/in/harish-narayananasamy-1bb16b160/"
        },
        {
            Name: 'GitHub',
            Icon: <FaGithub size={28}/>,
            Link: "https://github.com/Harish-cheenu"
        },
        {
            Name: 'Mail',
            Icon: <GrMail size={28}/>,
            Link: "mailto:harishcheenu1234@gmail.com"
        },
    ]
    return (
        <div className={styles.Contact__wrapper} id='contact'>
            <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
                <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
            </svg>
            <h2 className={styles.Heading}>Contact</h2>
            <div className={styles.para}>Have a question or want to work together?
            </div>

            <div className={styles.SocialMedia}>
            {links.map((e,i)=>
                <a href={e.Link} key={i} target='_blank' rel="noreferrer">
                    {e.Icon}
                </a>
            )}
            </div>
        </div>
    )
}
export default Contact;