import {ProjectCardInformation} from "./interfaces";

export class ProjectLink{
    linkDescription: string;
    linkPath: string;
    linkImagePath?: string
    constructor(linkName: string, link: string, linkImagePath?: string) {
        this.linkDescription = linkName;
        this.linkPath = link;
        if(linkImagePath !== ""){
            this.linkImagePath = linkImagePath;
        }
    }
}

export class ListProjectInformation {
    list: Array<ProjectCardInformation> = [];
    constructor(list: Array<ProjectCardInformation>) {
        this.list = list;
    }
}