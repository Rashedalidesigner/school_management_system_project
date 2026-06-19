export interface Assignment {
    id: number;
    title: string;
    description: string;
    class_id: number;
    subject_id: number;
    teacher_id: number;
    due_date: Date;
}