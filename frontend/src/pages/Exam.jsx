import {
    useGetExamsQuery,
    useDeleteExamsMutation,
    useUpdateExamsMutation,
    useAddExamsMutation,
} from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function ExamList() {
    const columns = [
        { key: 'exam_name', label: 'Exam Title' },
        { key: 'exam_date', label: 'Exam Date' },
        { key: 'class_id', label: 'Class ID' },
    ];

    const formFields = [
        { name: 'exam_name', label: 'Exam Name', required: true },
        { name: 'exam_date', label: 'Exam Date', type: 'date' },
        { name: 'class_id', label: 'Target Class ID', type: 'number' },
    ];

    const initialFormState = { id: '', exam_name: '', exam_date: '', class_id: '' };

    return (
        <DynamicCRUD
            title="Examinations Schedules"
            queryHook={useGetExamsQuery}
            addHook={useAddExamsMutation}
            updateHook={useUpdateExamsMutation}
            deleteHook={useDeleteExamsMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}