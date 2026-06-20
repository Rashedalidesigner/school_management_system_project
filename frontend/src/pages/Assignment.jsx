import {
    useGetAssignmentsQuery,
    useDeleteAssignmentsMutation,
    useUpdateAssignmentsMutation,
    useAddAssignmentsMutation,
} from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function AssignmentList() {
    const columns = [
        { key: 'id', label: 'Assignment Id' },
        { key: 'title', label: 'Assignment Title' },
        { key: 'class_id', label: 'Class ID' },
        { key: 'teacher_id', label: 'Teacher ID' },
        { key: 'due_date', label: 'Due Date' },
    ];

    const formFields = [
        { name: 'title', label: 'Assignment Title', required: true },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'class_id', label: 'Class ID', type: 'number' },
        { name: 'subject_id', label: 'Subject ID', type: 'number' },
        { name: 'teacher_id', label: 'Assigned Teacher ID', type: 'number' },
        { name: 'due_date', label: 'Submission Due Date', type: 'date' },
    ];

    const initialFormState = { id: '', title: '', description: '', class_id: '', subject_id: '', teacher_id: '', due_date: '' };

    return (
        <DynamicCRUD
            title="Assignments Vault"
            queryHook={useGetAssignmentsQuery}
            addHook={useAddAssignmentsMutation}
            updateHook={useUpdateAssignmentsMutation}
            deleteHook={useDeleteAssignmentsMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}