import type { Request, Response } from "express";
import { sendResponse } from "../../utility/SendResponse";
import { LibrayBooksService } from "./libray_books.service";

const getLibraryBooks = async (req: Request, res: Response) => {
    try {
        const result = await LibrayBooksService.getLibrayBookFromDb();
        console.log(result)
        if (!result || result.length === 0) {
            return sendResponse(res, true, 200, "No library books found");
        }
        sendResponse(res, true, 200, "Library Books fetched successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching library books", error.message);
    }
}
const getLibraryBooksByid = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await LibrayBooksService.getLibrayBookByIdFromDb(Number(id));
        if (!result || result.length === 0) {
            sendResponse(res, false, 200, "No library books found");
        }
        sendResponse(res, true, 200, "Library Books fetched successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching library books", error.message);
    }
}

const addLibraryBook = async (req: Request, res: Response) => {
    try {
        const result = await LibrayBooksService.addLibrayBookToDb(req.body);
        if (!result) {
            sendResponse(res, false, 200, "Failed to add library book");
        }
        sendResponse(res, true, 201, "Library Book added successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error adding library book", error.message);
    }
}

const updateLibraryBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await LibrayBooksService.updateLibrayBookInDb(Number(id), req.body);
        if (!result) {
            sendResponse(res, false, 200, "Library Book not found");
        }
        sendResponse(res, true, 200, "Library Book updated successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error updating library book", error.message);
    }
}

const deleteLibraryBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await LibrayBooksService.deleteLibrayBookFromDb(Number(id));
        if (!result) {
            sendResponse(res, false, 200, "Library Book not found");
        }
        sendResponse(res, true, 200, "Library Book deleted successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error deleting library book", error.message);
    }
}

export const LibrayBooksController = {
    getLibraryBooks,
    getLibraryBooksByid,
    addLibraryBook,
    updateLibraryBook,
    deleteLibraryBook
}