import React, { useRef, useEffect, useState } from 'react';
import { NavBarInformation } from "../common/interfaces";

const NavBar: React.FC<NavBarInformation> = (NavBarInformation: NavBarInformation) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const toggleRef = useRef<HTMLDivElement>(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
                setIsOpen(false);
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
            <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${isTransparent ? 'bg-transparent' : 'bg-light bg-opacity-25'}`} id="mainNav">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" onClick={scrollToTop}>Cooper Brown</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <div className="dropdown" ref={toggleRef}>
                                <button className="btn dropdown-toggle nav-link" type="button" id="dropdownMenuButton1"
                                        aria-expanded={isOpen} onClick={toggleDropdown}>
                                    {NavBarInformation.dropdownButtonText}
                                </button>
                                {isOpen && (
                                    <ul className={`dropdown-menu${isOpen ? " show" : ""}`} aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#programing">{NavBarInformation.dropdownProgramingText}</a></li>
                                        <li><a className="dropdown-item" href="#machine-learning">{NavBarInformation.dropdownMLText}</a></li>
                                    </ul>
                                )}
                            </div>
                            <li className="nav-item"><a className="nav-link" href="#contact">{NavBarInformation.dropdownContactText}</a></li>
                            <li className="nav-item"><a className="nav-link" onClick={NavBarInformation.toggleLanguage}>{NavBarInformation.languageSwitchText}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export { NavBar };
