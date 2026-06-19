import type { Request, Response } from "express";
import { examService } from "./exam.service";
import { sendResponse } from "../../utility/SendResponse";

const getexam = async (req: Request, res: Response) => {
    const result = await examService.getexamFromDB();
    try {
        if (result.length === 0) {
            return sendResponse(res, true, 404, "No exam records found");
        }
        sendResponse(res, true, 200, "Exam records fetched successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Failed to fetch exam data");
    }
}

const getexambyId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await examService.getexamByIdFromDB(Number(id));
        if (!result) {
            return sendResponse(res, true, 404, "Exam record not found");
        }
        sendResponse(res, true, 200, "Exam record fetched successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Failed to fetch exam data");
    }
}

const createexam = async (req: Request, res: Response) => {
    const examData = req.body;
    try {
        const result = await examService.createexamFromDB(examData);
        if (!result) {
            return sendResponse(res, true, 400, "Failed to create exam record");
        }
        sendResponse(res, true, 201, "Exam record created successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Failed to create exam record");
    }
}

const updateexam = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const examData = req.body;
        const result = await examService.updateexamFromDB(Number(id), examData);
        if (!result) {
            return sendResponse(res, true, 404, "Exam record not found");
        }
        sendResponse(res, true, 200, "Exam record updated successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Failed to update exam record");
    }
}

const deleteexam = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await examService.deleteexamFromDB(Number(id));
        if (!result) {
            return sendResponse(res, true, 404, "Exam record not found");
        }
        sendResponse(res, true, 200, "Exam record deleted successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Failed to delete exam record");
    }
}

export const examController = {
    getexam,
    getexambyId,
    createexam,
    updateexam,
    deleteexam
}