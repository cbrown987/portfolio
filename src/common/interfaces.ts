import {ProjectLink} from "./classes";

export interface NavBarInformation {
    dropdownButtonText: string,
    dropdownProgramingText: string,
    dropdownMLText: string,
    dropdownContactText: string,
    languageSwitchText: string,
    toggleLanguage?: () => void
}


export interface ProjectCardInformation {
    projectName: string;
    projectImagePth: string;
    projectDescription: string;
    projectLinks: Array<ProjectLink>;
}

export interface ProjectInformation {
    groupName: String,
    projectList: Array<ProjectJson>,
    language: 'en' | 'fr'
}

export interface ContactInformation {
    socialsText: string;
    emailText: string;
    resumeText: string;
    downloadText: string;
}

export interface ProjectJson {
    projectName: {
        en: string;
        fr: string;
    };
    description: {
        en: string;
        fr: string;
    };
    imagePath: string;
    projectLinks: Array<{
        linkName: string;
        linkPath: string;
        linkImgPath: string;
    }>;
}
