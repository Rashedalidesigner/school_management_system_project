import { pool } from "../../database";
import type { User } from "./users.interface";

const getuserFromDb = async () => {
    try {
        const result = await pool.query("SELECT * FROM users");
        return result.rows;
    } catch (error: any) {
        return error.message;
    }
}

const getuserByIdFromDb = async (id: number) => {
    try {
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const adduserToDb = async (user: User) => {
    try {
        const result = await pool.query("INSERT INTO users (name, email, phone, password, role, profile_image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [user.name, user.email, user.phone, user.password, user.role, user.profile_image]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const updateuserInDb = async (id: number, user: User) => {
    try {
        const result = await pool.query("UPDATE users SET name = $1, email = $2, phone = $3, password = $4, role = $5, profile_image = $6 WHERE id = $7 RETURNING *", [user.name, user.email, user.phone, user.password, user.role, user.profile_image, id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const deleteuserFromDb = async (id: number) => {
    try {
        const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}


export const UserService = {
    getuserFromDb,
    getuserByIdFromDb,
    adduserToDb,
    updateuserInDb,
    deleteuserFromDb
};