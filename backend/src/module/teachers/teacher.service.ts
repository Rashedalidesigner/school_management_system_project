import { pool } from "../../database";

const getTeacherFromDb = async () => {
    try {
        const result = await pool.query("SELECT * FROM teacher");
        return result.rows;
    } catch (error: any) {
        return error.message;
    }
}

const getTeacherByIdFromDb = async (id: number) => {
    try {
        const result = await pool.query("SELECT * FROM teacher WHERE id = $1", [id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const addTeacherToDb = async (teacher: any) => {
    try {
        const result = await pool.query("INSERT INTO teacher (name, email, phone, subject, salary, join_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [teacher.name, teacher.email, teacher.phone, teacher.subject, teacher.salary, teacher.join_date]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const updateTeacherInDb = async (id: number, teacher: any) => {
    try {
        const result = await pool.query("UPDATE teacher SET name = $1, email = $2, phone = $3, subject = $4, salary = $5, join_date = $6 WHERE id = $7 RETURNING *", [teacher.name, teacher.email, teacher.phone, teacher.subject, teacher.salary, teacher.join_date, id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const deleteTeacherFromDb = async (id: number) => {
    try {
        const result = await pool.query("DELETE FROM teacher WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

export const TeacherService = {
    getTeacherFromDb,
    getTeacherByIdFromDb,
    addTeacherToDb,
    updateTeacherInDb,
    deleteTeacherFromDb
}