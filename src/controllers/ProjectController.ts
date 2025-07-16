import { Request, Response } from 'express';
import Project from '../models/Project';

export class ProjectController {

    static getAllProjects = async (req: Request, res: Response) => {
        res.send("Get all projects");
    }

    static createProject = async (req: Request, res: Response) => {
        const project = new Project(req.body);
        try {
            res.send("Creatting a new project.....");
            await project.save();
            res.send("Project created successfully :) ");

        } catch (error) {
            console.log(error);
            
        }

        

    }
}