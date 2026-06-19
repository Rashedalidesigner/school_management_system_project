export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    role: 'admin' | 'teacher' | 'student' | 'parent' | 'accountant' | 'librarian';
    profile_image: string;
    is_active: boolean;
    last_login?: Date;
    created_at?: Date;
    updated_at?: Date;
}
