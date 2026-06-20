import { useState } from 'react';
import { Eye, Edit2, Trash2, X, Plus } from 'lucide-react';

export function DynamicCRUD({ title, queryHook, addHook, updateHook, deleteHook, columns, formFields, initialFormState }) {
    const { data: responseData, error, isLoading } = queryHook();
    const [createRecord, { isLoading: isAdding }] = addHook();
    const [updateRecord, { isLoading: isUpdating }] = updateHook();
    const [deleteRecord] = deleteHook();

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [formData, setFormData] = useState(initialFormState);


    const records = responseData?.data || (Array.isArray(responseData) ? responseData : []);


    if (isLoading) return <div className="text-gray-500 p-6 animate-pulse font-medium">Loading {title} data...</div>;
    if (error) return <div className="text-red-500 p-6 font-medium">Error loading data asset matrix.</div>;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const openAddModal = () => {
        setIsEditMode(false);
        setFormData(initialFormState);
        setIsFormOpen(true);
    };

    const openEditModal = (record) => {
        setIsEditMode(true);
        const cleanedRecord = { ...record };
        formFields.forEach(field => {
            if (field.type === 'date' && cleanedRecord[field.name]) {
                cleanedRecord[field.name] = cleanedRecord[field.name].split('T')[0];
            }
        });
        setFormData(cleanedRecord);
        setIsFormOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditMode) {
                await updateRecord(formData).unwrap();
                alert('Record updated successfully!');
            } else {
                const { id, ...submitData } = formData;
                await createRecord(submitData).unwrap();
                alert('Record saved successfully!');
            }
            setIsFormOpen(false);
        } catch (err) {
            console.log(err)
            alert('Operation failed: ' + (err?.message || 'System error'));
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this record?')) {
            try {
                await deleteRecord(id).unwrap();
                alert('Deleted successfully!');
            } catch (err) {
                alert(err.message || 'Delete failed');
            }
        }
    };

    return (
        <div className="relative w-full bg-white border border-gray-200 rounded-xl shadow-sm">
            {/* Header section */}
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Showing {records.length} records</p>
                </div>
                <button onClick={openAddModal} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center space-x-1">
                    <Plus size={14} />
                    <span>Add Entry</span>
                </button>
            </div>

            {/* Dynamic Table */}
            <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                    <thead>
                        <tr className="bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider border-b border-gray-200">
                            {columns.map((col) => (
                                <th key={col.key} className="px-6 py-3">{col.label}</th>
                            ))}
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100 text-gray-700">
                        {records.length > 0 ? (
                            records.map((record) => (
                                <tr key={record.id} className="hover:bg-gray-50/80 transition-colors group">
                                    {columns.map((col) => (
                                        <td key={col.key} className="px-6 py-4">
                                            {col.render ? col.render(record) : (record[col.key] || 'N/A')}
                                        </td>
                                    ))}
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end space-x-1 opacity-80 group-hover:opacity-100">
                                            <button className="p-1.5 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-md">
                                                <Eye size={16} />
                                            </button>
                                            <button onClick={() => openEditModal(record)} className="p-1.5 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md">
                                                <Edit2 size={16} />
                                            </button>
                                            <button onClick={() => handleDelete(record.id)} className="p-1.5 text-gray-500 hover:text-rose-600 hover:bg-rose-50 rounded-md">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length + 1} className="px-6 py-12 text-center text-gray-400">
                                    No records discovered in the cluster.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Dynamic Sliding Drawer Form */}
            {isFormOpen && (
                <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
                    <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
                        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                            <h3 className="font-bold text-lg">{isEditMode ? `Edit ${title}` : `New ${title}`}</h3>
                            <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-white"><X size={20} /></button>
                        </div>

                        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4 text-sm">
                            {formFields.map((field) => (
                                <div key={field.name}>
                                    <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">{field.label}</label>

                                    {/* 1. Textarea Condition */}
                                    {field.type === 'textarea' ? (
                                        <textarea name={field.name} rows={field.rows || 2} value={formData[field.name] || ''} onChange={handleInputChange} required={field.required} className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none resize-none" />

                                        /* 2. NEW: Select Condition */
                                    ) : field.type === 'select' ? (
                                        <select name={field.name} value={formData[field.name] || ''} onChange={handleInputChange} required={field.required} className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
                                            <option disabled>Select an option</option>
                                            {console.log(field.options)}
                                            {field.options?.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>

                                        /* 3. Default Input Condition */
                                    ) : (
                                        <input type={field.type || 'text'} name={field.name} value={formData[field.name] || ''} onChange={handleInputChange} required={field.required} className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
                                    )}
                                </div>
                            ))}

                            <div className="pt-4 flex items-center space-x-2 border-t">
                                <button type="button" onClick={() => setIsFormOpen(false)} className="w-1/3 border border-gray-300 text-gray-700 p-2.5 rounded-lg">Cancel</button>
                                <button type="submit" disabled={isAdding || isUpdating} className="w-2/3 bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-lg font-semibold disabled:bg-gray-400">
                                    {isAdding || isUpdating ? 'Processing...' : 'Save Record'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}