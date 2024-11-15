document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    // Validate form fields
    if (!username || !email || !password || !confirmPassword) {
        errorMessage.textContent = 'All fields are required.';
        return; // Stop if any field is empty
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    // Check if a role (Landlord or Tenant) is selected
    const role = document.querySelector('input[name="role"]:checked');
    if (!role) {
        errorMessage.textContent = 'Please select a role (Landlord or Tenant).';
        return; // Stop further execution if no role is selected
    }

    // Clear error messages if everything is valid
    errorMessage.textContent = '';
    alert('Registration successful!'); // Handle registration logic here (e.g., send data to the server)
});

// Show/Hide Password
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const confirmPasswordInput = document.getElementById('confirmPassword');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

toggleConfirmPassword.addEventListener('click', function () {
    const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPasswordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});
