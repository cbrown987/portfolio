import {AboutMeInformation} from "../../common/interfaces";
import React from "react";
import styles from './style.module.css';

const AboutMe: React.FC<AboutMeInformation> = (aboutMe) => {
    return (
        <section className={`${styles.aboutMe}`} id={"aboutme"}>
            <h4 className={`${styles.aboutMeh4}`}>{aboutMe.title}</h4>
            <p className={`${styles.aboutMep}`}>{aboutMe.content}</p>
        </section>
    );
};

export { AboutMe };