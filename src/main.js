function generatePassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
function getPasswordStrength(password) {
    var strength = 0;
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
var passwordLength = 12;
var newPassword = generatePassword(passwordLength);
console.log("Generated Password:", newPassword);
console.log("Password Strength:", getPasswordStrength(newPassword));
