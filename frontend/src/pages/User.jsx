import { useAddUsersMutation, useDeleteUsersMutation, useGetUsersQuery, useUpdateUsersMutation } from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function UserList() {
    const columns = [
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'phone', label: 'Phone' },
        { key: 'role', label: 'Role' },
    ];

    const formFields = [
        { name: 'name', label: 'Full Name', required: true },
        { name: 'email', label: 'Email Address', type: 'email', required: true },
        { name: 'phone', label: 'Phone Number' },
        { name: 'password', label: 'Password', type: 'password', required: true },
        {
            name: 'role',
            label: 'Role',
            type: 'select',
            required: true,
            options: ['admin', 'teacher', 'student', 'parent', 'accountant', 'librarian']
        },
        { name: 'profile_image', label: 'Profile Image Link (URL)' },
    ];

    const initialFormState = { id: '', name: '', email: '', phone: '', password: '', role: 'student', profile_image: '', is_active: true };

    return (
        <DynamicCRUD
            title="User Management"
            queryHook={useGetUsersQuery}
            addHook={useAddUsersMutation}
            updateHook={useUpdateUsersMutation}
            deleteHook={useDeleteUsersMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}