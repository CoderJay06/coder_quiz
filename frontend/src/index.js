const BASE_URL = "http://localhost:3000" // Set global variable for home url
const USERS_URL = `${BASE_URL}/api/v1/users` // Set url global variable for users
const SESSIONS_URL = `${BASE_URL}/sessions` // Set url global variable for login
const signupForm = document.querySelector("#signup-form")
const loginForm = document.querySelector("#login-form")
    // const signupButton = document.querySelector(".signup-btn")

document.addEventListener("DOMContentLoaded", () => {
    signupForm.addEventListener("submit", signupUser)
    loginForm.addEventListener("submit", loginUser)
});


const renderSignupForm = () => {
    loginForm.hidden = true
    signupForm.hidden = false
}

const renderLoginForm = () => {
    signupForm.hidden = true
    loginForm.hidden = false
}

const handleLogout = () => {
    logout()
}

const logout = () => {
    // Logout the current user
    fetch(SESSIONS_URL, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }).then(response => response.json())
}

const signupUser = (event) => {
    event.preventDefault()
    const emailInput = document.querySelector(".signup-email-input")
    const usernameInput = document.querySelector(".signup-username-input")
    const passwordInput = document.querySelector(".signup-password-input")
    const passwordConfirmation = document.querySelector(".signup-password-confirmation")

    const newUserData = {
        user: {
            email: emailInput.value,
            username: usernameInput.value,
            password: passwordInput.value,
            password_confirmation: passwordConfirmation.value
        }
    }; // {user: {username: '', password: ''}}
    // Make config object
    const userConfigObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newUserData)
    };
    //  debugger
    // Send fetch request to users url
    fetch(USERS_URL, userConfigObj)
        .then(response => response.json())
        .then(obj => {
            // debugger
            let user = new User({
                id: obj.id,
                email: obj.email,
                username: obj.username
            })
        })
}

const loginUser = (event) => {
    event.preventDefault()
    const usernameInput = document.querySelector(".login-username-input")
    const passwordInput = document.querySelector(".login-password-input")
    const userData = {
        username: usernameInput.value,
        password: passwordInput.value
    };
    //  debugger
    // Make config object
    let userConfigObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    };
    //  debugger
    // Send fetch request to login url
    fetch(SESSIONS_URL, userConfigObj)
        .then(response => response.json())
}

// Make function for rendering the signup form
// const signupForm = () => {
//     return document.querySelector('#signup-form')
// }