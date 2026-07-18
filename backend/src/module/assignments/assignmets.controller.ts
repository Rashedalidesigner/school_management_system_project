import type { Request, Response } from "express";
import { assignmentsService } from "./assignments.service";
import { sendResponse } from "../../utility/SendResponse";

const getAssignments = async (req: Request, res: Response) => {
    try {
        const result = await assignmentsService.getassignmentsIntoDb();
        if (result.length === 0) {
            return sendResponse(res, true, 200, "assignment not exists", []);
        }
        sendResponse(res, true, 200, "Assignments fetched successfully", result);
    } catch (error: any) {
        console.error("Error fetching assignments:", error);
        sendResponse(res, false, 500, "An error occurred while fetching assignments", null, error.message);
    }
}

const createAssignment = async (req: Request, res: Response) => {
    try {
        const result = await assignmentsService.createAssignmentIntoDb(req.body);
        if (!result) {
            return sendResponse(res, false, 200, "Failed to create assignment", null);
        }
        sendResponse(res, true, 201, "Assignment created successfully", result);
    } catch (error: any) {
        console.error("Error creating assignment:", error);
        sendResponse(res, false, 500, "An error occurred while creating the assignment", null, error.message);
    }
}


const getAssignmentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (id === undefined) {
            return sendResponse(res, false, 200, "Assignment ID is required", null);
        }
        const result = await assignmentsService.getAssignmentByIdFromDb(Number(id));
        if (!result) {
            return sendResponse(res, false, 200, "Assignment not exists", null);
        }
        sendResponse(res, true, 200, "Assignment fetched successfully", result);
    } catch (error: any) {
        console.error("Error fetching assignment:", error);
        sendResponse(res, false, 500, "An error occurred while fetching the assignment", null, error.message);
    }
}

const updateAssignment = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (id === undefined) {
            return sendResponse(res, false, 200, "Assignment ID is required", null);
        }
        const result = await assignmentsService.updateAssignmentInDb(Number(id), req.body);
        if (!result) {
            return sendResponse(res, false, 200, "Assignment not found", null);
        }
        sendResponse(res, true, 200, "Assignment updated successfully", result);
    } catch (error: any) {
        console.error("Error updating assignment:", error);
        sendResponse(res, false, 500, "An error occurred while updating the assignment", null, error.message);
    }
}

const deleteAssignment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (id === undefined) {
            return sendResponse(res, false, 200, "Assignment ID is required", null);
        }
        const result = await assignmentsService.deleteAssignmentFromDb(Number(id));
        if (!result) {
            return sendResponse(res, false, 200, "Assignment not found", null);
        }
        sendResponse(res, true, 200, "Assignment deleted successfully", result);
    } catch (error: any) {
        console.error("Error deleting assignment:", error);
        sendResponse(res, false, 500, "An error occurred while deleting the assignment", null, error.message);
    }
}

export const assignmentsController = {
    getAssignments,
    createAssignment,
    getAssignmentById,
    updateAssignment,
    deleteAssignment
};