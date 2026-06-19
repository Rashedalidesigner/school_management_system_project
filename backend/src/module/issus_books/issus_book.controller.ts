import type { Request, Response } from "express";
import { IssusBooksService } from "./issus_book.service";
import { sendResponse } from "../../utility/SendResponse";


const getIssusBooks = async (req: Request, res: Response) => {
    try {
        const result = await IssusBooksService.getIssusBooksFromDB();
        if (!result || result.length === 0) {
            sendResponse(res, false, 404, "No issued books found");
        }
        sendResponse(res, true, 200, "Issued books fetched successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching issued books", error.message);
    }
}

const getIssusBooksbyId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await IssusBooksService.getIssusBooksByIdFromDB(Number(id));
        if (!result || result.length === 0) {
            sendResponse(res, false, 404, "No issued books found");
        }
        sendResponse(res, true, 200, "Issued books fetched successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching issued books", error.message);
    }
}


const addIssusBooks = async (req: Request, res: Response) => {
    try {
        const result = await IssusBooksService.addIssusBooksToDB(req.body);
        if (!result) {
            sendResponse(res, false, 400, "Failed to add issued book");
        }
        sendResponse(res, true, 201, "Issued book added successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error adding issued book", error.message);
    }
}

const updateIssusBooks = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await IssusBooksService.updateIssusBooksInDB(Number(id), req.body);
        if (!result) {
            sendResponse(res, false, 404, "Issued book not found");
        }
        sendResponse(res, true, 200, "Issued book updated successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error updating issued book", error.message);
    }
}

const deleteIssusBooks = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await IssusBooksService.deleteIssusBooksFromDB(Number(id));
        if (!result) {
            sendResponse(res, false, 404, "Issued book not found");
        }
        sendResponse(res, true, 200, "Issued book deleted successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error deleting issued book", error.message);
    }
}

export const IssusBooksController = {
    getIssusBooks,
    getIssusBooksbyId,
    addIssusBooks,
    updateIssusBooks,
    deleteIssusBooks
}