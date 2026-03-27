(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'admin' | 'guest' | 'teacher' | 'student' = 'admin';

    userRole = 'guest';
    // userRole = 'superadmin'; //  Error: Type '"superadmin"' is not assignable

    function access(role: 'admin' | 'guest' | 'teacher' | 'student') {
        console.log(`Access granted for ${role}`);
    }

    access(userRole); // Access granted for guest
})();