import type { Request, Response } from "express";
import { classService } from "./class.service";
import { sendResponse } from "../../utility/SendResponse";

const getclass = async (req: Request, res: Response) => {
    try {
        const result = await classService.getclassintoDb();
        if (result.length === 0) {
            return sendResponse(res, false, 500, "No classes found");
        }
        sendResponse(res, true, 200, "Classes fetched successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Failed to fetch classes");
    }
}

const getclassById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await classService.getclassByIdFromDb(Number(id));
        if (!result) {
            return sendResponse(res, false, 404, "Class not found");
        }
        sendResponse(res, true, 200, "Class fetched successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Failed to fetch class");
    }
};

const createclass = async (req: Request, res: Response) => {
    try {
        const result = await classService.createclassInDb(req.body);
        if (!result) {
            return sendResponse(res, false, 400, "Failed to create class");
        }
        sendResponse(res, true, 201, "Class created successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Failed to create class");
    }
}

const updateclass = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await classService.updateclassInDb(Number(id), req.body);
        if (!result) {
            return sendResponse(res, false, 404, "Class not found");
        }
        sendResponse(res, true, 200, "Class updated successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Failed to update class");
    }
}

const deleteclass = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await classService.deleteclassInDb(Number(id));
        if (!result) {
            return sendResponse(res, false, 404, "Class not found");
        }
        sendResponse(res, true, 200, "Class deleted successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Failed to delete class");
    }
}

export const classController = {
    getclass,
    getclassById,
    createclass,
    updateclass,
    deleteclass
}