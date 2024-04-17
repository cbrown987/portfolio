import React, { useState } from "react";
import styles from './style.module.css';
import {ProjectCardInformation} from "../../../common/interfaces";
import {ProjectLink} from "../../../common/classes";

const ProjectCard: React.FC<ProjectCardInformation> = (projectInformation: ProjectCardInformation) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <>
            <div className={`card ${styles.projectCard}`}>
                {
                    projectInformation.projectImagePth ?
                        <img className={`card-img-top ${styles.cardImg}`} src={projectInformation.projectImagePth} alt=" " /> : null
                }
                <div className="card-body">
                    <h5 className="card-title">
                        {projectInformation.projectName}
                    </h5>
                    <p className={`${styles.cardText} ${isExpanded ? styles.expanded : ''}`}>
                        {projectInformation.projectDescription}
                    </p>
                    <button onClick={toggleExpand} className="btn btn-link">
                        {isExpanded ? 'Show Less' : 'Read More'}
                    </button>
                    <div>
                        {projectInformation.projectLinks.map((link: ProjectLink, index) => (
                            <a key={index} className={`btn btn-dark ${styles.buttonMargin}`} href={link.linkPath}>
                                {link.linkImagePath ? <img className={styles.icon_button} src={link.linkImagePath} alt={link.linkDescription}/> : link.linkDescription}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export { ProjectCard };
