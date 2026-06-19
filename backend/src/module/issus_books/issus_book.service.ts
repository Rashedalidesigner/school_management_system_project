import { pool } from "../../database";
import type { IssuedBook } from "./issus_book.interface";

const getIssusBooksFromDB = async () => {
    try {
        const result = await pool.query("SELECT * FROM issued_books");
        return result.rows;
    } catch (error: any) {
        return error.message;
    }
}

const getIssusBooksByIdFromDB = async (id: number) => {
    try {
        const result = await pool.query("SELECT * FROM issued_books WHERE id=1$", [id]);
        return result.rows;
    } catch (error: any) {
        return error.message;
    }
}

const addIssusBooksToDB = async (issusBooks: IssuedBook) => {
    try {
        const result = await pool.query("INSERT INTO issued_books (student_id, book_id, issue_date, return_date) VALUES ($1, $2, $3, $4) RETURNING *", [issusBooks.student_id, issusBooks.book_id, issusBooks.issue_date, issusBooks.return_date]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const updateIssusBooksInDB = async (id: number, issusBooks: IssuedBook) => {
    try {
        const result = await pool.query("UPDATE issued_books SET student_id = $1, book_id = $2, issue_date = $3, return_date = $4 WHERE id = $5 RETURNING *", [issusBooks.student_id, issusBooks.book_id, issusBooks.issue_date, issusBooks.return_date, id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const deleteIssusBooksFromDB = async (id: number) => {
    try {
        const result = await pool.query("DELETE FROM issued_books WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

export const IssusBooksService = {
    getIssusBooksFromDB,
    getIssusBooksByIdFromDB,
    addIssusBooksToDB,
    updateIssusBooksInDB,
    deleteIssusBooksFromDB
}