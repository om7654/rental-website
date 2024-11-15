document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Check if username and password are entered
    if (!username || !password) {
        errorMessage.textContent = 'Please enter both username and password.';
        return; // Stop further execution if fields are empty
    }

    // Check if a role (Landlord or Tenant) is selected
    const role = document.querySelector('input[name="role"]:checked');
    if (!role) {
        errorMessage.textContent = 'Please select a role (Landlord or Tenant).';
        return; // Stop further execution if no role is selected
    }

    // Clear error messages if everything is valid
    errorMessage.textContent = '';
    alert('Login successful!'); // Handle login logic here (e.g., send data to the server)
});

// Show/Hide Password
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

// Google Login Placeholder
document.getElementById('googleLogin').addEventListener('click', function() {
    alert('Redirecting to Google login...');
    // Here, you would redirect to the Google OAuth login page.
});
