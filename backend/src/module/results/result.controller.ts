import type { Request, Response } from "express";
import { ResultService } from "./result.service";
import { sendResponse } from "../../utility/SendResponse";

const getResults = async (req: Request, res: Response) => {
    try {
        const result = await ResultService.getResultFromDb();
        if (result.length === 0) {
            sendResponse(res, false, 404, "No results found");
        }
        sendResponse(res, true, 200, "Results fetched successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching results", error.message);
    }
}

const getResultsbyId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await ResultService.getResultByIdFromDb(Number(id));
        if (!result || result.length === 0) {
            sendResponse(res, false, 404, "No results found");
        }
        sendResponse(res, true, 200, "Results fetched successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching results", error.message);
    }
}

const addResult = async (req: Request, res: Response) => {
    try {
        const result = await ResultService.addResultToDb(req.body);
        if (!result) {
            sendResponse(res, false, 400, "Failed to add result");
        }
        sendResponse(res, true, 201, "Result added successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error adding result", error.message);
    }
}

const updateResult = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await ResultService.updateResultInDb(Number(id), req.body);
        if (!result) {
            sendResponse(res, false, 404, "Result not found");
        }
        sendResponse(res, true, 200, "Result updated successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error updating result", error.message);
    }
}

const deleteResult = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await ResultService.deleteResultFromDb(Number(id));
        if (!result) {
            sendResponse(res, false, 404, "Result not found");
        }
        sendResponse(res, true, 200, "Result deleted successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error deleting result", error.message);
    }
}

export const ResultController = {
    getResults,
    getResultsbyId,
    addResult,
    updateResult,
    deleteResult
}