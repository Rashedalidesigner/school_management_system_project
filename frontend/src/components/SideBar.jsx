import { LogOut, Settings, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const SideBar = ({ activeTab, setActiveTab, setIsSidebarOpen, isSidebarOpen }) => {
    const menuItems = [
        { name: 'Overview', path: "/admin", },
        { name: 'Assignments', path: "/assignment", },
        { name: 'Submissions', path: "/assignment-submet", },
        { name: 'Attendance', path: "/attendance", },
        { name: 'Classes', path: "/class", },
        { name: 'Exams', path: "/exam", },
        { name: 'Fees Management', path: "/fee", },
        { name: 'Issue Book', path: "/issus_book", },
        { name: 'Library Books', path: "/libray_book", },
        { name: 'Notices', path: "/notice", },
        { name: 'Parents', path: "/parent", },
        { name: 'Results', path: "/result", },
        { name: 'Routines', path: "/routine", },
        { name: 'Student-Parent Links', path: "/student_parent", },
        { name: 'Students', path: "/student", },
        { name: 'Subjects', path: "/subject", },
        { name: 'Teachers', path: "/teacher", },
        { name: 'Users Control', path: "/user", },
    ];

    const navigate = useNavigate();

    return <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 text-slate-200 transform transition-transform duration-300 ease-in-out flex flex-col
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
              md:relative md:translate-x-0`}
    >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-6 bg-slate-950 border-b border-slate-800">
            <span className="text-xl font-bold text-white tracking-wide">EduCore Admin</span>
            <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                <X size={20} />
            </button>
        </div>

        {/* Scrollable Navigation List */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1 scrollbar-thin scrollbar-thumb-slate-700">
            <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Modules</p>
            {menuItems.map((item) => (
                <button
                    key={item.name}
                    onClick={() => {
                        navigate(item.path);
                        setActiveTab(item.name);
                        if (window.innerWidth < 768) setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group
                    ${activeTab === item.name
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'hover:bg-slate-800 text-slate-400 hover:text-slate-100'}`}
                >
                    <span className={`${activeTab === item.name ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'}`}>
                        {item.icon}
                    </span>
                    <span className="truncate">{item.name}</span>
                </button>
            ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 space-y-2">
            <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:bg-slate-800 hover:text-slate-100">
                <Settings size={18} />
                <span>Settings</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-950/30 hover:text-red-300">
                <LogOut size={18} />
                <span>Logout</span>
            </button>
        </div>
    </aside>
}

export default SideBar