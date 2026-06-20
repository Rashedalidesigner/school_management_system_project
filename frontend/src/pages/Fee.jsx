import {
    useGetFeesQuery,
    useDeleteFeesMutation,
    useUpdateFeesMutation,
    useAddFeesMutation,
} from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function FeeList() {
    const columns = [
        { key: 'student_id', label: 'Student ID' },
        { key: 'amount', label: 'Amount Due' },
        { key: 'fees_types', label: 'Fee Category' },
        { key: 'payment_status', label: 'Status' },
    ];

    const formFields = [
        { name: 'student_id', label: 'Student ID', type: 'number', required: true },
        { name: 'amount', label: 'Invoice Amount ($)', type: 'number', required: true },
        { name: 'fees_types', label: 'Fee Type (e.g., Tuition, Exam)' },
        { name: 'payment_status', type: "select", label: 'Payment Status (e.g., Paid, Pending)', options: ["Paid", "Panding"] },
        { name: 'payment_date', label: 'Settlement Date', type: 'date' },
    ];

    const initialFormState = { id: '', student_id: '', amount: '', fees_types: '', payment_status: '', payment_date: '' };

    return (
        <DynamicCRUD
            title="Financial Fee Directory"
            queryHook={useGetFeesQuery}
            addHook={useAddFeesMutation}
            updateHook={useUpdateFeesMutation}
            deleteHook={useDeleteFeesMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}