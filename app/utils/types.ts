import e from "express";

export interface WorkCarkProps{
    imageUrl: string;
    title: string;
    description: string;
    techStack: string[];
    gitHubLink: string;
    liveLink?: string;
}

export interface SkillProps{
    skills: string[];
}