import React from 'react';
import styles from './Footer.module.scss'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from "react-icons/gr";
import images from '../../assets/images';
import Image from 'next/image';

const Footer = () => {
    const Year:number = new Date().getFullYear()
    const links= [
        {
            Name: 'LinkedIn',
            Icon: <FaLinkedin size={28}/>,
            Link: "https://www.linkedin.com/in/harish-narayanasamy/"
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
        <div  className={styles.Footer__wrapper}>
            <div className={styles.toUp}>
                <a href="#home">
                    <Image src={images.arrowUp} alt='upArrow' width={40} height={40}/>
                </a>
            </div>
             <div className={styles.SocialMedia}>
            {links.map((e,i)=>
                <a href={e.Link} key={i} target='_blank' rel="noreferrer">
                    {e.Icon}
                </a>
            )}
            </div>
            <div className={styles.Copy}>
                HARISH N 
                <span>
                    @{Year}   
                </span>
            </div>
        </div>
    )
}
export default Footer;