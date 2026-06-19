import { pool } from "../../database";
import type { Parent } from "./parent.interface";

const getParentFromDB = async () => {
    try {
        const result = await pool.query("SELECT * FROM parents");
        return result.rows;
    } catch (error: any) {
        return error.message;
    }
}

const getParentbyIdFromDB = async (id: number) => {
    try {
        const result = await pool.query("SELECT * FROM parents WHERE id=1$", [id]);
        return result.rows;
    } catch (error: any) {
        return error.message;
    }
}

const addParentToDB = async (parent: Parent) => {
    try {
        const result = await pool.query("INSERT INTO parents (name,email,phone,address) VALUES ($1, $2, $3, $4) RETURNING *", [parent.name, parent.email, parent.phone, parent.address]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const updateParentInDB = async (id: number, parent: Parent) => {
    try {
        const result = await pool.query("UPDATE parents SET name = $1, email = $2, phone = $3, address = $4 WHERE id = $5 RETURNING *", [parent.name, parent.email, parent.phone, parent.address, id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const deleteParentFromDB = async (id: number) => {
    try {
        const result = await pool.query("DELETE FROM parents WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

export const ParentService = {
    getParentFromDB,
    getParentbyIdFromDB,
    addParentToDB,
    updateParentInDB,
    deleteParentFromDB
}