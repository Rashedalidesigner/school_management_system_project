import { pool } from "../../database"
import type { Attendance } from "./attendance.interface"

const getAttendanceFromDB = async () => {
    try {
        const result = await pool.query("SELECT * FROM attendance");
        return result.rows
    } catch (error: any) {
        return error.message
    }
}

const getAttendanceByIdFromDB = async (id: number) => {
    try {
        const result = await pool.query("SELECT * FROM attendance WHERE id = $1", [id])
        return result.rows[0]
    } catch (error: any) {
        return error.message
    }
}

const getAttendanceByclassIdFromDB = async (id: number) => {
    try {
        const result = await pool.query("SELECT * FROM attendance WHERE class_id = $1", [id]);
        console.log(result, "from service")
        return result.rows;
    } catch (error: any) {
        return error.message
    }
}

const getAttendanceBystudentIdFromDB = async (id: number) => {
    try {
        const result = await pool.query("SELECT * FROM attendance WHERE student_id = $1", [id])
        return result.rows;
    } catch (error: any) {
        return error.message
    }
}

const getAttendanceBydateIdFromDB = async (id: string) => {
    try {
        const result = await pool.query("SELECT * FROM attendance WHERE attendance_date = $1", [id])
        return result.rows;
    } catch (error: any) {
        return error.message
    }
}

const createAttendanceFromDB = async (attendance: Attendance) => {
    const { class_id, student_id, attendance_date, status } = attendance;
    try {
        const result = await pool.query(
            "INSERT INTO attendance (class_id, student_id, attendance_date, status) VALUES ($1, $2, $3, $4) RETURNING *",
            [class_id, student_id, attendance_date, status]
        );
        return result.rows[0];
    } catch (error: any) {
        return error.message
    }
};

const updateAttendanceFromDB = async (id: number, attendance: Attendance) => {
    const { class_id, student_id, attendance_date, status } = attendance;
    try {
        const result = await pool.query(
            "UPDATE attendance SET class_id = $1, student_id = $2, attendance_date = $3, status = $4 WHERE id = $5 RETURNING *",
            [class_id, student_id, attendance_date, status, id]
        );
        return result.rows[0];
    } catch (error: any) {
        return error.message
    }
};

const deleteAttendanceFromDB = async (id: number) => {
    try {
        const result = await pool.query("DELETE FROM attendance WHERE id = $1 RETURNING *", [id])
        return result.rows[0]
    } catch (error: any) {
        return error.message
    }
}

export const attendanceService = {
    getAttendanceFromDB,
    getAttendanceBydateIdFromDB,
    getAttendanceByclassIdFromDB,
    getAttendanceBystudentIdFromDB,
    getAttendanceByIdFromDB,
    createAttendanceFromDB,
    updateAttendanceFromDB,
    deleteAttendanceFromDB
}
