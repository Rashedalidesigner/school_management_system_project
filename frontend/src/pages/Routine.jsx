import {
    useGetRoutinesQuery,
    useAddRoutinesMutation,
    useUpdateRoutinesMutation,
    useDeleteRoutinesMutation,
} from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function RoutineList() {
    const columns = [
        { key: 'class_id', label: 'Class ID' },
        { key: 'subject_id', label: 'Subject ID' },
        { key: 'day', label: 'Weekday' },
        { key: 'start_time', label: 'Start Time' },
        { key: 'end_time', label: 'End Time' },
    ];

    const formFields = [
        { name: 'class_id', label: 'Target Class ID', type: 'number', required: true },
        { name: 'subject_id', label: 'Target Subject ID', type: 'number', required: true },
        { name: 'teacher_id', label: 'Instructor Teacher ID', type: 'number', required: true },
        { name: 'day', label: 'Day of Week (e.g. Monday)', required: true },
        { name: 'start_time', label: 'Start Time (HH:MM)', required: true },
        { name: 'end_time', label: 'End Time (HH:MM)', required: true },
    ];

    const initialFormState = { id: '', class_id: '', subject_id: '', teacher_id: '', day: '', start_time: '', end_time: '' };

    return (
        <DynamicCRUD
            title="Class Scheduling Matrix"
            queryHook={useGetRoutinesQuery}
            addHook={useAddRoutinesMutation}
            updateHook={useUpdateRoutinesMutation}
            deleteHook={useDeleteRoutinesMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}