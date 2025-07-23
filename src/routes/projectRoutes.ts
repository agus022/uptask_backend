import { Router } from "express";
import {body, param} from "express-validator"
import { ProjectController } from "../controllers/ProjectController";
import { handleInputErrors } from "../middleware/validation";

const router = Router();

router.post("/",
    // reglas de validacion para campos al momento de crear proyecto
    body('projectName').notEmpty().withMessage("Project name is required"),
    body('clientName').notEmpty().withMessage("Client project name is required"),
    body('description').notEmpty().withMessage("Description is required"),
    // middleware para cachar los errores de validacion 
    handleInputErrors,
ProjectController.createProject);

router.get("/", ProjectController.getAllProjects);

router.get("/:id",
    // reglas de validacion para el id del proyecto
    param('id').isMongoId().withMessage("Invalid project ID"),
    handleInputErrors,
ProjectController.getProjectById);

router.put("/:id",
    // reglas de validacion para el id del proyecto
    param('id').isMongoId().withMessage("Invalid project ID"),
    body('projectName').notEmpty().withMessage("Project name is required"),
    body('clientName').notEmpty().withMessage("Client project name is required"),
    body('description').notEmpty().withMessage("Description is required"),
    handleInputErrors,
ProjectController.updateProject);


router.delete("/:id",
    // reglas de validacion para el id del proyecto
    param('id').isMongoId().withMessage("Invalid project ID"),
    handleInputErrors,
ProjectController.deleteProject);

export default router;