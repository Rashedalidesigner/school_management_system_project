import type { Request, Response } from "express";
import { NoticesService } from "./notices.service";
import { sendResponse } from "../../utility/SendResponse";

const getNotices = async (req: Request, res: Response) => {
    try {
        const result = await NoticesService.getNoticeFromDB();
        if (!result || result.length === 0) {
            sendResponse(res, false, 404, "No notices found");
        }
        sendResponse(res, true, 200, "Notices fetched successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching notices", error.message);
    }
}

const getNoticesbyId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await NoticesService.getNoticeByidFromDb(Number(id));
        if (!result || result.length === 0) {
            sendResponse(res, false, 404, "No notices found");
        }
        sendResponse(res, true, 200, "Notices fetched successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching notices", error.message);
    }
}

const addNotice = async (req: Request, res: Response) => {
    try {
        const result = await NoticesService.addNoticeToDB(req.body);
        if (!result) {
            sendResponse(res, false, 400, "Failed to add notice");
        }
        sendResponse(res, true, 201, "Notice added successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error adding notice", error.message);
    }
}

const updateNotice = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await NoticesService.updateNoticeInDB(Number(id), req.body);
        if (!result) {
            sendResponse(res, false, 404, "Notice not found");
        }
        sendResponse(res, true, 200, "Notice updated successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error updating notice", error.message);
    }
}

const deleteNotice = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await NoticesService.deleteNoticeFromDB(Number(id));
        if (!result) {
            sendResponse(res, false, 404, "Notice not found");
        }
        sendResponse(res, true, 200, "Notice deleted successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error deleting notice", error.message);
    }
}

export const NoticesController = {
    getNotices,
    getNoticesbyId,
    addNotice,
    updateNotice,
    deleteNotice
}