import type { Request, Response } from "express";
import { sendResponse } from "../../utility/SendResponse";
import { studentervice } from "./student.service";

const getstudents = async (req: Request, res: Response) => {
    try {
        const students = await studentervice.getstudentFromDb();
        if (students.length === 0) {
            return sendResponse(res, false, 500, "No students found");
        }
        sendResponse(res, true, 200, "Students fetched successfully", students);
    } catch (error) {
        sendResponse(res, false, 500, "Failed to fetch students");
    }
};

const getstudentById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const student = await studentervice.getstudentByIdFromDb(Number(id));
        if (!student) {
            return sendResponse(res, false, 404, "Student not found");
        }
        sendResponse(res, true, 200, "Student fetched successfully", student);
    } catch (error) {
        sendResponse(res, false, 500, "Failed to fetch student");
    }
};
const getstudentByclassId = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const student = await studentervice.getstudentByclassIdFromDb(Number(id));
        if (!student) {
            return sendResponse(res, false, 404, "Student not found");
        }
        sendResponse(res, true, 200, "Student fetched successfully", student);
    } catch (error) {
        sendResponse(res, false, 500, "Failed to fetch student");
    }
};

const createstudent = async (req: Request, res: Response) => {
    try {
        const student = req.body;
        const newstudent = await studentervice.createstudentInDb(student);
        if (!newstudent) {
            return sendResponse(res, false, 400, "Failed to create student");
        }
        sendResponse(res, true, 201, "Student created successfully", newstudent);
    } catch (error) {
        sendResponse(res, false, 500, "Failed to create student");
    }
};

const updatestudent = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const student = req.body;
        const updatedstudent = await studentervice.updatestudentInDb(id, student);
        if (!updatedstudent) {
            return sendResponse(res, false, 404, "Student not found");
        }
        sendResponse(res, true, 200, "Student updated successfully", updatedstudent);
    } catch (error) {
        sendResponse(res, false, 500, "Failed to update student");
    }
};

const deletestudent = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const deletedstudent = await studentervice.deletestudentInDb(id);
        if (!deletedstudent) {
            return sendResponse(res, false, 404, "Student not found");
        }
        sendResponse(res, true, 200, "Student deleted successfully", deletedstudent);
    } catch (error) {
        sendResponse(res, false, 500, "Failed to delete student");
    }
};

export const studentController = {
    getstudents,
    getstudentByclassId,
    getstudentById,
    createstudent,
    updatestudent,
    deletestudent
};