import { pool } from "../../database";
import type { LibraryBook } from "./libray_book.interface";

const getLibrayBookFromDb = async () => {
    try {
        const result = await pool.query("SELECT * FROM library_books");
        return result.rows;
    } catch (error: any) {
        return error.message;
    }
}
const getLibrayBookByIdFromDb = async (id: number) => {
    try {
        const result = await pool.query("SELECT * FROM library_books WHERE id=1$", [id]);
        return result.rows;
    } catch (error: any) {
        return error.message;
    }
}

const addLibrayBookToDb = async (librayBook: LibraryBook) => {
    try {
        const result = await pool.query("INSERT INTO library_books (books_name, author, quantity) VALUES ($1, $2, $3) RETURNING *", [librayBook.books_name, librayBook.author, librayBook.quantity]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}


const updateLibrayBookInDb = async (id: number, librayBook: LibraryBook) => {
    try {
        const result = await pool.query("UPDATE library_books SET books_name = $1, author = $2, quantity = $3 WHERE id = $4 RETURNING *", [librayBook.books_name, librayBook.author, librayBook.quantity, id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

const deleteLibrayBookFromDb = async (id: number) => {
    try {
        const result = await pool.query("DELETE FROM library_books WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error: any) {
        return error.message;
    }
}

export const LibrayBooksService = {
    getLibrayBookFromDb,
    getLibrayBookByIdFromDb,
    addLibrayBookToDb,
    updateLibrayBookInDb,
    deleteLibrayBookFromDb
}