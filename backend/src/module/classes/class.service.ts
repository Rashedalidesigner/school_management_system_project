import { pool } from "../../database";
import type { classes } from "./classes.interface";

const getclassintoDb = async () => {
    try {
        const result = await pool.query("select * from classes");
        return result.rows;
    } catch (error) {
        console.error("Error fetching classes:", error);
        throw error;
    }
};

const getclassByIdFromDb = async (id: number) => {
    try {
        const result = await pool.query("SELECT * FROM classes WHERE id = $1", [id]);
        return result.rows[0];
    }
    catch (error) {
        console.error(`Error fetching class with id ${id}:`, error);
        throw error;
    }

};

const createclassInDb = async (classData: classes) => {
    try {
        const result = await pool.query(
            "INSERT INTO classes (class_name, section_name) VALUES ($1, $2) RETURNING *",
            [classData.class_name, classData.section_name]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Error creating class:", error);
        throw error;
    }
};

const updateclassInDb = async (id: number, classData: classes) => {
    try {
        const result = await pool.query(
            "UPDATE classes SET class_name = $1, section_name = $2 WHERE id = $4 RETURNING *",
            [classData.class_name, classData.section_name, id]
        );
        return result.rows[0];
    } catch (error) {
        console.error(`Error updating class with id ${id}:`, error);
        throw error;
    }
};

const deleteclassInDb = async (id: number) => {
    try {
        const result = await pool.query("DELETE FROM classes WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error) {
        console.error(`Error deleting class with id ${id}:`, error);
        throw error;
    }
};

export const classService = {
    getclassintoDb,
    getclassByIdFromDb,
    createclassInDb,
    updateclassInDb,
    deleteclassInDb
};