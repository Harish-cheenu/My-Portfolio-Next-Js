import React from 'react';
import Lottie from 'react-lottie'
import Data from '../../assets/who.json'
import styles from './Who.module.scss';

const Who = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Data,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div className={styles.who__container}>
            <Lottie 
                title='lottie'  
                options={defaultOptions}
                height={400}
                width={400}
                style={{
                    width: '80%',
                    height: '50vh',
                    overflow: 'hidden',
                    margin: '4vh 0 0',
                    outline: 'none',
                    padding:' 0% 0px',
                 }}
                />
                <h2 className={styles.Heading}>
                    Who am I?
                </h2>
                <div className={styles.Para__Container}>
                    <div className={styles.Para}>
                        I&lsquo;m a Front-End Developer currently working in
                        <a href="https://fibonalabs.com/"  target={'_blank'} rel="noreferrer">
                        Fibonalabs
                        </a> 
                        in Bangalore, IN.
                    </div> 
                    <div className={styles.Para}>
                        I have serious passion for  building and creating intuitive with Next-gen Tech, dynamic user experiences. 
                        <a href="#contact">
                        Let&lsquo;s make something special.
                        </a>
                    </div>
                </div>
        </div>
    )
}
export default Who;
