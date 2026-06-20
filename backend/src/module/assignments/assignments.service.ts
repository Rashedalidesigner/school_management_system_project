import { pool } from "../../database"
import type { Assignment } from "./assignments.interface";

const getassignmentsIntoDb = async () => {
    const result = await pool.query("SELECT * FROM assignments");
    console.log("Assignments fetched from database:", result.rows);
    return result.rows;
}

const createAssignmentIntoDb = async (newData: Assignment) => {
    const result = await pool.query(
        "INSERT INTO assignments (title, description, class_id, subject_id, teacher_id, due_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [newData.title, newData.description, newData.class_id, newData.subject_id, newData.teacher_id, newData.due_date]
    );
    return result.rows[0];
}

const getAssignmentByIdFromDb = async (id: number) => {
    const result = await pool.query("SELECT * FROM assignments WHERE id = $1", [id]);
    return result.rows[0];
}


const updateAssignmentInDb = async (id: number, updatedata: Assignment) => {
    const result = await pool.query(
        "UPDATE assignments SET class_id=$1,subject_id=$2,teacher_id=$3, title = $4, description = $5, due_date = $6 WHERE id = $7 RETURNING *",
        [updatedata.class_id, updatedata.subject_id, updatedata.teacher_id, updatedata.title, updatedata.description, updatedata.due_date, id]
    );
    return result.rows[0];
}

const deleteAssignmentFromDb = async (id: number) => {
    const result = await pool.query("DELETE FROM assignments WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
}

export const assignmentsService = {
    getassignmentsIntoDb,
    createAssignmentIntoDb,
    getAssignmentByIdFromDb,
    updateAssignmentInDb,
    deleteAssignmentFromDb
};