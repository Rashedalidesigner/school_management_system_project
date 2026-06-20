import {
    useGetIssuedBooksQuery,
    useDeleteIssuedBooksMutation,
    useUpdateIssuedBooksMutation,
    useAddIssuedBooksMutation,
} from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function IssuedBookList() {
    const columns = [
        { key: 'student_id', label: 'Student ID' },
        { key: 'book_id', label: 'Book Asset ID' },
        { key: 'issue_date', label: 'Checkout Date' },
        { key: 'return_date', label: 'Expected Return' },
    ];

    const formFields = [
        { name: 'student_id', label: 'Student Borrower ID', type: 'number', required: true },
        { name: 'book_id', label: 'Library Book ID', type: 'number', required: true },
        { name: 'issue_date', label: 'Issue Date', type: 'date', required: true },
        { name: 'return_date', label: 'Target Return Date', type: 'date' },
    ];

    const initialFormState = { id: '', student_id: '', book_id: '', issue_date: '', return_date: '' };
    return (
        <DynamicCRUD
            title="Library Borrow Log"
            queryHook={useGetIssuedBooksQuery}
            addHook={useAddIssuedBooksMutation}
            updateHook={useUpdateIssuedBooksMutation}
            deleteHook={useDeleteIssuedBooksMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}