import {
    useGetSubmissionsQuery,
    useAddSubmissionsMutation,
    useUpdateSubmissionsMutation,
    useDeleteSubmissionsMutation,
} from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function AssignmentSubmissionList() {
    const columns = [
        { key: 'assignment_id', label: 'Assignment ID' },
        { key: 'student_id', label: 'Student ID' },
        { key: 'submission_file_link', label: 'Attachment URL' },
    ];

    const formFields = [
        { name: 'assignment_id', label: 'Assignment ID', type: 'number', required: true },
        { name: 'student_id', label: 'Student ID', type: 'number', required: true },
        { name: 'submission_file_link', label: 'File Attachment URL Link' },
    ];

    const initialFormState = { id: '', assignment_id: '', student_id: '', submission_file_link: '' };

    return (
        <DynamicCRUD
            title="Student Submissions"
            queryHook={useGetSubmissionsQuery}
            addHook={useAddSubmissionsMutation}
            updateHook={useUpdateSubmissionsMutation}
            deleteHook={useDeleteSubmissionsMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}