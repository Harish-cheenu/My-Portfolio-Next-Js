import React, { useEffect } from 'react';
import Skills from '../Skills/Skills';
import Who from '../Who/Who';
import styles from './About.module.scss';
import { aboutAnime } from '../Anime/Anime';

const About = () => {
    useEffect(() => {
         aboutAnime()
    }, []);
    return (
        <div className={styles.About__wrapper} id='about'>
            <h2 className={styles.Heading}>About</h2>
            <div className={styles.Container}>
                <Who />
                <Skills />
            </div>
        </div>
    )
}
export default About;
