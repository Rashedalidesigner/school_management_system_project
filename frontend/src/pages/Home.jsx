import { useState } from 'react';
import {
    BookOpen, CheckSquare, ClipboardList, School, FileText,
    CreditCard, BookOpenCheck, Library, Bell, Users,
    Award, Calendar, UserCheck, GraduationCap, Book,
    UserRound, User, Menu, LayoutDashboard,
} from 'lucide-react'; // Elegant modern icon set
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('Overview');

    const menuItems = [
        { name: 'Overview', icon: <LayoutDashboard size={18} />, route: '/api' },
        { name: 'Assignments', icon: <BookOpen size={18} />, route: '/api/assignmentsRoute' },
        { name: 'Submissions', icon: <CheckSquare size={18} />, route: '/api/assignmentsSubmetionRoute' },
        { name: 'Attendance', icon: <ClipboardList size={18} />, route: '/api/attendanceRoute' },
        { name: 'Classes', icon: <School size={18} />, route: '/api/classRoute' },
        { name: 'Exams', icon: <FileText size={18} />, route: '/api/examRoute' },
        { name: 'Fees Management', icon: <CreditCard size={18} />, route: '/api/FeesRoute' },
        { name: 'Issue Book', icon: <BookOpenCheck size={18} />, route: '/api/IssueBookRoute' },
        { name: 'Library Books', icon: <Library size={18} />, route: '/api/librayBookRoute' },
        { name: 'Notices', icon: <Bell size={18} />, route: '/api/noticeRoute' },
        { name: 'Parents', icon: <Users size={18} />, route: '/api/ParentRoute' },
        { name: 'Results', icon: <Award size={18} />, route: '/api/ResultRoute' },
        { name: 'Routines', icon: <Calendar size={18} />, route: '/api/RoutineRoute' },
        { name: 'Student-Parent Links', icon: <UserCheck size={18} />, route: '/api/StudentParentroute' },
        { name: 'Students', icon: <GraduationCap size={18} />, route: '/api/studentRoute' },
        { name: 'Subjects', icon: <Book size={18} />, route: '/api/Subjectroute' },
        { name: 'Teachers', icon: <UserRound size={18} />, route: '/api/TeacherRoute' },
        { name: 'Users Control', icon: <User size={18} />, route: '/api/userRoute' },
    ];

    return (
        <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
            {/* SIDEBAR NAVIGATION */}
            <SideBar activeTab={activeTab} setActiveTab={setActiveTab} setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />

            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
                {/* TOP NAVBAR */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10 shrink-0">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-1 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
                        >
                            <Menu size={24} />
                        </button>
                        <h2 className="text-xl font-semibold text-gray-800">{activeTab}</h2>
                    </div>
                    {/* User Profile Info */}
                    <div className="flex items-center space-x-3">
                        <div className="hidden sm:block text-right">
                            <p className="text-sm font-medium text-gray-700">Alex Mercer</p>
                            <p className="text-xs text-indigo-600 font-medium">Super Admin</p>
                        </div>
                        <div className="h-9 w-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold shadow-sm">
                            AM
                        </div>
                    </div>
                </header>

                {/* MAIN DYNAMIC CONTENT CONTAINER (FIXED SCROLLING HERE) */}
                <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
                    {activeTab === "Overview" ? (
                        <div className="space-y-6">
                            {/* Top Summary Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                <StatCard title="Total Students" value="1,482" icon={<GraduationCap className="text-indigo-600" />} color="bg-indigo-50" />
                                <StatCard title="Active Teachers" value="74" icon={<UserRound className="text-emerald-600" />} color="bg-emerald-50" />
                                <StatCard title="Library Books" value="12,450" icon={<Library className="text-amber-600" />} color="bg-amber-50" />
                                <StatCard title="Outstanding Fees" value="$8,940" icon={<CreditCard className="text-rose-600" />} color="bg-rose-50" />
                            </div>

                            {/* API Route Overview Status Table */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                                    <h3 className="font-semibold text-gray-800">Backend API Routing Manifest</h3>
                                    <p className="text-xs text-gray-500 mt-0.5">Live registration map of school operations controllers</p>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-gray-50 text-gray-500 text-xs font-semibold tracking-wider border-b border-gray-200">
                                                <th className="px-6 py-3">Module Context</th>
                                                <th className="px-6 py-3">Active Endpoint Path</th>
                                                <th className="px-6 py-3">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm divide-y divide-gray-100 text-gray-700">
                                            {menuItems.slice(1, 8).map((item) => (
                                                <tr key={item.name} className="hover:bg-gray-50/70 transition-colors">
                                                    <td className="px-6 py-3.5 font-medium text-gray-900 flex items-center space-x-2">
                                                        <span className="text-gray-400">{item.icon}</span>
                                                        <span>{item.name}</span>
                                                    </td>
                                                    <td className="px-6 py-3.5 font-mono text-xs text-indigo-600">{item.route}</td>
                                                    <td className="px-6 py-3.5">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                                                            Active
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Outlet />
                    )}
                </main>
            </div>
        </div>
    );
}


function StatCard({ title, value, icon, color }) {
    return (
        <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm flex items-center justify-between transition-transform duration-200 hover:-translate-y-0.5">
            <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</span>
                <h4 className="text-2xl font-bold text-gray-800 mt-1">{value}</h4>
            </div>
            <div className={`p-3 rounded-xl ${color}`}>
                {icon}
            </div>
        </div>
    );
}
// Reusable Metric Card Sub-component
