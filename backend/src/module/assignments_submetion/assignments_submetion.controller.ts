import type { Request, Response } from "express";
import { sendResponse } from "../../utility/SendResponse";
import { assignmentsSubmetionService } from "./assignments_submetion.service";

const getassignmentSubmetion = async (req: Request, res: Response) => {
    try {
        const result = await assignmentsSubmetionService.getAssignmentSubmission();
        if (result.length === 0) {
            return sendResponse(res, true, 200, "assignment submetion not exists", []);
        }
        sendResponse(res, true, 200, "Assignment submetion fetched successfully", result);
    } catch (error: any) {
        console.error("Error fetching assignment submetion:", error);
        sendResponse(res, false, 500, "An error occurred while fetching assignment submetion", null, error.message);
    }
}

const createassignmentSubmetion = async (req: Request, res: Response) => {
    try {
        const result = await assignmentsSubmetionService.createAssignmentSubmission(req.body);
        if (!result) {
            return sendResponse(res, false, 400, "Failed to create assignment submetion", null);
        }
        sendResponse(res, true, 201, "Assignment submetion created successfully", result);
    } catch (error: any) {
        console.error("Error creating assignment submetion:", error);
        sendResponse(res, false, 500, "An error occurred while creating assignment submetion", null, error.message);
    }
}

const getassignmentSubmetionById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await assignmentsSubmetionService.getAssignmentSubmissionsById(Number(id));
        if (!result) {
            return sendResponse(res, false, 404, "Assignment submetion not found", null);
        }
        sendResponse(res, true, 200, "Assignment submetion fetched successfully", result);
    } catch (error: any) {
        console.error("Error fetching assignment submetion:", error);
        sendResponse(res, false, 500, "An error occurred while fetching assignment submetion", null, error.message);
    }
}

const getassignmentSubmetionBystudentId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await assignmentsSubmetionService.getAssignmentSubmissionsById(Number(id));
        if (!result) {
            return sendResponse(res, false, 404, "Assignment submetion not found", null);
        }
        sendResponse(res, true, 200, "Assignment submetion fetched successfully", result);
    } catch (error: any) {
        console.error("Error fetching assignment submetion:", error);
        sendResponse(res, false, 500, "An error occurred while fetching assignment submetion", null, error.message);
    }
}

const getassignmentSubmetionByAssignmentId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await assignmentsSubmetionService.getAssignmentSubmissionsById(Number(id));
        if (!result) {
            return sendResponse(res, false, 404, "Assignment submetion not found", null);
        }
        sendResponse(res, true, 200, "Assignment submetion fetched successfully", result);
    } catch (error: any) {
        console.error("Error fetching assignment submetion:", error);
        sendResponse(res, false, 500, "An error occurred while fetching assignment submetion", null, error.message);
    }
}

const updateassignmentSubmetion = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await assignmentsSubmetionService.updateAssignmentSubmissionInDb(Number(id), req.body);
        if (!result) {
            return sendResponse(res, false, 404, "Assignment submetion not found", null);
        }
        sendResponse(res, true, 200, "Assignment submetion updated successfully", result);
    } catch (error: any) {
        console.error("Error updating assignment submetion:", error);
        sendResponse(res, false, 500, "An error occurred while updating assignment submetion", null, error.message);
    }
}

const deleteassignmentSubmetion = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await assignmentsSubmetionService.deleteAssignmentSubmissionFromDb(Number(id));
        console.log(result)
        if (!result) {
            return sendResponse(res, false, 404, "Assignment submetion not found", null);
        }
        sendResponse(res, true, 200, "Assignment submetion deleted successfully", result);
    } catch (error: any) {
        console.error("Error deleting assignment submetion:", error);
        sendResponse(res, false, 500, "An error occurred while deleting assignment submetion", null, error.message);
    }
}


export const assignmentSubmetionController = {
    getassignmentSubmetion, createassignmentSubmetion, getassignmentSubmetionById, getassignmentSubmetionBystudentId, getassignmentSubmetionByAssignmentId, updateassignmentSubmetion, deleteassignmentSubmetion
}