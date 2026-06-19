import type { Request, Response } from "express";
import { sendResponse } from "../../utility/SendResponse";
import { SubjectService } from "./subject.service"

const getsubjects = async (req: Request, res: Response) => {
    try {
        const result = await SubjectService.getsubjectFromDb();
        if (!result || result.length === 0) {
            sendResponse(res, false, 404, "No subjects found");
        } else {
            sendResponse(res, true, 200, "Subjects fetched successfully", result);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching subjects", error.message);
    }
}

const getsubjectById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await SubjectService.getsubjectByIdFromDb(Number(id));
        if (!result) {
            sendResponse(res, false, 404, "Subject not found");
        } else {
            sendResponse(res, true, 200, "Subject fetched successfully", result);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching subject", error.message);
    }
}
const getsubjectByclassId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await SubjectService.getsubjectByclassIdFromDb(Number(id));
        if (!result) {
            sendResponse(res, false, 404, "Subject not found");
        } else {
            sendResponse(res, true, 200, "Subject fetched successfully", result);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching subject", error.message);
    }
}

const addsubject = async (req: Request, res: Response) => {
    try {
        const result = await SubjectService.addsubjectToDb(req.body);
        if (!result) {
            sendResponse(res, false, 400, "Failed to add subject");
        } else {
            sendResponse(res, true, 201, "Subject added successfully", result);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error adding subject", error.message);
    }
}

const updatesubject = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await SubjectService.updatesubjectInDb(Number(id), req.body);
        if (!result) {
            sendResponse(res, false, 404, "Subject not found");
        } else {
            sendResponse(res, true, 200, "Subject updated successfully", result);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error updating subject", error.message);
    }
}

const deletesubject = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await SubjectService.deletesubjectFromDb(Number(id));
        if (!result) {
            sendResponse(res, false, 404, "Subject not found");
        } else {
            sendResponse(res, true, 200, "Subject deleted successfully", result);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error deleting subject", error.message);
    }
}

export const SubjectController = {
    getsubjects,
    getsubjectById,
    getsubjectByclassId,
    addsubject,
    updatesubject,
    deletesubject
}