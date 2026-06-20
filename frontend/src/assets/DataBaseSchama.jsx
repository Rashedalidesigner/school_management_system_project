export const DatabaseSchemas = {
    users: {
        columns: [
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
            { key: 'phone', label: 'Phone' },
            { key: 'role', label: 'Role' },
        ],
        formFields: [
            { name: 'name', label: 'Full Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email', required: true },
            { name: 'phone', label: 'Phone Number' },
            { name: 'password', label: 'Password', type: 'password', required: true },
            {
                name: 'role', label: 'Role', type: 'select', required: true, options: ['admin', 'teacher', 'student', 'parent', 'accountant', 'librarian']
            },
            { name: 'profile_image', label: 'Profile Image URL' },
            { name: 'is_active', label: 'Is Active', type: 'checkbox' },
        ],
        initialFormState: { id: '', name: '', email: '', phone: '', password: '', role: 'student', profile_image: '', is_active: true }
    },

    teacher: {
        columns: [
            { key: 'name', label: 'Teacher Name' },
            { key: 'email', label: 'Email Address' },
            { key: 'phone', label: 'Phone' },
            { key: 'subject', label: 'Designation' },
            { key: 'salary', label: 'Salary' },
            { key: 'join_date', label: 'Joining Date' },
        ],
        formFields: [
            { name: 'name', label: 'Full Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email', required: true },
            { name: 'phone', label: 'Phone Number', required: true },
            { name: 'subject', label: 'Designation (e.g. Lecturer)', required: true },
            { name: 'salary', type: 'number', label: 'Salary', required: true },
            { name: 'join_date', type: 'date', label: 'Joining Date', required: true },
        ],
        initialFormState: { id: '', name: '', email: '', phone: '', subject: '', salary: '', join_date: '' }
    },

    classes: {
        columns: [
            { key: 'class_name', label: 'Class Name' },
            { key: 'section_name', label: 'Section' },
        ],
        formFields: [
            { name: 'class_name', label: 'Class Name', required: true },
            { name: 'section_name', label: 'Section Name (e.g., A, B)' },
        ],
        initialFormState: { id: '', class_name: '', section_name: '' }
    },

    student: {
        columns: [
            { key: 'name', label: 'Student Name' },
            { key: 'email', label: 'Email' },
            { key: 'class_id', label: 'Class ID' },
            { key: 'roll_number', label: 'Roll Number' },
            { key: 'admission_date', label: 'Admission Date' },
        ],
        formFields: [
            { name: 'name', label: 'Full Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email' },
            { name: 'phone', label: 'Phone' },
            { name: 'date_of_birth', label: 'Date of Birth', type: 'date' },
            { name: 'address', label: 'Address', type: 'textarea' },
            { name: 'class_id', label: 'Class ID', type: 'number' },
            { name: 'section', label: 'Section' },
            { name: 'roll_number', label: 'Roll Number', type: 'number' },
            { name: 'admission_date', label: 'Admission Date', type: 'date' },
        ],
        initialFormState: { id: '', name: '', email: '', phone: '', date_of_birth: '', address: '', class_id: '', section: '', roll_number: '', admission_date: '' }
    },

    subject: {
        columns: [
            { key: 'class_id', label: 'Class ID' },
            { key: 'subject_name', label: 'Subjects' },
        ],
        formFields: [
            { name: 'class_id', label: 'Class ID', type: 'number', required: true },
            { name: 'subject_name', label: 'Subject Names (Comma separated)', required: true },
        ],
        initialFormState: { id: '', class_id: '', subject_name: '' }
    },

    attendance: {
        columns: [
            { key: 'class_id', label: 'Class ID' },
            { key: 'student_id', label: 'Student ID' },
            { key: 'attendance_date', label: 'Date' },
            { key: 'status', label: 'Status' },
        ],
        formFields: [
            { name: 'class_id', label: 'Class ID', type: 'number', required: true },
            { name: 'student_id', label: 'Student ID', type: 'number', required: true },
            { name: 'attendance_date', label: 'Attendance Date', type: 'date', required: true },
            { name: 'status', label: 'Status (e.g., Present, Absent)', required: true },
        ],
        initialFormState: { id: '', class_id: '', student_id: '', attendance_date: '', status: '' }
    },

    exams: {
        columns: [
            { key: 'exam_name', label: 'Exam Title' },
            { key: 'exam_date', label: 'Exam Date' },
            { key: 'class_id', label: 'Class ID' },
        ],
        formFields: [
            { name: 'exam_name', label: 'Exam Name', required: true },
            { name: 'exam_date', label: 'Exam Date', type: 'date' },
            { name: 'class_id', label: 'Target Class ID', type: 'number' },
        ],
        initialFormState: { id: '', exam_name: '', exam_date: '', class_id: '' }
    },

    result: {
        columns: [
            { key: 'student_id', label: 'Student ID' },
            { key: 'exam_id', label: 'Exam ID' },
            { key: 'subject_mark', label: 'Subject Marks' },
            { key: 'marks', label: 'Total Marks' },
            { key: 'grade', label: 'Grade' },
        ],
        formFields: [
            { name: 'student_id', label: 'Student ID', type: 'number', required: true },
            { name: 'exam_id', label: 'Exam ID', type: 'number', required: true },
            { name: 'subject_mark', label: 'Subject Marks (JSON String)', type: 'textarea' },
            { name: 'marks', label: 'Total Numeric Marks', type: 'number' },
            { name: 'grade', label: 'Final Grade' },
        ],
        initialFormState: { id: '', student_id: '', exam_id: '', subject_mark: '{}', marks: '', grade: '' }
    },

    assignments: {
        columns: [
            { key: 'title', label: 'Assignment Title' },
            { key: 'class_id', label: 'Class ID' },
            { key: 'teacher_id', label: 'Teacher ID' },
            { key: 'due_date', label: 'Due Date' },
        ],
        formFields: [
            { name: 'title', label: 'Assignment Title', required: true },
            { name: 'description', label: 'Description', type: 'textarea' },
            { name: 'class_id', label: 'Class ID', type: 'number' },
            { name: 'subject_id', label: 'Subject ID', type: 'number' },
            { name: 'teacher_id', label: 'Assigned Teacher ID', type: 'number' },
            { name: 'due_date', label: 'Submission Due Date', type: 'date' },
        ],
        initialFormState: { id: '', title: '', description: '', class_id: '', subject_id: '', teacher_id: '', due_date: '' }
    },

    assignment_submissions: {
        columns: [
            { key: 'assignment_id', label: 'Assignment ID' },
            { key: 'student_id', label: 'Student ID' },
            { key: 'submission_file_link', label: 'Attachment URL' },
        ],
        formFields: [
            { name: 'assignment_id', label: 'Assignment ID', type: 'number', required: true },
            { name: 'student_id', label: 'Student ID', type: 'number', required: true },
            { name: 'submission_file_link', label: 'File Attachment URL Link' },
        ],
        initialFormState: { id: '', assignment_id: '', student_id: '', submission_file_link: '' }
    },

    fees: {
        columns: [
            { key: 'student_id', label: 'Student ID' },
            { key: 'amount', label: 'Amount Due' },
            { key: 'fees_types', label: 'Fee Category' },
            { key: 'payment_status', label: 'Status' },
        ],
        formFields: [
            { name: 'student_id', label: 'Student ID', type: 'number', required: true },
            { name: 'amount', label: 'Invoice Amount', type: 'number', required: true },
            { name: 'fees_types', label: 'Fee Type (e.g., Tuition, Exam)' },
            { name: 'payment_status', label: 'Payment Status (e.g., Paid, Pending)' },
            { name: 'payment_date', label: 'Settlement Date', type: 'date' },
        ],
        initialFormState: { id: '', student_id: '', amount: '', fees_types: '', payment_status: '', payment_date: '' }
    },

    parents: {
        columns: [
            { key: 'name', label: 'Parent Name' },
            { key: 'email', label: 'Email' },
            { key: 'phone', label: 'Contact Phone' },
        ],
        formFields: [
            { name: 'name', label: 'Guardian / Parent Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email' },
            { name: 'phone', label: 'Phone Number' },
            { name: 'address', label: 'Residential Address', type: 'textarea' },
        ],
        initialFormState: { id: '', name: '', email: '', phone: '', address: '' }
    },

    student_parents: {
        columns: [
            { key: 'student_id', label: 'Student ID' },
            { key: 'parent_id', label: 'Parent ID' },
            { key: 'relation', label: 'Relationship Status' },
        ],
        formFields: [
            { name: 'student_id', label: 'Student ID', type: 'number', required: true },
            { name: 'parent_id', label: 'Parent ID', type: 'number', required: true },
            { name: 'relation', label: 'Relation (e.g. Mother, Father, Guardian)' },
        ],
        initialFormState: { id: '', student_id: '', parent_id: '', relation: '' }
    },

    notices: {
        columns: [
            { key: 'title', label: 'Notice Header' },
            { key: 'publish_date', label: 'Release Date' },
        ],
        formFields: [
            { name: 'title', label: 'Notice Bulletin Title', required: true },
            { name: 'description', label: 'Notice Content Description', type: 'textarea' },
            { name: 'publish_date', label: 'Publish Date', type: 'date' },
        ],
        initialFormState: { id: '', title: '', description: '', publish_date: '' }
    },

    library_books: {
        columns: [
            { key: 'books_name', label: 'Book Title' },
            { key: 'author', label: 'Author Name' },
            { key: 'quantity', label: 'In Stock Count' },
        ],
        formFields: [
            { name: 'books_name', label: 'Book Title Name', required: true },
            { name: 'author', label: 'Author' },
            { name: 'quantity', label: 'Stock Volume (Quantity)', type: 'number' },
        ],
        initialFormState: { id: '', books_name: '', author: '', quantity: 0 }
    },

    issued_books: {
        columns: [
            { key: 'student_id', label: 'Student ID' },
            { key: 'book_id', label: 'Book Asset ID' },
            { key: 'issue_date', label: 'Checkout Date' },
            { key: 'return_date', label: 'Expected Return' },
        ],
        formFields: [
            { name: 'student_id', label: 'Student Borrower ID', type: 'number', required: true },
            { name: 'book_id', label: 'Library Book ID', type: 'number', required: true },
            { name: 'issue_date', label: 'Issue Date', type: 'date', required: true },
            { name: 'return_date', label: 'Target Return Date', type: 'date' },
        ],
        initialFormState: { id: '', student_id: '', book_id: '', issue_date: '', return_date: '' }
    },

    routines: {
        columns: [
            { key: 'class_id', label: 'Class ID' },
            { key: 'subject_id', label: 'Subject ID' },
            { key: 'day', label: 'Weekday' },
            { key: 'start_time', label: 'Start Time' },
            { key: 'end_time', label: 'End Time' },
        ],
        formFields: [
            { name: 'class_id', label: 'Target Class ID', type: 'number', required: true },
            { name: 'subject_id', label: 'Target Subject ID', type: 'number', required: true },
            { name: 'teacher_id', label: 'Instructor Teacher ID', type: 'number', required: true },
            { name: 'day', label: 'Day of Week', required: true },
            { name: 'start_time', label: 'Start Time (HH:MM)', required: true },
            { name: 'end_time', label: 'End Time (HH:MM)', required: true },
        ],
        initialFormState: { id: '', class_id: '', subject_id: '', teacher_id: '', day: '', start_time: '', end_time: '' }
    }
};