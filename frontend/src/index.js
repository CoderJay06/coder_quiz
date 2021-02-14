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
    // Fetch and load all categories
    fetch(CATEGORIES_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(response => checkForErrors(response))
        .then(categoriesData => {
            handleCategoryData(categoriesData)
        })
}

const handleCategoryData = (categoriesData) => {
    const categorySelector = document.getElementById("categories")
    if (categorySelector.childElementCount < categoriesData.data.length) {
        categoriesData.data.forEach(category => {
            let option = createCategory(category, categoriesData)
            categorySelector.innerHTML += option.renderCategory()
        })
    }
    attatchListenerToCategories(categorySelector)
}

const createCategory = (category, categoriesData) => {
    return new Category(
        category, category.attributes,
        category.relationships,
        categoriesData.included
    )
}

const attatchListenerToCategories = (categories) => {
    categories.addEventListener("change", handleCategoryClick)
}

const handleCategoryClick = (event) => {
    const selectedCategory = event.target.options[event.target.selectedIndex]
    const categoryId = Number(selectedCategory.dataset.id)
    const category = Category.all.find(categoryObj => categoryObj.id === categoryId)
    const quizContainer = document.getElementById("quizzes-container")
        //  debugger
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
        .then(response => checkForErrors(response))
        .then(quizData => {
            storeQuizzes(quizData)
        })
    attatchQuizBtnListener()
}

const storeQuizzes = (quizData) => {
    quizData.data.forEach(quiz => {
        new Quiz(quiz, quiz.attributes)
    })
}

const attatchQuizBtnListener = () => {
    const quizButton = document.getElementById("quizzes-container")
    quizButton.addEventListener("click", handleQuizBtnClick)
}

const handleQuizBtnClick = (event) => {
    event.preventDefault()
        //  const quizBtnTag = document.querySelector(`.quiz-${event.target.dataset.id}-btn`)
    if (event.target.className === "quiz-btn") {
        const quizId = Number(event.target.dataset.id)
        const quizContainer = document.getElementById("show-quiz")
            // iterate over quizzes and find by id
        const quiz = Quiz.all.reduce((result, currentQuiz) => {
            if (currentQuiz.findById(quizId)) {
                result = currentQuiz
            }
            return result
        })
        quizContainer.innerHTML += quiz.showQuiz()
            //   quizContainer.innerHTML += quiz.showQuestions()
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
    const emailInput = event.target.children[2]
    const usernameInput = event.target.children[5]
    const passwordInput = event.target.children[8]
    const passwordConfirmationInput = event.target.children[11]

    const newUserData = {
        user: {
            email: emailInput.value,
            username: usernameInput.value,
            password: passwordInput.value,
            password_confirmation: passwordConfirmationInput.value
        }
    };
    if (signupFormFilledOut(newUserData)) {
        fetchNewUser(newUserData)
    } else {
        alert("Signup form must be filled out on submit")
    }
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
    // Check if login form filled out 
    if (loginFormFilledOut(userData)) {
        fetchUser(userData)
    } else {
        alert("Login must be filled out on submit")
    }
}

const signupFormFilledOut = (newUserData) => {
    return (
        newUserData.user.email.length > 0 &&
        newUserData.user.username.length > 0 &&
        newUserData.user.password.length > 0 &&
        newUserData.user.password_confirmation.length > 0
    )
}

const loginFormFilledOut = (userData) => {
    return (userData.username.length > 0 &&
        userData.password.length > 0)
}

const fetchNewUser = (newUserData) => {
    // Make config object
    const userConfigObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newUserData)
    };
    // Send fetch request to users url
    fetch(USERS_URL, userConfigObj)
        .then(response => checkForErrors(response))
        .then(userObj => {
            createUser(userObj)
            displaySignupMesage()
        })
        .catch(error => {
            error.message = "Signup was unsuccessful"
            alert(error.message)
        })
}

const fetchUser = (userData) => {
    const userConfigObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    };
    // Send fetch request to login url
    fetch(SESSIONS_URL, userConfigObj)
        .then(response => {
            checkForErrors(response)
            displayLoginMessage()
        })
        .catch(error => {
            error.message = "Error logging in"
            alert(error.message)
        })
}

const createUser = (userObj) => {
    new User({
        id: Number(userObj.data.id),
        email: userObj.data.attributes.email,
        username: userObj.data.attributes.username
    })
}

const displaySignupMesage = () => {
    const signupLoginLinks = document.querySelector(".signup-login-links")
    const logoutLink = document.querySelector(".logout-link")
    signupForm.hidden = true
    logoutLink.hidden = false
    signupLoginLinks.innerHTML = "You've signed up successfully!"
}

const displayLoginMessage = () => {
    const signupLoginLinks = document.querySelector(".signup-login-links")
    const logoutLink = document.querySelector(".logout-link")
    loginForm.hidden = true
    logoutLink.hidden = false
    signupLoginLinks.innerHTML = "You're logged in"
}

const checkForErrors = (response) => {
    if (response.status >= 200 && response.status <= 299) {
        return response.json()
    } else {
        throw Error(response.statusText);
    }
}

// Make function for rendering the signup form
// const signupForm = () => {
//     return document.querySelector('#signup-form')
// }