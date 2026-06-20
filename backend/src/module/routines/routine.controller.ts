import type { Request, Response } from "express";
import { RoutineService } from "./routine.service";
import { sendResponse } from "../../utility/SendResponse";

const getRoutines = async (req: Request, res: Response) => {
    try {
        const result = await RoutineService.getRoutineFromDB();
        if (!result || result.length === 0) {
            return sendResponse(res, true, 200, "No routines found");
        }
        sendResponse(res, true, 200, "Routines fetched successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching routines", error.message);
    }
}

const getRoutinesbyId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await RoutineService.getRoutinebyidFromDB(Number(id));
        if (!result || result.length === 0) {
            return sendResponse(res, true, 200, "No routines found");
        }
        sendResponse(res, true, 200, "Routines fetched successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching routines", error.message);
    }
}

const addRoutine = async (req: Request, res: Response) => {
    try {
        const result = await RoutineService.addRoutineToDB(req.body);
        if (!result) {
            return sendResponse(res, true, 200, "Faild add routine");
        }
        sendResponse(res, true, 201, "Routine added successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error adding routine", error.message);
    }
}

const updateRoutine = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await RoutineService.updateRoutineInDB(Number(id), req.body);
        if (!result) {
            return sendResponse(res, true, 200, "No routines found");
        }
        sendResponse(res, true, 200, "Routine updated successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error updating routine", error.message);
    }
}

const deleteRoutine = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await RoutineService.deleteRoutineFromDB(Number(id));
        if (!result) {
            return sendResponse(res, true, 200, "No routines found");
        }
        sendResponse(res, true, 200, "Routine deleted successfully", result);
    } catch (error: any) {
        sendResponse(res, false, 500, "Error deleting routine", error.message);
    }
}

export const RoutineController = {
    getRoutines,
    getRoutinesbyId,
    addRoutine,
    updateRoutine,
    deleteRoutine
}