import { useState } from 'react';
import {
    useGetStudentsQuery,
    useAddStudentsMutation,
    useUpdateStudentsMutation,
    useDeleteStudentsMutation
} from '../services/SchoolApi';
import { Eye, Edit2, Trash2, Mail, Phone, MapPin, X, Plus } from 'lucide-react';

export function StudentList() {
    const { data: students, error, isLoading } = useGetStudentsQuery();
    const [addStudent, { isLoading: isAdding }] = useAddStudentsMutation();
    const [updateStudent, { isLoading: isUpdating }] = useUpdateStudentsMutation();
    const [deleteStudent] = useDeleteStudentsMutation();

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        roll_number: '',
        class_id: '',
        section: '',
        email: '',
        phone: '',
        address: '',
        date_of_birth: '',
        admission_date: ''
    });

    if (isLoading) return <div className="text-gray-500 p-6 animate-pulse font-medium">Loading students matrix...</div>;
    if (error) return <div className="text-red-500 p-6 font-medium">Error fetching student roster data.</div>;

    // date formate helper
    const formatDate = (isoString) => {
        if (!isoString) return 'N/A';
        return new Date(isoString).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };

    //input chaange handler
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // click add action
    const openAddModal = () => {
        setIsEditMode(false);
        setFormData({
            id: '', name: '', roll_number: '', class_id: '', section: '',
            email: '', phone: '', address: '', date_of_birth: '', admission_date: ''
        });
        setIsFormOpen(true);
    };

    // click edite action
    const openEditModal = (student) => {
        setIsEditMode(true);
        const dob = student.date_of_birth ? student.date_of_birth.split('T')[0] : '';
        const adm = student.admission_date ? student.admission_date.split('T')[0] : '';

        setFormData({ ...student, date_of_birth: dob, admission_date: adm });
        setIsFormOpen(true);
    };

    // handle submet form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditMode) {
                // update student
                await updateStudent(formData).unwrap();
                alert('update student sucessfull');
            } else {
                // add student
                await addStudent(formData).unwrap();
                alert('add student sucessfull');
            }
            setIsFormOpen(false);
        } catch (err) {
            alert('update failed ' + (err.data?.message || 'system err'));
        }
    };

    // Delete hadler
    const handleDelete = async (id) => {
        if (window.confirm('are your sure delete data')) {
            try {
                await deleteStudent(id).unwrap();
                alert('data Delete successfull');
            } catch (err) {
                alert(err.message);
            }
        }
    };

    return (
        <div className="relative w-full bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden min-h-full">

            {/* Table Header Action Bar */}
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">Student Roster</h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                        Showing {students?.data?.length || 0} registered student records
                    </p>
                </div>
                <button
                    onClick={openAddModal}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors flex items-center space-x-1"
                >
                    <Plus size={14} />
                    <span>Add New Student</span>
                </button>
            </div>

            {/* Data Matrix / Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                    <thead>
                        <tr className="bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider border-b border-gray-200">
                            <th className="px-6 py-3 w-16">Student Id</th>
                            <th className="px-6 py-3 w-16">Roll</th>
                            <th className="px-6 py-3">Student Info</th>
                            <th className="px-6 py-3">Class Context</th>
                            <th className="px-6 py-3">Contact Details</th>
                            <th className="px-6 py-3">Dates</th>
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100 text-gray-700">
                        {students?.data && students.data.length > 0 ? (
                            students.data.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-50/80 transition-colors group">
                                    <td className="px-6 py-4">
                                        <span className="font-mono bg-gray-100 text-gray-800 font-bold px-2.5 py-1 rounded-md text-xs">
                                            #{String(student.id || 0).padStart(2, '0')}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-mono bg-gray-100 text-gray-800 font-bold px-2.5 py-1 rounded-md text-xs">
                                            #{String(student.roll_number || 0).padStart(2, '0')}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-semibold text-gray-900">{student.name}</div>
                                        <div className="text-xs text-gray-400 font-mono">Sys ID: {student.id}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-800">Class {student.class_id}</div>
                                        <div className="text-xs text-gray-500">Section: {student.section || 'N/A'}</div>
                                    </td>
                                    <td className="px-6 py-4 space-y-0.5">
                                        <div className="flex items-center text-xs text-blue-600 hover:underline">
                                            <Mail size={12} className="mr-1.5 text-gray-400" />
                                            <span>{student.email}</span>
                                        </div>
                                        <div className="flex items-center text-xs text-gray-500 font-mono">
                                            <Phone size={12} className="mr-1.5 text-gray-400" />
                                            <span>{student.phone}</span>
                                        </div>
                                        <div className="flex items-center text-xs text-gray-400 truncate max-w-xs">
                                            <MapPin size={12} className="mr-1.5 text-gray-400" />
                                            <span>{student.address}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-xs space-y-1">
                                        <div><span className="text-gray-400 font-medium">DOB:</span> {formatDate(student.date_of_birth)}</div>
                                        <div><span className="text-gray-400 font-medium">Admitted:</span> {formatDate(student.admission_date)}</div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors">
                                                <Eye size={16} />
                                            </button>
                                            <button
                                                onClick={() => openEditModal(student)}
                                                className="p-1.5 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(student.id)}
                                                className="p-1.5 text-gray-500 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="px-6 py-12 text-center text-gray-400">
                                    No registered student profiles found in database.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* DYNAMIC FORM PANEL (SIIDEOUT OVERLAY) */}
            {isFormOpen && (
                <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-fade-in">
                    <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in">

                        {/* Panel Header */}
                        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                            <h3 className="font-bold text-lg">
                                {isEditMode ? 'Edit Student Profile' : 'Register New Student'}
                            </h3>
                            <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Panel Inputs Body */}
                        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4 text-sm">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-black-600 uppercase mb-1">Full Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-black-600 uppercase mb-1">Roll Number</label>
                                    <input type="number" name="roll_number" value={formData.roll_number} onChange={handleInputChange} required className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-black-600 uppercase mb-1">Class ID</label>
                                    <input type="number" name="class_id" value={formData.class_id} onChange={handleInputChange} required className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-black-600 uppercase mb-1">Section</label>
                                    <input type="text" name="section" value={formData.section} onChange={handleInputChange} required className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-black-600 uppercase mb-1">Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-black-600 uppercase mb-1">Phone Number</label>
                                <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-black-600 uppercase mb-1">Date of Birth</label>
                                    <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleInputChange} required className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-black-600 uppercase mb-1">Admission Date</label>
                                    <input type="date" name="admission_date" value={formData.admission_date} onChange={handleInputChange} required className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-black-600 uppercase mb-1">Present Address</label>
                                <textarea name="address" rows="2" value={formData.address} onChange={handleInputChange} required className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"></textarea>
                            </div>

                            {/* Action Buttons inside Panel */}
                            <div className="pt-4 flex items-center space-x-2 border-t">
                                <button
                                    type="button"
                                    onClick={() => setIsFormOpen(false)}
                                    className="w-1/3 border border-gray-300 text-gray-700 p-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isAdding || isUpdating}
                                    className="w-2/3 bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-lg font-semibold transition-colors disabled:bg-gray-400"
                                >
                                    {isAdding || isUpdating ? 'Saving Data...' : isEditMode ? 'Update Profile' : 'Save Record'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}