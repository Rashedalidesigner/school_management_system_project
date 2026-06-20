import {
    useGetLibraryBooksQuery,
    useAddLibraryBooksMutation,
    useUpdateLibraryBooksMutation,
    useDeleteLibraryBooksMutation,
} from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function LibraryBookList() {
    const columns = [
        { key: 'books_name', label: 'Book Title' },
        { key: 'author', label: 'Author Name' },
        { key: 'quantity', label: 'In Stock Count' },
    ];

    const formFields = [
        { name: 'books_name', label: 'Book Title Name', required: true },
        { name: 'author', label: 'Author' },
        { name: 'quantity', label: 'Stock Volume (Quantity)', type: 'number' },
    ];

    const initialFormState = { id: '', books_name: '', author: '', quantity: 0 };

    return (
        <DynamicCRUD
            title="Library Catalog Inventory"
            queryHook={useGetLibraryBooksQuery}
            addHook={useAddLibraryBooksMutation}
            updateHook={useUpdateLibraryBooksMutation}
            deleteHook={useDeleteLibraryBooksMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}