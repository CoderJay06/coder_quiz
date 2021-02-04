const BASE_URL = "http://localhost:3000" // Set global variable for home url
const USERS_URL = `${BASE_URL}/api/v1/users` // Set url global variable for users
const SESSIONS_URL = `${BASE_URL}/sessions` // Set url global variable for login
const CATEGORIES_URL = `${BASE_URL}/api/v1/categories` // Set url global variable for fetching categorues
const signupForm = document.querySelector("#signup-form")
const loginForm = document.querySelector("#login-form")
    // const signupButton = document.querySelector(".signup-btn")

document.addEventListener("DOMContentLoaded", () => {
    signupForm.addEventListener("submit", signupUser)
    loginForm.addEventListener("submit", loginUser)
    renderCategorySelector()
});


const renderSignupForm = () => {
    loginForm.hidden = true
    signupForm.hidden = false
}

const renderLoginForm = () => {
    signupForm.hidden = true
    loginForm.hidden = false
}

// const handleCategorySelect = (event) => {
//     //  debugger
//     event.preventDefault()
//     renderCategories()
// }

const renderCategorySelector = () => {
    //  createCategorySelector()
    handleCategorySelector()
}

// const createCategorySelector = () => {
//     const categoryContainer = document.querySelector("#categories-container")
//     const categorySelector = document.createElement("select")
//     categorySelector.name = "categories"
//     categorySelector.id = "categories"
//     categoryContainer.appendChild(categorySelector)
// }

const handleCategorySelector = () => {
    const categoryContainer = document.querySelector("#categories-container")
    const categorySelector = document.createElement("select")
    categorySelector.name = "categories"
    categorySelector.id = "categories"
    categoryContainer.appendChild(categorySelector)
    categorySelector.addEventListener("click", handleCategoryClick)
}

const handleCategoryClick = (event) => {
    //  debugger
    event.preventDefault()
    fetchCategories()
}

const fetchCategories = () => {
    const categorySelector = document.querySelector("#categories")
        // Fetch and load all categories
    fetch(CATEGORIES_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(categoriesData => {
            if (categorySelector.childElementCount < categoriesData.length) {
                categoriesData.forEach(category => {
                    //  debugger

                    let option = new Category(category)
                    categorySelector.innerHTML += option.renderCategory()
                })
            }
        })
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
    })
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