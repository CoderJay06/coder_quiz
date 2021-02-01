const BASE_URL = "http://localhost:3000" // Set global variable for home url
const USERS_URL = `${BASE_URL}/api/v1/users` // Set url global variable for users
const signupForm = document.querySelector("#signup-form")
    // const signupButton = document.querySelector(".signup-btn")

document.addEventListener("DOMContentLoaded", () => {
    //  const signupForm = document.querySelector("#signup-form")
    //  const signupLink = document.querySelector(".signup-link")
    //  debugger
    //  signupForm.hidden = true
    //  signupLink.addEventListener("click", renderSignupForm(signupForm))
    signupForm.addEventListener("submit", signupUser)
});

const renderSignupForm = () => {
    signupForm.hidden = false
}

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
    // Make config object
    let userConfigObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newUserData)
    };
    // Send fetch request to users url
    fetch(USERS_URL, userConfigObj)
        .then(response => response.json())
}

// Make function for rendering the signup form
// const signupForm = () => {
//     return document.querySelector('#signup-form')
// }