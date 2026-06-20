import {
    useGetResultsQuery,
    useAddResultsMutation,
    useDeleteResultsMutation,
    useUpdateResultsMutation,
} from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function ResultList() {
    const columns = [
        { key: 'student_id', label: 'Student ID' },
        { key: 'exam_id', label: 'Exam ID' },
        { key: 'marks', label: 'Total Marks' },
        { key: 'grade', label: 'Grade' },
    ];

    const formFields = [
        { name: 'student_id', label: 'Student ID', type: 'number', required: true },
        { name: 'exam_id', label: 'Exam ID', type: 'number', required: true },
        { name: 'marks', label: 'Total Numeric Marks', type: 'number' },
        { name: 'grade', label: 'Final Grade' },
    ];

    const initialFormState = { id: '', student_id: '', exam_id: '', marks: '', grade: '' };
    //
    return (
        <DynamicCRUD
            title="Academic Results"
            queryHook={useGetResultsQuery}
            addHook={useAddResultsMutation}
            updateHook={useUpdateResultsMutation}
            deleteHook={useDeleteResultsMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}