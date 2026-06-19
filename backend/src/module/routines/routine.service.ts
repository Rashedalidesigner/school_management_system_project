import { pool } from "../../database";
import type { Routine } from "./routine.interface";

const getRoutineFromDB = async () => {
    try {
        const result = await pool.query("SELECT * FROM routines");
        return result.rows;
    } catch (error: any) {
        return error.message;
    }
}

const getRoutinebyidFromDB = async (id: number) => {
    try {
        const result = await pool.query("SELECT * FROM routines WHERE id=1$", [id]);
        return result.rows;
    } catch (error: any) {
        return error.message;
    }
}

const addRoutineToDB = async (routine: Routine) => {
    try {
        const result = await pool.query("INSERT INTO routines (class_id, subject_id, teacher_id, day, start_time, end_time) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [routine.class_id, routine.subject_id, routine.teacher_id, routine.day, routine.start_time, routine.end_time]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const updateRoutineInDB = async (id: number, routine: Routine) => {
    try {
        const result = await pool.query("UPDATE routines SET class_id = $1, subject_id = $2, teacher_id = $3, day = $4, start_time = $5, end_time = $6 WHERE id = $7 RETURNING *", [routine.class_id, routine.subject_id, routine.teacher_id, routine.day, routine.start_time, routine.end_time, id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const deleteRoutineFromDB = async (id: number) => {
    try {
        const result = await pool.query("DELETE FROM routines WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

export const RoutineService = {
    getRoutineFromDB,
    getRoutinebyidFromDB,
    addRoutineToDB,
    updateRoutineInDB,
    deleteRoutineFromDB
}