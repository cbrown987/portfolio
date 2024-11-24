import React, {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Analytics } from "@vercel/analytics/react"


import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Project} from "./components/Project/Project";
import {Contact} from "./components/Contact/Contact";

import data from './content.json'
import {AboutMe} from "./components/AboutMe/AboutMe";


function App() {
    const [language, setLanguage] = useState<'en' | 'fr'>('en');

    const toggleLanguage = () => {
        setLanguage(lang => lang === 'en' ? 'fr' : 'en');
    };

    return (
        <>
            <div className="App">
                <NavBar
                    dropdownButtonText={data.navbar.projects[language]}
                    dropdownProgramingText={data.navbar.projects_programing[language]}
                    dropdownMLText={data.navbar.projects_ml[language]}
                    dropdownContactText={data.navbar.contact[language]}
                    aboutText={data.navbar.about[language]}
                    languageSwitchText={data.navbar.switchLang[language]}
                    toggleLanguage={toggleLanguage}
                />
                <Header/>
                <Analytics />
                <Project
                    groupName={"programing"}
                    projectList={data.projects.programing}
                    language={language}
                />
                <hr/>
                <Project
                    groupName={"machine-learning"}
                    projectList={data.projects.ml}
                    language={language}
                />
                <hr/>
                <AboutMe
                    title={data.aboutMe.title[language]}
                    content={data.aboutMe.content[language]}
                />
                <hr/>
                <Contact
                    socialsText={data.contact.socials[language]}
                    emailText={data.contact.email[language]}
                    resumeText={data.contact.resume[language]}
                    downloadText={data.contact.downloadResume[language]}

                />
            </div>
        </>
    );

}

export default App;
