
import { pool } from "../../database";
import type { Result } from "./result.interface";

const getResultFromDb = async () => {
    try {
        const result = await pool.query("SELECT * FROM results");
        return result.rows;
    } catch (error: any) {
        return error.message;
    }
}

const getResultByIdFromDb = async (id: number) => {
    try {
        const result = await pool.query("SELECT * FROM results WHERE id=1$", [id]);
        return result.rows;
    } catch (error: any) {
        return error.message;
    }
}

const addResultToDb = async (resultData: Result) => {
    try {
        const result = await pool.query("INSERT INTO results (student_id,exam_id,marks,grade) VALUES ($1, $2, $3, $4) RETURNING * ", [resultData.student_id, resultData.exam_id, resultData.marks, resultData.grade]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const updateResultInDb = async (id: number, resultData: Result) => {
    try {
        const result = await pool.query("UPDATE results SET student_id = $1, exam_id = $2, marks = $3, grade = $4 WHERE id = $5 RETURNING *", [resultData.student_id, resultData.exam_id, resultData.marks, resultData.grade, id]);
        return result.rows[0];
    }
    catch (error: any) {
        return error.message;
    }
}

const deleteResultFromDb = async (id: number) => {
    try {
        const result = await pool.query("DELETE FROM results WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

export const ResultService = {
    getResultFromDb,
    getResultByIdFromDb,
    addResultToDb,
    updateResultInDb,
    deleteResultFromDb
}