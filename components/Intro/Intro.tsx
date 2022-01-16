/* eslint-disable @next/next/no-html-link-for-pages */

import React from 'react';
// import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Header from '../Header/Header';
import styles from './Intro.module.scss'
import images from '../../assets/images';
import Image from 'next/image';

const Intro = () => {
    const Title  ={
        title: "Hello, I'm",
        name: "Harish Narayanasamy."
    }
    return (
        <>
        <main className={styles.main} id='home'>
            <title>
                {Title?.title}
            <span>{Title?.name}</span>
            </title>
            <Typewriter
                options={{
                strings: ['Front-end developer', 'Intern at Fibonalabs, Bangalore.'],
                autoStart: true,
                loop: true,
                }}
            />
            <div className={styles.main__MoreBtn}>  
                <a href='/#about'>
                    View More 
                    <div className={styles.arrow}>
                        <Image src={images.ArrowRight} alt='Arrow' width={20} height={20}/>
                    </div>
                </a>
            </div>
        </main>
        <Header />
        </>
    )
}
export default Intro;