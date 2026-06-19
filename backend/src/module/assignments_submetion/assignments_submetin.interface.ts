export interface AssignmentSubmission {
    id: number;
    assignment_id: number;
    student_id: number;
    submission_file_link: string;
    submitted_at: Date;
}