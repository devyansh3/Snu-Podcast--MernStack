import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, icon, children }) => {
    return (
        <div className={styles.card}>
            <div className={styles.headingWrapper}>
                <img src={`/images/${icon}.png`} alt="logo" />
                <h1 className={styles.heading}>{title}</h1>
            </div>
            {/* all propsrecived are wrapped in special propcalled children so saara dynamic text children mein recieve ho rha 
            hai */}
            {children}
        </div>
    );
};

export default Card;