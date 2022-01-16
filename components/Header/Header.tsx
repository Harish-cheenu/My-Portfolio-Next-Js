import React,{ useState, useEffect } from 'react';
import styles from './Header.module.scss';
import images from '../../assets/images';
import Image from 'next/image';

const Header = () => {
    const [menuState, setMenuState] = useState(false)
    return (
    <div className={styles.Header}>
        <ul className={`${styles.HeaderMenu} ${menuState?styles.visible:""}`}>
            <li className={styles.HeaderMenuItem} onClick={()=>{setMenuState(e=>!e)}}><a href="\#home">Home</a></li>
            <li className={styles.HeaderMenuItem} onClick={()=>{setMenuState(e=>!e)}}><a href="\#about">About</a></li>
            <li className={styles.HeaderMenuItem} onClick={()=>{setMenuState(e=>!e)}}><a href="\#project">Project</a></li>
            <li className={styles.HeaderMenuItem} onClick={()=>{setMenuState(e=>!e)}}><a href="\#contact">Contact</a></li>
        </ul>
        <div className={styles.MenuIcon}>
            <Image 
            src={images.MenuIcon.src} 
            alt="MenuIcon" 
            width={40} 
            height={40}
            onClick={()=>{setMenuState(e=>!e)}}/>
        </div>
    </div>
    )
}
export default Header;