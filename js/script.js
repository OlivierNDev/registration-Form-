function validate() {
    let valid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.remove());

    // Email Validation
    const email = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value.trim()) {
        showError(email, "Please enter an email address.");
        valid = false;
    } else if (!emailPattern.test(email.value)) {
        showError(email, "Please enter a valid email address.");
        valid = false;
    }

    // Username Validation
    const username = document.getElementById('login');
    if (!username.value.trim()) {
        showError(username, "Username must be non-empty.");
        valid = false;
    } else if (username.value.length >= 30) {
        showError(username, "Username must be less than 30 characters.");
        valid = false;
    } else {
        username.value = username.value.toLowerCase(); // Convert to lowercase if valid
    }

    // Password Validation
    const password = document.getElementById('pass');
    const confirmPassword = document.getElementById('pass2');
    if (!password.value.trim()) {
        showError(password, "Password is required.");
        valid = false;
    } else if (password.value.length < 8) {
        showError(password, "Password must be at least 8 characters long.");
        valid = false;
    }

    if (!confirmPassword.value.trim()) {
        showError(confirmPassword, "Please retype the password.");
        valid = false;
    } else if (password.value !== confirmPassword.value) {
        showError(confirmPassword, "Passwords must match.");
        valid = false;
    }

    // Terms and Conditions Validation
    const terms = document.getElementById('terms');
    if (!terms.checked) {
        showError(terms, "You must agree to the terms and conditions.");
        valid = false;
    }

    return valid;
}

// Function to show error messages inline under invalid fields
function showError(field, message) {
    const error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.innerText = message;
    field.parentNode.appendChild(error);

    // Add red border styling to highlight invalid fields
    field.style.border = '2px solid red';
}
