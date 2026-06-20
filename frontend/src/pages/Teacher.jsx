import {
    useGetTeachersQuery,
    useAddTeacherMutation,
    useUpdateTeacherMutation,
    useDeleteTeacherMutation,
} from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function TeacherList() {
    const columns = [
        { key: 'name', label: 'Teacher Name' },
        { key: 'email', label: 'Email Address' },
        { key: 'phone', label: 'Phone' },
        { key: 'subject', label: 'Designation' },
        { key: 'salary', label: 'Salary' },
        { key: 'join_date', label: 'Joining_date' },
    ];

    const formFields = [
        { name: 'name', label: 'Full Name', required: true },
        { name: 'email', label: 'Email Address', type: 'email', required: true },
        { name: 'phone', label: 'Phone Number', required: true },
        { name: 'subject', label: 'Designation (e.g. Lecturer)', required: true },
        { name: 'salary', type: "number", label: 'Salary', required: true },
        { name: 'join_date', type: "date", label: 'Joining_date', required: true },
    ];

    const initialFormState = { id: '', name: '', email: '', phone: '', subject: '', salary: '', join_date: '' };

    return (
        <DynamicCRUD
            title="Teacher Directory"
            queryHook={useGetTeachersQuery}
            addHook={useAddTeacherMutation}
            updateHook={useUpdateTeacherMutation}
            deleteHook={useDeleteTeacherMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}