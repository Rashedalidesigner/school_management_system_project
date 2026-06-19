import { pool } from "../../database"
import type { Fees } from "./fees.interface";

const getFeesFromDB = async () => {
    try {
        const result = await pool.query("SELECT * FROM fees");
        return result.rows;
    } catch (error: any) {
        return error.message;
    }

}

const getFeesByIdFromDb = async (id: number) => {
    try {
        const result = await pool.query("SELECT * FROM fees WHERE id=1$", [id]);
        return result.rows;
    } catch (error: any) {
        return error.message;
    }
}

const addFeesToDB = async (fees: Fees) => {
    const { student_id: studentId } = fees;
    try {
        const result = await pool.query("INSERT INTO fees (student_id, amount, fees_types, payment_status, payment_date) VALUES ($1, $2, $3, $4, $5) RETURNING *", [studentId, fees.amount, fees.fees_types, fees.payment_status, fees.payment_date]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }

}

const updateFeesInDB = async (id: number, fees: Fees) => {

    try {
        const result = await pool.query("UPDATE fees SET student_id = $1, amount = $2, fees_types = $3, payment_status = $4, payment_date = $5 WHERE id = $6 RETURNING *", [fees.student_id, fees.amount, fees.fees_types, fees.payment_status, fees.payment_date, id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const deleteFeesFromDB = async (id: number) => {
    try {
        const result = await pool.query("DELETE FROM fees WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}


export const FeesService = {
    getFeesFromDB,
    getFeesByIdFromDb,
    addFeesToDB,
    updateFeesInDB,
    deleteFeesFromDB
}