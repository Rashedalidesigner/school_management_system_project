import type { Request, Response } from "express";
import { sendResponse } from "../../utility/SendResponse";
import { TeacherService } from "./teacher.service";

const getTeachers = async (req: Request, res: Response) => {
    try {
        const teacher = await TeacherService.getTeacherFromDb();
        if (!teacher || teacher.length === 0) {
            sendResponse(res, false, 200, "No teachers found");
        } else {
            sendResponse(res, true, 200, "Teachers fetched successfully", teacher);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching teachers", error.message);
    }
}

const getTeacherById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const teacher = await TeacherService.getTeacherByIdFromDb(Number(id));
        if (!teacher) {
            sendResponse(res, false, 200, "Teacher not found");
        } else {
            sendResponse(res, true, 200, "Teacher fetched successfully", teacher);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error fetching teacher", error.message);
    }
}

const addTeacher = async (req: Request, res: Response) => {
    try {
        const teacher = await TeacherService.addTeacherToDb(req.body);
        if (!teacher) {
            sendResponse(res, false, 200, "Failed to add teacher");
        } else {
            sendResponse(res, true, 201, "Teacher added successfully", teacher);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error adding teacher", error.message);
    }
}

const updateTeacher = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const teacher = await TeacherService.updateTeacherInDb(Number(id), req.body);
        if (!teacher) {
            sendResponse(res, false, 200, "Teacher not found");
        } else {
            sendResponse(res, true, 200, "Teacher updated successfully", teacher);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error updating teacher", error.message);
    }
}

const deleteTeacher = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const teacher = await TeacherService.deleteTeacherFromDb(Number(id));
        if (!teacher) {
            sendResponse(res, false, 200, "Teacher not found");
        } else {
            sendResponse(res, true, 200, "Teacher deleted successfully", teacher);
        }
    } catch (error: any) {
        sendResponse(res, false, 500, "Error deleting teacher", error.message);
    }
}

export const TeacherController = {
    getTeachers,
    getTeacherById,
    addTeacher,
    updateTeacher,
    deleteTeacher
}