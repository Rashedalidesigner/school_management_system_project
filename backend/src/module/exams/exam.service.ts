import type { Request, Response } from "express";
import { pool } from "../../database";
import { sendResponse } from "../../utility/SendResponse";
import type { Exam } from "./exam.interface";

const getexamFromDB = async () => {
    try {
        const result = await pool.query("SELECT * FROM exams");
        return result.rows;
    } catch (error: any) {
        return error.message;
    }
};

const getexamByIdFromDB = async (id: number) => {
    try {
        const result = await pool.query("SELECT * FROM exams WHERE id = $1", [id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
};

const createexamFromDB = async (exam: Exam) => {
    const { exam_name, exam_date, class_id } = exam;
    try {
        const result = await pool.query(
            "INSERT INTO exams (exam_name, exam_date, class_id) VALUES ($1, $2, $3) RETURNING *",
            [exam_name, exam_date, class_id]
        );
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
};

const updateexamFromDB = async (id: number, exam: Exam) => {
    const { exam_name, exam_date, class_id } = exam;
    try {
        const result = await pool.query(
            "UPDATE exams SET exam_name = $1, exam_date = $2, class_id = $3 WHERE id = $4 RETURNING *",
            [exam_name, exam_date, class_id, id]
        );
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
};

const deleteexamFromDB = async (id: number) => {
    try {
        const result = await pool.query("DELETE FROM exams WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
};

export const examService = {
    getexamFromDB,
    getexamByIdFromDB,
    createexamFromDB,
    updateexamFromDB,
    deleteexamFromDB
};