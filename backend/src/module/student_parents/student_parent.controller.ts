import type { Request, Response } from "express";
import { sendResponse } from "../../utility/SendResponse";
import { StudentParentService } from "./student_parent.service";

const getStudentParents = async (req: Request, res: Response) => {
    try {
        const result = await StudentParentService.getStudentParentFromDB();
        if (!result || result.length === 0) {
            sendResponse(res, false, 404, "No student parents found");
        }
        sendResponse(res, true, 200, "Student parents fetched successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching student parents", error.message);
    }
}

const getStudentParentById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await StudentParentService.getStudentParentByIdFromDB(Number(id));
        if (!result) {
            sendResponse(res, false, 404, "Student parent not found");
        } else {
            sendResponse(res, true, 200, "Student parent fetched successfully", result);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching student parent", error.message);
    }
}


const addStudentParent = async (req: Request, res: Response) => {
    try {
        const result = await StudentParentService.addStudentParentToDB(req.body);
        if (!result) {
            sendResponse(res, false, 400, "Failed to add student parent");
        }
        sendResponse(res, true, 201, "Student parent added successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error adding student parent", error.message);
    }
}

const updateStudentParent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await StudentParentService.updateStudentParentInDB(Number(id), req.body);
        if (!result) {
            sendResponse(res, false, 404, "Student parent not found");
        }
        sendResponse(res, true, 200, "Student parent updated successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error updating student parent", error.message);
    }
}

const deleteStudentParent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await StudentParentService.deleteStudentParentFromDB(Number(id));
        if (!result) {
            sendResponse(res, false, 404, "Student parent not found");
        }
        sendResponse(res, true, 200, "Student parent deleted successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error deleting student parent", error.message);
    }
}

export const StudentParentsController = {
    getStudentParents,
    getStudentParentById,
    addStudentParent,
    updateStudentParent,
    deleteStudentParent
}