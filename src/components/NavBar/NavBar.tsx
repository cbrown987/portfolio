import React, { useRef, useEffect, useState } from 'react';
import {NavBarInformation} from "../../common/interfaces";
import styles from './style.module.css'

const NavBar: React.FC<NavBarInformation> = (NavBarInformation) => {
    const [isExpandTabOpen, setIsExpandTabOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);  // Default to false for initially collapsed navbar
    const [isTransparent, setIsTransparent] = useState(true);
    const toggleRef = useRef<HTMLDivElement>(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const toggleDropdown = () => setIsExpandTabOpen(!isExpandTabOpen);

    const toggleNavbar = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
        if(isMobileNavOpen){setIsTransparent(false)}
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
                setIsExpandTabOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        const handleScroll = () => {
            const shouldBeTransparent = window.scrollY < 50;
            setIsTransparent(shouldBeTransparent);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={`navbar navbar-expand-lg navbar-light fixed-top ${isTransparent ? 'bg-transparent' : 'bg-light bg-opacity-25'}`}
                id="mainNav">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" onClick={scrollToTop}>Cooper Brown</a>
                    <button className="navbar-toggler" type="button" onClick={toggleNavbar}
                            aria-controls="navbarResponsive" aria-expanded={isMobileNavOpen}
                            aria-label="Toggle navigation">
                        Menu
                    </button>
                    <div className={`${isMobileNavOpen ? 'show' : 'collapse'} navbar-collapse ${styles.navbarNav}`}
                         id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <div className={`${styles.dropdown}`} ref={toggleRef}>
                                <button className={`btn dropdown-toggle nav-link ${styles.navLink}`} type="button"
                                        id="dropdownMenuButton1"
                                        aria-expanded={isExpandTabOpen} onClick={toggleDropdown}>
                                    {NavBarInformation.dropdownButtonText}
                                </button>
                                {isExpandTabOpen && (
                                    <ul className={`dropdown-menu ${isExpandTabOpen ? " show" : "collapse"} ${styles.dropdownMenu}`}
                                        aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item"
                                               href="#programing">{NavBarInformation.dropdownProgramingText}</a></li>
                                        <li><a className="dropdown-item"
                                               href="#machine-learning">{NavBarInformation.dropdownMLText}</a></li>
                                    </ul>
                                )}
                            </div>
                            <li className={`nav-item ${styles.navItem}`}><a className={`nav-link ${styles.navLink}`}
                                                                            href="#aboutme">{NavBarInformation.aboutText}</a>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}><a className={`nav-link ${styles.navLink}`}
                                                                            href="#contact">{NavBarInformation.dropdownContactText}</a>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}><a className={`nav-link ${styles.navLink}`}
                                                                            onClick={NavBarInformation.toggleLanguage}>{NavBarInformation.languageSwitchText}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export {NavBar};

