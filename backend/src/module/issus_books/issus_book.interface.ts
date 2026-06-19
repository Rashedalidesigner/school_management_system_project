export interface IssuedBook {
    id: number;
    student_id: number;
    book_id: number;
    issue_date: Date;
    return_date: Date;
}