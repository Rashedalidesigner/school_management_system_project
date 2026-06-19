import { Pool } from "pg";
import { config } from "../config/config";

export const pool = new Pool({
    user: config.DB_USER,
    host: config.DB_HOST,
    database: config.DB_NAME,
    password: config.DB_PASSWORD,
    port: Number(config.DB_PORT)
});

export const connectToDatabase = async () => {
    try {
        await pool.connect();

        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(200) NOT NULL,
            email VARCHAR(150) UNIQUE NOT NULL,
            phone VARCHAR(20) UNIQUE,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(50) NOT NULL CHECK (
                role IN (
                    'admin',
                    'teacher',
                    'student',
                    'parent',
                    'accountant',
                    'librarian'
                )
            ),
            profile_image TEXT,
            is_active BOOLEAN DEFAULT TRUE,
            last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS teacher (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        email VARCHAR(200) UNIQUE,
        phone VARCHAR(15) UNIQUE,
        subject VARCHAR(200),
        salary INT,
        join_date DATE
    )
`);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS classes (
        id SERIAL PRIMARY KEY,
        class_name VARCHAR(200) NOT NULL,
        section_name VARCHAR(4)
    )
`);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS student (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        email VARCHAR(200) UNIQUE,
        phone VARCHAR(15) UNIQUE,
        date_of_birth DATE, -- Fixed typo: 'date_of_brith' -> 'date_of_birth'
        address TEXT,
        class_id INT REFERENCES classes(id) ON DELETE SET NULL,
        section VARCHAR(30),
        roll_number INT,
        admission_date DATE
    )
`);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS subject (
        id SERIAL PRIMARY KEY,
        class_id INT REFERENCES classes(id) ON DELETE CASCADE,
        subject_name TEXT[] NOT NULL
    )
`);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS attendance (
        id SERIAL PRIMARY KEY,
        class_id INT REFERENCES classes(id) ON DELETE CASCADE,
        student_id INT REFERENCES student(id) ON DELETE CASCADE,
        attendance_date DATE NOT NULL,
        status VARCHAR(20) NOT NULL
    )
`);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS exams (
        id SERIAL PRIMARY KEY,
        exam_name VARCHAR(200) NOT NULL,
        exam_date DATE,
        class_id INT REFERENCES classes(id) ON DELETE CASCADE
    )
`);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS result (
        id SERIAL PRIMARY KEY,
        student_id INT REFERENCES student(id) ON DELETE CASCADE,
        exam_id INT REFERENCES exams(id) ON DELETE CASCADE,
        subject_mark JSONB,
        marks DOUBLE PRECISION,  
        grade VARCHAR(2)
    )
`);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS assignments ( 
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        class_id INT REFERENCES classes(id) ON DELETE CASCADE,
        subject_id INT REFERENCES subject(id) ON DELETE CASCADE,
        teacher_id INT REFERENCES teacher(id) ON DELETE SET NULL,
        due_date DATE
    )
`);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS assignment_submissions (
        id SERIAL PRIMARY KEY,
        assignment_id INT REFERENCES assignments(id) ON DELETE CASCADE,
        student_id INT REFERENCES student(id) ON DELETE CASCADE,
        submission_file_link TEXT, -- Fixed typo: 'submition_file_link' -> 'submission_file_link'
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Fixed typo: 'submet_at date' -> 'submitted_at timestamp'
    )
`);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS fees (
        id SERIAL PRIMARY KEY,
        student_id INT REFERENCES student(id) ON DELETE CASCADE,
        amount INT NOT NULL,
        fees_types VARCHAR(20),
        payment_status VARCHAR(20),
        payment_date DATE
    )
`);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS parents (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        email VARCHAR(255) UNIQUE,
        phone VARCHAR(15) UNIQUE,
        address TEXT
    )
`);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS student_parents (
        id SERIAL PRIMARY KEY,
        student_id INT REFERENCES student(id) ON DELETE CASCADE,
        parent_id INT REFERENCES parents(id) ON DELETE CASCADE,
        relation VARCHAR(30),
        UNIQUE(student_id, parent_id) -- Prevents duplicate relational mappings
    )
`);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS notices (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        publish_date DATE DEFAULT CURRENT_DATE
    )
`);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS library_books (
        id SERIAL PRIMARY KEY,
        books_name TEXT NOT NULL,
        author TEXT,
        quantity INT DEFAULT 0
    )
`);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS issued_books (
        id SERIAL PRIMARY KEY,
        student_id INT REFERENCES student(id) ON DELETE CASCADE,
        book_id INT REFERENCES library_books(id) ON DELETE CASCADE,
        issue_date DATE NOT NULL,
        return_date DATE
    )
`);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS routines (
        id SERIAL PRIMARY KEY,
        class_id INT NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
        subject_id INT NOT NULL REFERENCES subject(id) ON DELETE CASCADE,
        teacher_id INT NOT NULL REFERENCES teacher(id) ON DELETE CASCADE,
        day VARCHAR(10) NOT NULL,
        start_time TIME NOT NULL,
        end_time TIME NOT NULL
    )
`);
        console.log("Connected to the database successfully and tables created if not exist.");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit the process with an error code
    }
};
