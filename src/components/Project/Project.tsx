import React from "react";
import {ProjectCardInformation, ProjectInformation, ProjectJson} from "../../common/interfaces";
import {ProjectCard} from "./ProjectCard/ProjectCard";
import {ProjectLink} from "../../common/classes";

export const Project: React.FC<ProjectInformation> = (ProjectInformation: ProjectInformation) => {

    const convertProjectsToComponents = (projects: ProjectJson[]): ProjectCardInformation[] => {
        return projects.map((project) => ({
            projectName: project.projectName[ProjectInformation.language],
            projectImagePth: project.imagePath,
            projectDescription: project.description[ProjectInformation.language],
            projectLinks: project.projectLinks.map(link =>
                new ProjectLink(link.linkName, link.linkPath, link.linkImgPath)
            )
        }));
    };

    const Projects = convertProjectsToComponents(ProjectInformation.projectList);

    return (
        <div id={`${ProjectInformation.groupName}`}>
            <div className={'container p-4'}>
                <div className={'row '}>
                    {Projects.map((project, index) => (
                        <div key={index} className={"p-3 col-md-4"}>
                            <ProjectCard
                                projectName={project.projectName}
                                projectImagePth={project.projectImagePth}
                                projectDescription={project.projectDescription}
                                projectLinks={project.projectLinks}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}