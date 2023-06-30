//This document validates the form on the blog.html page

//Input field variables
const emailField = $('#email');
const fName = $('#fname');
const lName = $('#lname');
const submit = $('.send-btn');
const cancel = $('.close-btn');
//Form variable
const form = $('#subscriber-form')

//Handle form -  If form is valid, submit and close the form. If form is invalid, prevent default action and do not close the form.
form.submit(function(event){
  if (formIsValid()){
    form.addClass('hidden');
  } else {
    event.preventDefault();
  }
})

//Function for formIsValid - if each field is valid, call its corresponding function and return the variables.
function formIsValid(){
  const emailIsValid = emailFieldIsValid();
  const firstNameIsValid = firstNameFieldIsValid();
  const lastNameIsValid = lastNameFieldIsValid();
  return emailIsValid && firstNameIsValid && lastNameIsValid;
}

//Function to determine if email is valid
function emailFieldIsValid(){
  const email = emailField.val();
  if (emailIsValid(email)){
    return true;
  } else {
    emailField.addClass('error');
    $('#emailError').text('Please input a valid email address');
    return false;
  }
}

//Conditions for email to be valid
function emailIsValid(str){
  if (str.length === 0){
    return false;
  }
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(str);
}

//Function to determine if first name is valid
function firstNameFieldIsValid(){
  const firstName = fName.val();
  if (nameIsValid(firstName)){
    return true;
  } else {
    fName.addClass('error');
    $('#fNameError').text('Please input a valid name');
    return false;
  }
}

// Function to determine if last name is valid
function lastNameFieldIsValid(){
  const lastName = lName.val();
  if (nameIsValid(lastName)){
    return true;
  } else {
    fName.addClass('error');
    $('#lNameError').text('Please input a valid name');
    return false;
  }
}

// Conditions for name to be valid
function nameIsValid(str){
  return str.length !== 0;
}

//Remove highlight errors on focus - email
emailField.focus(function(){
  emailField.removeClass('error');
})

//Remove highlight errors on focus- first name
fName.focus(function(){
  fName.removeClass('error');
})

//Remove highlight errors on focus- last name
lName.focus(function(){
  lName.removeClass('error');
})

// Close form function
function closeForm(){
  $('#subscriber-form').addClass('hidden')
}
