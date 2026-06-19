import { pool } from "../../database";
import type { Notice } from "./notice.interface";

const getNoticeFromDB = async () => {
    try {
        const result = await pool.query("SELECT * FROM notices");
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const getNoticeByidFromDb = async (id: number) => {

    try {
        const result = await pool.query("SELECT * FROM notices WHERE id=1$", [id]);
        return result;
    } catch (error: any) {
        return error.message;
    }
}


const addNoticeToDB = async (notice: Notice) => {
    try {
        const result = await pool.query("INSERT INTO notices (title, description, publish_date) VALUES ($1, $2, $3) RETURNING *", [notice.title, notice.description, notice.publish_date]);
        return result;
    } catch (error: any) {
        return error.message;
    }
}


const updateNoticeInDB = async (id: number, notice: Notice) => {
    try {
        const result = await pool.query("UPDATE notices SET title = $1, description = $2, publish_date = $3 WHERE id = $4 RETURNING *", [notice.title, notice.description, notice.publish_date, id]);
        return result;
    } catch (error: any) {
        return error.message;
    }
}

const deleteNoticeFromDB = async (id: number) => {
    try {
        const result = await pool.query("DELETE FROM notices WHERE id = $1 RETURNING *", [id]);
        return result;
    } catch (error: any) {
        return error.message;
    }
}

export const NoticesService = {
    getNoticeFromDB,
    getNoticeByidFromDb,
    addNoticeToDB,
    updateNoticeInDB,
    deleteNoticeFromDB
}