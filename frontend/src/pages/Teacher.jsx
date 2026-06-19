
import { useGetTeachersQuery, useAddTeacherMutation, useUpdateTeacherMutation, useDeleteTeacherMutation } from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function TeacherList() {
    const columns = [
        { key: 'name', label: 'Teacher Name' },
        { key: 'email', label: 'Email Address' },
        { key: 'phone', label: 'Phone' },
        { key: 'designation', label: 'Designation' } // টিচারের এক্সট্রা কলাম
    ];

    const formFields = [
        { name: 'name', label: 'Full Name', required: true },
        { name: 'email', label: 'Email Address', type: 'email', required: true },
        { name: 'phone', label: 'Phone Number', required: true },
        { name: 'designation', label: 'Designation (e.g. Lecturer)', required: true },
    ];

    const initialFormState = { id: '', name: '', email: '', phone: '', designation: '' };

    return (
        <DynamicCRUD
            title="Teacher Directory"
            queryHook={useGetTeachersQuery}
            addHook={useAddTeacherMutation}
            updateHook={useUpdateTeacherMutation}
            deleteHook={useDeleteTeacherMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}