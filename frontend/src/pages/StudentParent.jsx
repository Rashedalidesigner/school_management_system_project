import {
    useDeleteStudentParentLinksMutation,
    useUpdateStudentParentLinksMutation,
    useAddStudentParentLinksMutation,
    useGetStudentParentLinksQuery,
} from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function StudentParentRelationList() {
    const columns = [
        { key: 'student_id', label: 'Student ID' },
        { key: 'parent_id', label: 'Parent ID' },
        { key: 'relation', label: 'Relationship Status' },
    ];

    const formFields = [
        { name: 'student_id', label: 'Student ID', type: 'number', required: true },
        { name: 'parent_id', label: 'Parent ID', type: 'number', required: true },
        { name: 'relation', label: 'Relation (e.g. Mother, Father, Guardian)' },
    ];

    const initialFormState = { id: '', student_id: '', parent_id: '', relation: '' };

    return (
        <DynamicCRUD
            title="Student-Parent Linkage Map"
            queryHook={useGetStudentParentLinksQuery}
            addHook={useAddStudentParentLinksMutation}
            updateHook={useUpdateStudentParentLinksMutation}
            deleteHook={useDeleteStudentParentLinksMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}