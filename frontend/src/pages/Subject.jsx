
import { useAddSubjectsMutation, useDeleteSubjectsMutation, useGetSubjectsQuery, useUpdateSubjectsMutation } from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function SubjectList() {
    const columns = [
        { key: 'class_id', label: 'Class ID' },
        { key: 'subject_name', label: 'Subjects' },
    ];

    const formFields = [
        { name: 'class_id', label: 'Class ID', type: 'number', required: true },
        { name: 'subject_name', label: 'Subject Names (Comma separated)', required: true },
    ];

    const initialFormState = { id: '', class_id: '', subject_name: '' };
    return (
        <DynamicCRUD
            title="Subject Matrix"
            queryHook={useGetSubjectsQuery}
            addHook={useAddSubjectsMutation}
            updateHook={useUpdateSubjectsMutation}
            deleteHook={useDeleteSubjectsMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}