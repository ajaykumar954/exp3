k
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const f = id => document.getElementById(id).value.trim();

  const phone = f('phone'),
        email = f('email'),
        emailConfirm = f('emailConfirm'),
        gender = f('gender'),
        password = f('password');

  let valid = true;

  if (!/^\d{10}$/.test(phone)) {
    alert("Invalid phone number. It should be exactly 10 digits.");
    valid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Invalid email.");
    valid = false;
  }

  if (email !== emailConfirm) {
    alert("Email and confirmation do not match.");
    valid = false;
  }

  if (!gender) {
    alert("Select a gender.");
    valid = false;
  }

  if (!/(?=.*[!@#$%^&*])/.test(password) || password.length < 8) {
    alert("Password must be at least 8 characters long and contain at least one special character.");
    valid = false;
  }

  if (!valid) return;

  alert("Registration successful!");
  this.reset();
});
