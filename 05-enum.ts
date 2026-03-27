(() => {
    enum Role {
        SuperAdmin = 'SuperAdmin',
        ProgramHead = 'ProgramHead',
        Teacher = 'Teacher',
        Student = 'Student',
    }

    let userRole: Role = Role.ProgramHead;
    console.log(userRole); // 'ProgramHead'
})();