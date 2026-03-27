(() => {
    // Type Aliases
    type Role = 'admin' | 'guest' | 'teacher' | 'student';

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: Role; 
        permissions: string[];
    }

    // Assigning a role
    let userRole: Role = 'admin';
    userRole = 'teacher'; // Allowed

    // Using the type alias in a function
    function access(role: Role) {
        console.log(`Access granted for ${role}`);
    }

    access(userRole); // Access granted for teacher

    // Creating a user object
    const user: User = {
        name: 'Alice',
        age: 30,
        role: 'admin',
        permissions: ['read', 'write', 'delete']
    };

    console.log(user);
})();