import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <div className={styles.Contact__wrapper} id='contact'>
            <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
                <path d="M0 0 L50 100 L100 0 Z"></path>
            </svg>
            <h2 className={styles.Heading}>Contact</h2>
            <div className={styles.para}>Have a question or want to work together?
            </div>

            <form  className={styles.Form}>
                <input type='text'  className={styles.Form__Name} placeholder='Name' required minLength={2} maxLength={25}/>
                <input type='email'  className={styles.Form__Email} placeholder='Email' required/>
                <input type="text"  className={styles.Form__Msg} placeholder='Enter your message' required maxLength={150}/>
                <div className={styles.Form__Submit}>
                    <input type="submit" value='SUBMIT'/>
                </div>
            </form>
        </div>
    )
}
export default Contact;