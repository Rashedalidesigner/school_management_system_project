import { pool } from "../../database";
import type { StudentParent } from "./student_parent.interface";

const getStudentParentFromDB = async () => {
    try {
        const result = await pool.query("SELECT * FROM student_parents");
        return result.rows;
    } catch (error: any) {
        return error.message;
    }
}

const getStudentParentByIdFromDB = async (id: number) => {
    try {
        const result = await pool.query("SELECT * FROM student_parents WHERE id = $1", [id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const addStudentParentToDB = async (studentParent: StudentParent) => {
    try {
        const result = await pool.query("INSERT INTO student_parents (student_id, parent_id, relation) VALUES ($1, $2, $3) RETURNING *", [studentParent.student_id, studentParent.parent_id, studentParent.relation]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const updateStudentParentInDB = async (id: number, studentParent: StudentParent) => {
    try {
        const result = await pool.query("UPDATE student_parents SET student_id = $1, parent_id = $2, relation = $3 WHERE id = $4 RETURNING *", [studentParent.student_id, studentParent.parent_id, studentParent.relation, id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const deleteStudentParentFromDB = async (id: number) => {
    try {
        const result = await pool.query("DELETE FROM student_parents WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

export const StudentParentService = {
    getStudentParentFromDB,
    getStudentParentByIdFromDB,
    addStudentParentToDB,
    updateStudentParentInDB,
    deleteStudentParentFromDB
}

