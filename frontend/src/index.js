const BASE_URL = "http://localhost:3000" // Set global variable for home url
const USERS_URL = `${BASE_URL}/api/v1/users` // Set url global variable for users


document.addEventListener("DOMContentLoaded", () => {
    debugger
});

// Make function for rendering the signup form
const renderSignupForm = () => {
    return document.querySelector('#signup-form')
}