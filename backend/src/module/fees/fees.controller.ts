import type { Request, Response } from "express";
import { FeesService } from "./fees.service";
import { sendResponse } from "../../utility/SendResponse";

const getFees = async (req: Request, res: Response) => {
    try {
        const result = await FeesService.getFeesFromDB();
        if (!result || result.length === 0) {
            return sendResponse(res, true, 200, "No fees found");
        }
        return sendResponse(res, true, 200, "Fees fetched successfully", result);
    }
    catch (error: any) {
        return sendResponse(res, false, 500, "Error fetching fees", error.message);
    }
}

const getFeesById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = FeesService.getFeesByIdFromDb(Number(id));
        if (!result) {
            return sendResponse(res, true, 200, "Result not found", result)
        }
        return sendResponse(res, true, 200, "Fees fetched successfully", result);
    } catch (error: any) {
        return sendResponse(res, false, 500, "not found data", error.message);
    }
}

const addFees = async (req: Request, res: Response) => {
    try {
        const result = await FeesService.addFeesToDB(req.body);
        if (!result) {
            return sendResponse(res, false, 200, "Failed to add fees");
        }
        return sendResponse(res, true, 201, "Fees added successfully", result);
    }
    catch (error: any) {
        return sendResponse(res, false, 500, "Error adding fees", error.message);
    }
}

const updateFees = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await FeesService.updateFeesInDB(Number(id), req.body);
        if (!result) {
            return sendResponse(res, false, 200, "Fees not found");
        }
        return sendResponse(res, true, 200, "Fees updated successfully", result);
    } catch (error: any) {
        return sendResponse(res, false, 500, "Error updating fees", error.message);
    }
}

const deleteFees = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await FeesService.deleteFeesFromDB(Number(id));
        if (!result) {
            return sendResponse(res, false, 200, "Fees not found");
        }
        return sendResponse(res, true, 200, "Fees deleted successfully", result);
    } catch (error: any) {
        return sendResponse(res, false, 500, "Error deleting fees", error.message);
    }
}


export const FeesController = {
    getFees,
    getFeesById,
    addFees,
    updateFees,
    deleteFees
}