function generatePassword(length: number): string {
    const charset: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let password: string = "";
    for (let i = 0; i < length; i++) {
        const randomIndex: number = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function getPasswordStrength(password: string): number {
    let strength: number = 0;

    // Check length
    if (password.length >= 8) {
        strength += 1;
    }
    if (password.length >= 12) {
        strength += 1;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
        strength += 1;
    }

    // Check for numbers
    if (/\d/.test(password)) {
        strength += 1;
    }

    // Check for special characters
    if (/[^A-Za-z0-9]/.test(password)) {
        strength += 1;
    }

    return strength;
}

// Example usage:
const passwordLength: number = 12;
const newPassword: string = generatePassword(passwordLength);
console.log("Generated Password:", newPassword);
console.log("Password Strength:", getPasswordStrength(newPassword));
