//This document validates the form on the blog.html page
//Input field variables
const emailField = document.getElementById('email');
const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const submit = document.getElementsByClassName('send-btn');
const cancel = document.getElementsByClassName('close-btn');

//Form variable
const form = document.getElementById('subscriber-form');

//Handle form -  If form is valid, submit and close the form. If form is invalid, prevent default action and do not close the form.
form.addEventListener('submit', function(event){
  if (formIsValid()){
    form.classList.add('hidden');
  } else {
    event.preventDefault();
  }
});

//Function for formIsValid - if each field is valid, call its corresponding function and return the variables.
function formIsValid(){
  const emailIsValid = emailFieldIsValid();
  const firstNameIsValid = firstNameFieldIsValid();
  const lastNameIsValid = lastNameFieldIsValid();
  return emailIsValid && firstNameIsValid && lastNameIsValid;
}

//Function to determine if first name is valid
function firstNameFieldIsValid(){
  //firstName is equal to the fName text input value.
  const firstName = fName.value;
  //if the firstName matches the requirements of nameIsValid() then return true, otherwise add error class to the fName field.
  if (nameIsValid(firstName)){
    return true;
  } else {
    fName.classList.add('error');
    document.getElementById('fNameError').innerText = 'Please input a valid name';
    return false;
  }
}

//Function to determine if last name is valid
function lastNameFieldIsValid(){
  //lastName is equal to the lName text input value.
  const lastName = lName.value;
  //of the lastName matches the requirements of nameIsValid() then return true, otherwise add error class to the lName field.
  if (nameIsValid(lastName)){
    return true;
  } else {
    fName.classList.add('error');
    document.getElementById('lNameError').innerText = 'Please input a valid name';
    return false;
  }
}

//Parameters for name to be valid - it is valid unless the string length is equal to zero
function nameIsValid(str){
  return str.length !== 0;
}

//Function to determine if email is valid
function emailFieldIsValid(){
  // email is equal to the emailField text input value
  const email = emailField.value
  // If the email matches the requirements of emailisValid() then return true, otherwise add error class to the emailField field
  if (emailIsValid(email)){
    return true;
  } else {
    emailField.classList.add('error');
    document.getElementById('emailError').innerText = 'Please input a valid email address';
    return false;
  }
}

//Parameters for email to be valid - it is valid if it is equal to a string and matches the regex pattern, otherwise it is not valid if the string equals zero.
function emailIsValid(str){
  if (str.length === 0){
    return false;
  }
  // Regex for const emailPattern copied directly from zparcha http://zparacha.com/validate-email-address-using-javascript-regular-expression.
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(str);
}

//Function to remove emailField error classList on focus
emailField.addEventListener('focus', function(){
  emailField.classList.remove('error');
});

//Function to remove fName error classList on focus
fName.addEventListener('focus', function(){
  fName.classList.remove('error');
});

//Function to remove lName error classList on focus
lName.addEventListener('focus', function(){
  lName.classList.remove('error');
});

//Function to close form
function closeForm(){
  document.getElementById('subscriber-form').classList.add('hidden');
}
