import React from 'react';
import styles from './Skills.module.scss';

const Skills = () => {
    const skillArr = [
        {
            lang: 'CSS',
            per: '90'
        },
        {
            lang: 'HTML',
            per: '90'
        },
        {
            lang: 'JavaScript',
            per: '80'
        },
        {
            lang: 'React',
            per: '80'
        },
        {
            lang: 'Next js',
            per: '80'
        },
        {
            lang: 'Node js',
            per: '40'
        },
        {
            lang: 'UI Design',
            per: '20'
        },
    ]
    return (
        <div className={styles.Skills__wrapper}>
            <div className={styles.Skills__Container}>
                {skillArr.map((e,i)=>
                <div key={i} className={styles.Skill}>
                    <label  className={styles.Skill__Name}>{e.lang}</label>
                    <progress  className={styles.Skill__Progress}id="file" value={e.per} max="100"> 32% </progress>
                    <label  className={styles.Skill__Pre}>{e.per}%</label>
                </div>
                )}
            </div>
        </div>
    )
}
export default Skills;