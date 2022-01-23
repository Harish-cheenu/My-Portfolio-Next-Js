import React, { useEffect } from 'react';
import styles from './Projects.module.scss';
import images from '../../assets/images';
import Image from 'next/image';
import { projectAnime } from '../Anime/Anime';

const Projects = () => {
    const projectData = [
        {
            Name: 'Spotify Clone',
            tech: 'React / Node js',
            img: images.Spotify,
            link: 'https://github.com/Harish-cheenu/Spotify-clone',
            demo: 'https://harish-spotify-clone.netlify.app/'
        },
        {
            Name: 'My Portfolio',
            tech: 'Next Js',
            img: images.Portfolio,
            link: 'https://github.com/Harish-cheenu/My-Portfolio-Next-Js',
            demo: 'https://findharish.netlify.app/'
        },
        {
            Name: 'Student Database',
            tech: 'React / Node js / SQL',
            img: images.StudentDb,
            link: 'https://github.com/Harish-cheenu/student-database'
        }
    ]
    useEffect(() => {
        projectAnime()       
    }, []);
    
    return (
        <div className={styles.Projects__wrapper} id='project'>
            <h2 className={styles.Heading}>projects</h2>
            <div className={styles.Container}>   
            {
                projectData.map((e,i)=>
                <div key={i} className={styles.card}>
                    <div className={styles.img}>
                        <Image src={e.img} alt={'spotify'} layout='intrinsic' width={250} height={250}/>
                    </div>
                    <div className={styles.projectData}>
                        <div className={styles.name}>{e.Name}</div>
                        <div  className={styles.tech}>{e.tech}</div>
                        <div className={styles.toCode}>
                            <a href={e.link} target='_blank' rel="noreferrer" className={styles.codeImg}>
                                <Image src={images?.Code} alt="code" layout='intrinsic'  width={25} height={25}/>
                            </a>
                            {
                            e.demo &&
                            <a href={e.demo} target='_blank' rel="noreferrer">
                                <Image src={images?.Demo} alt="demo" layout='intrinsic'  width={25} height={25}/>
                            </a>
                            }
                        </div>
                    </div>
                </div>
                )
            }
            </div>
        </div>
    )
}
export default Projects;
