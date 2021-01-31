const BASE_URL = "http://localhost:3000" // Set global variable for home url
const USERS_URL = `${BASE_URL}/api/v1/users` // Set url global variable for users


document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector("#signup-form")

    signupForm.addEventListener("submit", signupUser)
});

const signupUser = (event) => {
    event.preventDefault()
    const emailInput = document.querySelector(".email-input")
    const usernameInput = document.querySelector(".username-input")
    const passwordInput = document.querySelector(".password-input")
    const newUserData = new User({
        email: emailInput.value,
        username: usernameInput.value,
        password: passwordInput.value
    });
    debugger
    // Make config object
    let userConfigObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application-json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newUserData)
    };
    // Send fetch request to users url
}

// Make function for rendering the signup form
// const signupForm = () => {
//     return document.querySelector('#signup-form')
// }