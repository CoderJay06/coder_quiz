const BASE_URL = "http://localhost:3000" // Set global variable for home url
const USERS_URL = `${BASE_URL}/api/v1/users` // Set url global variable for users
const SESSIONS_URL = `${BASE_URL}/sessions` // Set url global variable for login
const CATEGORIES_URL = `${BASE_URL}/api/v1/categories` // Set url global variable for fetching categorues
const QUIZZES_URL = `${BASE_URL}/api/v1/quizzes`
const signupForm = document.querySelector("#signup-form")
const loginForm = document.querySelector("#login-form")
    // const signupButton = document.querySelector(".signup-btn")

document.addEventListener("DOMContentLoaded", () => {
    signupForm.addEventListener("submit", signupUser)
    loginForm.addEventListener("submit", loginUser)
    renderCategorySelector()
        //  renderQuiz()
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
    createCategorySelector()
    fetchCategories()
}

// const renderQuiz = () => {
//     fetchQuiz()
//     showQuiz()
// }

const createCategorySelector = () => {
    const categoryContainer = document.querySelector("#categories-container")
    const categorySelector = document.createElement("select")
    categorySelector.name = "categories"
    categorySelector.id = "categories"
    categorySelector.innerHTML += `<option value="">category</option>`
    categoryContainer.appendChild(categorySelector)
}

// const handleCategorySelector = () => {
//     //  const categorySelector = document.getElementById("categories")
//     //  categorySelector.addEventListener("click", handleCategoriesClick)
//     fetchCategories()
// }

// const handleCategoriesClick = (event) => {
//     //  debugger
//     event.preventDefault()
//         //  fetchCategories(event)
// }

const fetchCategories = () => {
    const categorySelector = document.getElementById("categories")
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
            // debugger
            if (categorySelector.childElementCount < categoriesData.data.length) {
                categoriesData.data.forEach(category => {
                    //   debugger
                    let option = new Category(
                        category, category.attributes, category.relationships)
                    categorySelector.innerHTML += option.renderCategory()
                        //   debugger
                        //   option.addEventListener("click", handleCategoriesClick)
                })
            }
        })
    attatchListenerToCategories(categorySelector)
}

const attatchListenerToCategories = (categories) => {
    categories.addEventListener("change", handleCategoryClick)
}

const handleCategoryClick = (event) => {
    const selectedCategory = event.target.options[event.target.selectedIndex]
    const categoryId = Number(selectedCategory.dataset.id)
    const category = Category.all.find(categoryObj => categoryObj.id === categoryId)
    const quizContainer = document.getElementById("quizzes-container")
    if (category) {
        quizContainer.innerHTML = category.getQuizzes()
        fetchQuiz()
    }
}

const fetchQuiz = () => {
    //  const quizButton = document.querySelector(".quiz-btn")
    fetch(QUIZZES_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(quizData => {
            quizData.forEach(quiz => {
                new Quiz(quiz)
            })
        })
    showQuiz()
}

const showQuiz = () => {
    const quizButton = document.getElementById("quizzes-container")
    quizButton.addEventListener("click", handleQuizBtnClick)
}

const handleQuizBtnClick = (event) => {
    event.preventDefault()
    const quizBtnTag = document.querySelector(`.quiz-${event.target.dataset.id}-btn`)
    const quizId = Number(event.target.dataset.id)
    if (quizId === Number(quizBtnTag.dataset.id)) {
        const quizContainer = document.getElementById("show-quiz")
            // iterate over quizzes and find by id
        const currentQuiz = Quiz.all.reduce((result, currentQuiz) => {
            if (currentQuiz.findById(quizId)) {
                result = currentQuiz
            }
            return result
        })
        quizContainer.innerHTML += currentQuiz.showQuiz()
    }
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
        //  debugger
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
        .then(userObj => {
            // debugger
            new User({
                id: Number(userObj.data.id),
                email: userObj.data.attributes.email,
                username: userObj.data.attributes.username
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