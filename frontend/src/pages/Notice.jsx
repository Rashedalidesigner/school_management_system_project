import {
    useGetNoticesQuery,
    useDeleteNoticesMutation,
    useUpdateNoticesMutation,
    useAddNoticesMutation,
} from '../services/SchoolApi';
import { DynamicCRUD } from './DynamicCRUD';

export function NoticeList() {
    const columns = [
        { key: 'title', label: 'Notice Header' },
        { key: 'publish_date', label: 'Release Date' },
    ];

    const formFields = [
        { name: 'title', label: 'Notice Bulletin Title', required: true },
        { name: 'description', label: 'Notice Content Description', type: 'textarea' },
        { name: 'publish_date', label: 'Publish Date', type: 'date' },
    ];

    const initialFormState = { id: '', title: '', description: '', publish_date: '' };

    return (
        <DynamicCRUD
            title="Notice Board Announcements"
            queryHook={useGetNoticesQuery}
            addHook={useAddNoticesMutation}
            updateHook={useUpdateNoticesMutation}
            deleteHook={useDeleteNoticesMutation}
            columns={columns}
            formFields={formFields}
            initialFormState={initialFormState}
        />
    );
}