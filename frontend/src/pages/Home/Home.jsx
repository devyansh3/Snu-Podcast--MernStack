import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const signInLinkStyle = {
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px',
    };
     let navigate = useNavigate();
    function startRegister() {
        navigate('/register');
    }
    return (
        <div className={styles.cardWrapper}>
            <Card title="Welcome to Snu Podcast!" icon="logo">
                <p className={styles.text}>
                    We’re working hard to get Codershouse ready for everyone!
                    While we wrap up the finishing youches, we’re adding people
                    gradually to make sure nothing breaks
                </p>
                <div>
                    <Button onClick={startRegister} text="Get your username" />
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>
                        Have an invite text?
                    </span>
                    {/* link needs inline styling because it is child component of home.jsx hence home.module.css is not applicable to it */}
                    <Link style={signInLinkStyle} to="/login">
                        Sign in
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default Home;