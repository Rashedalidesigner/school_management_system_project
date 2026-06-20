import {
    useGetParentsQuery,
    useAddParentsMutation,
    useUpdateParentsMutation,
    useDeleteParentsMutation,
} from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function ParentList() {
    const columns = [
        { key: 'name', label: 'Parent Name' },
        { key: 'email', label: 'Email' },
        { key: 'phone', label: 'Contact Phone' },
    ];

    const formFields = [
        { name: 'name', label: 'Guardian / Parent Name', required: true },
        { name: 'email', label: 'Email Address', type: 'email' },
        { name: 'phone', label: 'Phone Number' },
        { name: 'address', label: 'Residential Address', type: 'textarea' },
    ];

    const initialFormState = { id: '', name: '', email: '', phone: '', address: '' };

    return (
        <DynamicCRUD
            title="Parent/Guardian Registry"
            queryHook={useGetParentsQuery}
            addHook={useAddParentsMutation}
            updateHook={useUpdateParentsMutation}
            deleteHook={useDeleteParentsMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}