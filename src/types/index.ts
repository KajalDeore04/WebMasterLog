export interface Project {
    project_name: string;
    creator: string;
    date: string;
    github_url: string;
    avatar_url: string;
    description: string;
    tags: string[];
    category?: string;
    level?: "beginner" | "intermediate" | "advanced";
}

export interface ProjectsData {
    beginner: Project[];
    intermediate: Project[];
    advanced: Project[];
}