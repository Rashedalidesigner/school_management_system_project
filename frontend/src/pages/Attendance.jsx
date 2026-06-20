import {
    useGetAttendanceQuery,
    useAddAttendanceMutation,
    useUpdateAttendanceMutation,
    useDeleteAttendanceMutation,
} from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function AttendanceList() {
    const columns = [
        { key: 'class_id', label: 'Class ID' },
        { key: 'student_id', label: 'Student ID' },
        { key: 'attendance_date', label: 'Date' },
        { key: 'status', label: 'Status' },
    ];

    const formFields = [
        { name: 'class_id', label: 'Class ID', type: 'number', required: true },
        { name: 'student_id', label: 'Student ID', type: 'number', required: true },
        { name: 'attendance_date', label: 'Attendance Date', type: 'date', required: true },
        {
            name: 'status', type: "select", label: 'Status (e.g., Present, Absent)', required: true,
            options: ['Absent', 'Present', 'Late']
        },
    ];

    const initialFormState = { id: '', class_id: '', student_id: '', attendance_date: '', status: '' };

    return (
        <DynamicCRUD
            title="Attendance Records"
            queryHook={useGetAttendanceQuery}
            addHook={useAddAttendanceMutation}
            updateHook={useUpdateAttendanceMutation}
            deleteHook={useDeleteAttendanceMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}