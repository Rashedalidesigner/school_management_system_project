import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import dotenv from "dotenv";

// dotenv.config();
console.log(import.meta.env.VITE_API_BASE_URL);

export const schoolApi = createApi({
    reducerPath: 'schoolApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
    tagTypes: [
        'Assignments', 'Submissions', 'Attendance', 'Classes', 'Exams',
        'Fees', 'IssueBook', 'Library', 'Notices', 'Parents',
        'Results', 'Routines', 'StudentParent', 'Students', 'Subjects', 'Teachers', 'Users'
    ],
    endpoints: (builder) => ({
        // 1. Assignments
        getAssignments: builder.query({
            query: () => '/assignment',
            providesTags: ['Assignments'],
        }),
        addAssignments: builder.mutation({
            query: (newdata) => ({
                url: '/assignment',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ["Assignments"]
        }),
        updateAssignments: builder.mutation({
            query: (newdata) => ({
                url: `/assignment/${newdata.id}`,
                method: "PATCH",
                body: newdata
            }),
            invalidatesTags: ["Assignments"]
        }),
        deleteAssignments: builder.mutation({
            query: (id) => ({
                url: `/assignment/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Assignments"]
        }),

        // 2. Assignment Submissions
        getSubmissions: builder.query({
            query: () => '/assignment-submet',
            providesTags: ['Submissions'],
        }),
        addSubmissions: builder.mutation({
            query: (newdata) => ({
                url: '/assignment-submet',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ['Submissions'],
        }),
        updateSubmissions: builder.mutation({
            query: (newdata) => ({
                url: `/assignment-submet/${newdata.id}`,
                method: "PATCH",
                body: newdata
            }),
            invalidatesTags: ['Submissions'],
        }),
        deleteSubmissions: builder.mutation({
            query: (id) => ({
                url: `/assignment-submet/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Submissions'],
        }),

        // 3. Attendance
        getAttendance: builder.query({
            query: () => '/attendance',
            providesTags: ['Attendance'],
        }),
        addAttendance: builder.mutation({
            query: (newdata) => ({
                url: '/attendance',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ['Attendance'],
        }),
        updateAttendance: builder.mutation({
            query: (newdata) => ({
                url: `/attendance/${newdata.id}`,
                method: "PATCH",
                body: newdata
            }),
            invalidatesTags: ['Attendance'],
        }),
        deleteAttendance: builder.mutation({
            query: (id) => ({
                url: `/attendance/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Attendance'],
        }),

        // 4. Classes
        getClasses: builder.query({
            query: () => '/class',
            providesTags: ['Classes'],
        }),
        addClasses: builder.mutation({
            query: (newdata) => ({
                url: '/class',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ['Classes'],
        }),
        updateClasses: builder.mutation({
            query: (newdata) => ({
                url: `/class/${newdata.id}`,
                method: "PATCH",
                body: newdata
            }),
            invalidatesTags: ['Classes'],
        }),
        deleteClasses: builder.mutation({
            query: (id) => ({
                url: `/class/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Classes'],
        }),

        // 5. Exams
        getExams: builder.query({
            query: () => '/exam',
            providesTags: ['Exams'],
        }),
        addExams: builder.mutation({
            query: (newdata) => ({
                url: '/exam',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ['Exams'],
        }),
        updateExams: builder.mutation({
            query: (newdata) => ({
                url: `/exam/${newdata.id}`,
                method: "PATCH",
                body: newdata
            }),
            invalidatesTags: ['Exams'],
        }),
        deleteExams: builder.mutation({
            query: (id) => ({
                url: `/exam/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Exams'],
        }),

        // 6. Fees
        getFees: builder.query({
            query: () => '/fees',
            providesTags: ['Fees'],
        }),
        addFees: builder.mutation({
            query: (newdata) => ({
                url: '/fees',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ['Fees'],
        }),
        updateFees: builder.mutation({
            query: (newdata) => ({
                url: `/fees/${newdata.id}`,
                method: "PATCH",
                body: newdata
            }),
            invalidatesTags: ['Fees'],
        }),
        deleteFees: builder.mutation({
            query: (id) => ({
                url: `/fees/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Fees'],
        }),

        // 7. Issue Book
        getIssuedBooks: builder.query({
            query: () => '/issue-book',
            providesTags: ['IssueBook'],
        }),
        addIssuedBooks: builder.mutation({
            query: (newdata) => ({
                url: '/issue-book',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ['IssueBook'],
        }),
        updateIssuedBooks: builder.mutation({
            query: (newdata) => ({
                url: `/issue-book/${newdata.id}`,
                method: "PATCH",
                body: newdata
            }),
            invalidatesTags: ['IssueBook'],
        }),
        deleteIssuedBooks: builder.mutation({
            query: (id) => ({
                url: `/issue-book/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['IssueBook'],
        }),

        // 8. Library Books
        getLibraryBooks: builder.query({
            query: () => '/libray-book',
            providesTags: ['Library'],
        }),
        addLibraryBooks: builder.mutation({
            query: (newdata) => ({
                url: '/libray-book',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ['Library'],
        }),
        updateLibraryBooks: builder.mutation({
            query: (newdata) => ({
                url: `/libray-book/${newdata.id}`,
                method: "PATCH",
                body: newdata
            }),
            invalidatesTags: ['Library'],
        }),
        deleteLibraryBooks: builder.mutation({
            query: (id) => ({
                url: `/libray-book/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Library'],
        }),

        // 9. Notices
        getNotices: builder.query({
            query: () => '/notice',
            providesTags: ['Notices'],
        }),
        addNotices: builder.mutation({
            query: (newdata) => ({
                url: '/notice',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ['Notices'],
        }),
        updateNotices: builder.mutation({
            query: (newdata) => ({
                url: `/notice/${newdata.id}`,
                method: "PATCH",
                body: newdata
            }),
            invalidatesTags: ['Notices'],
        }),
        deleteNotices: builder.mutation({
            query: (id) => ({
                url: `/notice/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Notices'],
        }),

        // 10. Parents
        getParents: builder.query({
            query: () => '/parent',
            providesTags: ['Parents'],
        }),
        addParents: builder.mutation({
            query: (newdata) => ({
                url: '/parent',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ['Parents'],
        }),
        updateParents: builder.mutation({
            query: (newdata) => ({
                url: `/parent/${newdata.id}`,
                method: "PATCH",
                body: newdata
            }),
            invalidatesTags: ['Parents'],
        }),
        deleteParents: builder.mutation({
            query: (id) => ({
                url: `/parent/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Parents'],
        }),

        // 11. Results
        getResults: builder.query({
            query: () => '/result',
            providesTags: ['Results'],
        }),
        addResults: builder.mutation({
            query: (newdata) => ({
                url: '/result',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ['Results'],
        }),
        updateResults: builder.mutation({
            query: (newdata) => ({
                url: `/result/${newdata.id}`,
                method: "PATCH",
                body: newdata
            }),
            invalidatesTags: ['Results'],
        }),
        deleteResults: builder.mutation({
            query: (id) => ({
                url: `/result/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Results'],
        }),

        // 12. Routines
        getRoutines: builder.query({
            query: () => '/routine',
            providesTags: ['Routines'],
        }),
        addRoutines: builder.mutation({
            query: (newdata) => ({
                url: '/routine',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ['Routines'],
        }),
        updateRoutines: builder.mutation({
            query: (newdata) => ({
                url: `/routine/${newdata.id}`,
                method: "PATCH",
                body: newdata
            }),
            invalidatesTags: ['Routines'],
        }),
        deleteRoutines: builder.mutation({
            query: (id) => ({
                url: `/routine/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Routines'],
        }),

        // 13. Student-Parent Relations
        getStudentParentLinks: builder.query({
            query: () => '/student-parent',
            providesTags: ['StudentParent'],
        }),
        addStudentParentLinks: builder.mutation({
            query: (newdata) => ({
                url: '/student-parent',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ['StudentParent']
        }),
        updateStudentParentLinks: builder.mutation({
            query: (newdata) => ({
                url: `/student-parent/${newdata.id}`,
                method: "PATCH", // Swapped POST to PATCH for regular REST updates
                body: newdata
            }),
            invalidatesTags: ['StudentParent']
        }),
        deleteStudentParentLinks: builder.mutation({
            query: (id) => ({
                url: `/student-parent/${id}`,
                method: "DELETE", // Swapped POST to DELETE
            }),
            invalidatesTags: ['StudentParent']
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
                url: `/student/${newdata.id}`,
                method: "PATCH",
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
            query: () => '/subject',
            providesTags: ['Subjects'],
        }),
        addSubjects: builder.mutation({
            query: (newdata) => ({
                url: '/subject',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ['Subjects']
        }),
        updateSubjects: builder.mutation({
            query: (newdata) => ({
                url: `/subject/${newdata.id}`,
                method: "PATCH",
                body: newdata
            }),
            invalidatesTags: ['Subjects']
        }),
        deleteSubjects: builder.mutation({
            query: (id) => ({
                url: `/subject/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Subjects']
        }),

        // 16. Teachers
        getTeachers: builder.query({
            query: () => '/teacher',
            providesTags: ['Teachers'],
        }),
        addTeacher: builder.mutation({
            query: (newdata) => ({
                url: '/teacher',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ['Teachers']
        }),
        updateTeacher: builder.mutation({
            query: (newdata) => ({
                url: `/teacher/${newdata.id}`,
                method: "PUT",
                body: newdata
            }),
            invalidatesTags: ['Teachers']
        }),
        deleteTeacher: builder.mutation({
            query: (id) => ({
                url: `/teacher/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Teachers']
        }),

        // 17. Users Control
        getUsers: builder.query({
            query: () => '/user',
            providesTags: ['Users'],
        }),
        addUsers: builder.mutation({
            query: (newdata) => ({
                url: '/user',
                method: "POST",
                body: newdata
            }),
            invalidatesTags: ['Users'],
        }),
        updateUsers: builder.mutation({
            query: (newdata) => ({
                url: `/user/${newdata.id}`, // Fixed URL path (changed from /teacher)
                method: "PATCH",
                body: newdata
            }),
            invalidatesTags: ['Users'],
        }),
        deleteUsers: builder.mutation({
            query: (id) => ({
                url: `/user/${id}`, // Fixed URL path (changed from /teacher)
                method: "DELETE",
            }),
            invalidatesTags: ['Users'],
        }),
    }),
});

export const {
    // 1. Assignments
    useGetAssignmentsQuery,
    useAddAssignmentsMutation,
    useUpdateAssignmentsMutation,
    useDeleteAssignmentsMutation,

    // 2. Assignment Submissions
    useGetSubmissionsQuery,
    useAddSubmissionsMutation,   // Changed Query -> Mutation
    useUpdateSubmissionsMutation, // Changed Query -> Mutation
    useDeleteSubmissionsMutation, // Changed Query -> Mutation

    // 3. Attendance
    useGetAttendanceQuery,
    useAddAttendanceMutation,     // Changed Query -> Mutation
    useUpdateAttendanceMutation,  // Changed Query -> Mutation
    useDeleteAttendanceMutation,  // Changed Query -> Mutation

    // 4. Classes
    useGetClassesQuery,
    useAddClassesMutation,        // Changed Query -> Mutation
    useUpdateClassesMutation,     // Changed Query -> Mutation
    useDeleteClassesMutation,     // Changed Query -> Mutation

    // 5. Exams
    useGetExamsQuery,
    useAddExamsMutation,          // Changed Query -> Mutation
    useUpdateExamsMutation,       // Changed Query -> Mutation
    useDeleteExamsMutation,       // Changed Query -> Mutation

    // 6. Fees
    useGetFeesQuery,
    useAddFeesMutation,           // Changed Query -> Mutation
    useUpdateFeesMutation,        // Changed Query -> Mutation
    useDeleteFeesMutation,        // Changed Query -> Mutation

    // 7. Issue Book
    useGetIssuedBooksQuery,
    useAddIssuedBooksMutation,    // Changed Query -> Mutation
    useUpdateIssuedBooksMutation, // Changed Query -> Mutation
    useDeleteIssuedBooksMutation, // Changed Query -> Mutation

    // 8. Library Books
    useGetLibraryBooksQuery,
    useAddLibraryBooksMutation,   // Changed Query -> Mutation
    useUpdateLibraryBooksMutation, // Changed Query -> Mutation
    useDeleteLibraryBooksMutation, // Changed Query -> Mutation

    // 9. Notices
    useGetNoticesQuery,
    useAddNoticesMutation,        // Changed Query -> Mutation
    useUpdateNoticesMutation,     // Changed Query -> Mutation
    useDeleteNoticesMutation,     // Changed Query -> Mutation

    // 10. Parents
    useGetParentsQuery,
    useAddParentsMutation,        // Changed Query -> Mutation
    useUpdateParentsMutation,     // Changed Query -> Mutation
    useDeleteParentsMutation,     // Changed Query -> Mutation

    // 11. Results
    useGetResultsQuery,
    useAddResultsMutation,        // Changed Query -> Mutation
    useUpdateResultsMutation,     // Changed Query -> Mutation
    useDeleteResultsMutation,     // Changed Query -> Mutation

    // 12. Routines
    useGetRoutinesQuery,
    useAddRoutinesMutation,       // Changed Query -> Mutation
    useUpdateRoutinesMutation,    // Changed Query -> Mutation
    useDeleteRoutinesMutation,    // Changed Query -> Mutation

    // 13. Student-Parent Relations
    useGetStudentParentLinksQuery,
    useAddStudentParentLinksMutation,
    useUpdateStudentParentLinksMutation,
    useDeleteStudentParentLinksMutation,

    // 14. Students
    useGetStudentsQuery,
    useAddStudentsMutation,
    useUpdateStudentsMutation,
    useDeleteStudentsMutation,

    // 15. Subjects
    useGetSubjectsQuery,
    useAddSubjectsMutation,
    useUpdateSubjectsMutation,
    useDeleteSubjectsMutation,

    // 16. Teachers
    useGetTeachersQuery,
    useAddTeacherMutation,
    useUpdateTeacherMutation,
    useDeleteTeacherMutation,

    // 17. Users Control
    useGetUsersQuery,
    useAddUsersMutation,          // ✅ Fixed Typo Mutaion -> Mutation
    useUpdateUsersMutation,       // ✅ Fixed Typo Mutaion -> Mutation
    useDeleteUsersMutation,       // ✅ Fixed Typo Mutaion -> Mutation
} = schoolApi;