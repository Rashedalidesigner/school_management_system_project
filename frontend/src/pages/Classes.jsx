import {
    useGetClassesQuery,
    useDeleteClassesMutation,
    useUpdateClassesMutation,
    useAddClassesMutation,
} from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function ClassList() {
    const columns = [
        { key: 'class_name', label: 'Class Name' },
        { key: 'section_name', label: 'Section' },
    ];

    const formFields = [
        { name: 'class_name', label: 'Class Name', required: true },
        { name: 'section_name', label: 'Section Name (e.g., A, B)' },
    ];

    const initialFormState = { id: '', class_name: '', section_name: '' };

    return (
        <DynamicCRUD
            title="Class Directory"
            queryHook={useGetClassesQuery}
            addHook={useAddClassesMutation}
            updateHook={useUpdateClassesMutation}
            deleteHook={useDeleteClassesMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}