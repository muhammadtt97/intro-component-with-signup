const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const eyeIcon = document.getElementById('eye-icon')

console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value.trim();
  const lName = lastName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  console.log(fName, lName, emailVal, passwordVal);

  let isValid = true;
  
  // Check first name
  if (fName === '') {
    showError(firstName, 'First Name cannot be empty');
    isValid = false;
  } else {
    removeError(firstName);
  }
  // Check last name

  if (lName === '') {
    showError(lastName, 'Last Name cannot be empty');
    isValid = false;
  } else {
    removeError(lastName);
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    showError(email, 'Looks like this is not an email');
    isValid = false;
  } else {
    removeError(email);
  }

  // Check password

  if (passwordVal === '') {
    showError(password, 'Password cannot be empty');
    isValid = false;
  } else {
    removeError(password);
  }

  if (isValid) {
    console.log('Form submitted successfully')
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function showError(input, message) {
  input.classList.add('error');
  let errorElement = input.nextElementSibling;
  if (!errorElement || !errorElement.classList.contains('error-message')) {
    errorElement = document.createElement('div');
    errorElement.classList.add('error-message');
    input.parentNode.insertBefore(errorElement, input.nextSibling);
  }
  errorElement.textContent = message;

  if (input.classList.contains('email')) {
    input.value = 'email@example.com';
    input.style.color = 'var(--red)';
  }
}

function removeError(input) {
  input.classList.remove('error');
  const errorElement = input.nextElementSibling;
  if (errorElement && errorElement.classList.contains('error-message')) {
    errorElement.remove();
  }
}

eyeIcon.addEventListener('click', () => {
  if (password.type === 'password') {
    password.type = 'text';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    password.type = 'password';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
});