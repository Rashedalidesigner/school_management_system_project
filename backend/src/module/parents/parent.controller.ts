import type { Request, Response } from "express";
import { ParentService } from "./parent.service";
import { sendResponse } from "../../utility/SendResponse";

const getParent = async (req: Request, res: Response) => {
    try {
        const result = await ParentService.getParentFromDB();
        if (!result || result.length === 0) {
            sendResponse(res, false, 404, "No parents found");
        }
        sendResponse(res, true, 200, "Parents fetched successfully", result);
    } catch (error) {
        sendResponse(res, false, 500, "Error fetching parents", null);
    }
}

const getParentbyId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await ParentService.getParentbyIdFromDB(Number(id));
        if (!result || result.length === 0) {
            sendResponse(res, false, 404, "No parents found");
        }
        sendResponse(res, true, 200, "Parents fetched successfully", result);
    } catch (error) {
        sendResponse(res, false, 500, "Error fetching parents", null);
    }
}

const addParent = async (req: Request, res: Response) => {
    try {
        const result = await ParentService.addParentToDB(req.body);
        if (!result) {
            sendResponse(res, false, 400, "Failed to add parent");
        }
        sendResponse(res, true, 201, "Parent added successfully", result);
    } catch (error) {
        sendResponse(res, false, 500, "Error adding parent", null);
    }
}

const updateParent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await ParentService.updateParentInDB(Number(id), req.body);
        if (!result) {
            sendResponse(res, false, 404, "Parent not found");
        }
        sendResponse(res, true, 200, "Parent updated successfully", result);
    } catch (error) {
        sendResponse(res, false, 500, "Error updating parent", null);
    }
}

const deleteParent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await ParentService.deleteParentFromDB(Number(id));
        if (!result) {
            sendResponse(res, false, 404, "Parent not found");
        }
        sendResponse(res, true, 200, "Parent deleted successfully", result);
    } catch (error) {
        sendResponse(res, false, 500, "Error deleting parent", null);
    }
}

export const ParentController = {
    getParent,
    getParentbyId,
    addParent,
    updateParent,
    deleteParent
}