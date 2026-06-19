import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const schoolApi = createApi({
    reducerPath: 'schoolApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }), // Replace with your backend URL
    tagTypes: [
        'Assignments', 'Submissions', 'Attendance', 'Classes', 'Exams',
        'Fees', 'IssueBook', 'Library', 'Notices', 'Parents',
        'Results', 'Routines', 'StudentParent', 'Students', 'Subjects', 'Teachers', 'Users'
    ],
    endpoints: (builder) => ({
        // 1. Assignments
        getAssignments: builder.query({
            query: () => '/assignments',
            providesTags: ['Assignments'],
        }),

        addAssignments: builder.mutation({
            query: (newdata) => ({
                url: `/assignments}`,
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ["Assignments"]
        }),

        UpdateAssignments: builder.mutation({
            query: (newdata) => ({
                url: `/assignments/:${Number(newdata.id)}`,
                method: "PATCH",
                body: newdata
            }),
            invalidatesTags: ["Assignments"]
        }),

        deleteAssignments: builder.mutation({
            query: (id) => ({
                url: `/assignments/:${id}}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Assignments"]
        }),

        // 2. Assignment Submissions
        getSubmissions: builder.query({
            query: () => '/assignment-Submetion',
            providesTags: ['Submissions'],
        }),

        // 3. Attendance
        getAttendance: builder.query({
            query: () => '/attendanceRoute',
            providesTags: ['Attendance'],
        }),

        // 4. Classes
        getClasses: builder.query({
            query: () => '/classRoute',
            providesTags: ['Classes'],
        }),

        // 5. Exams
        getExams: builder.query({
            query: () => '/examRoute',
            providesTags: ['Exams'],
        }),

        // 6. Fees
        getFees: builder.query({
            query: () => '/FeesRoute',
            providesTags: ['Fees'],
        }),

        // 7. Issue Book
        getIssuedBooks: builder.query({
            query: () => '/IssueBookRoute',
            providesTags: ['IssueBook'],
        }),

        // 8. Library Books
        getLibraryBooks: builder.query({
            query: () => '/librayBookRoute',
            providesTags: ['Library'],
        }),

        // 9. Notices
        getNotices: builder.query({
            query: () => '/noticeRoute',
            providesTags: ['Notices'],
        }),

        // 10. Parents
        getParents: builder.query({
            query: () => '/ParentRoute',
            providesTags: ['Parents'],
        }),

        // 11. Results
        getResults: builder.query({
            query: () => '/ResultRoute',
            providesTags: ['Results'],
        }),

        // 12. Routines
        getRoutines: builder.query({
            query: () => '/RoutineRoute',
            providesTags: ['Routines'],
        }),

        // 13. Student-Parent Relations
        getStudentParentLinks: builder.query({
            query: () => '/StudentParentroute',
            providesTags: ['StudentParent'],
        }),

        // 14. Students
        getStudents: builder.query({
            query: () => '/student',
            providesTags: ['Students'],
        }),

        addStudents: builder.mutation({
            query: (newdata) => ({
                url: '/student',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ['Students'],
        }),

        updateStudents: builder.mutation({
            query: (newdata) => ({
                url: `/student/${newdata.id}`, // ক্লোন (:) চিহ্ন ফেলে দেওয়া হয়েছে
                method: "PATCH", // আপনার ব্যাকএন্ডে PUT হলে PUT লিখবেন
                body: newdata
            }),
            invalidatesTags: ['Students'],
        }),

        deleteStudents: builder.mutation({
            query: (id) => ({
                url: `/student/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Students'],
        }),

        // 15. Subjects
        getSubjects: builder.query({
            query: () => '/Subjectroute',
            providesTags: ['Subjects'],
        }),

        // 16. Teachers
        getTeachers: builder.query({
            query: () => '/teacher',
            providesTags: ['Teachers'],
        }),

        addTeacher: builder.mutation({
            query: (newdata) => ({
                url: `/teacher`,
                method: "POST",
                body: newdata
            })
        }),

        updateTeacher: builder.mutation({
            query: (newdata) => ({
                url: `/teacher/:${Number(newdata.id)}`,
                method: "PATCH",
                body: newdata
            })
        }),

        deleteTeacher: builder.mutation({
            query: (id) => ({
                url: `/teacher/:${id}`,
                method: "DELETE",
            })
        }),

        // 17. Users Control
        getUsers: builder.query({
            query: () => '/userRoute',
            providesTags: ['Users'],
        }),
    }),
});


export const {
    useGetAssignmentsQuery,
    useGetSubmissionsQuery,
    useGetAttendanceQuery,
    useGetClassesQuery,
    useGetExamsQuery,
    useGetFeesQuery,
    useGetIssuedBooksQuery,
    useGetLibraryBooksQuery,
    useGetNoticesQuery,
    useGetParentsQuery,
    useGetResultsQuery,
    useGetRoutinesQuery,
    useGetStudentParentLinksQuery,
    useGetStudentsQuery,
    useAddStudentsMutation,
    useUpdateStudentsMutation,
    useDeleteStudentsMutation,
    useGetSubjectsQuery,
    useGetTeachersQuery,
    useAddTeacherMutation,
    useUpdateTeacherMutation,
    useDeleteTeacherMutation,
    useGetUsersQuery,
} = schoolApi;