const BASE_URL = "http://localhost:3000" // Set global variable for home url
const signupForm = document.querySelector("#signup-form")
const loginForm = document.querySelector("#login-form")

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

const renderCategorySelector = () => {
    createCategorySelector()
    fetchCategories()
}

const createCategorySelector = () => {
    const categoryContainer = document.querySelector("#categories-container")
    const categorySelector = document.createElement("select")
    categorySelector.name = "categories"
    categorySelector.id = "categories"
    categorySelector.innerHTML += `<option value="">category</option>`
    categoryContainer.appendChild(categorySelector)
}

const fetchCategories = () => {
    const CATEGORIES_URL = `${BASE_URL}/api/v1/categories`
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
    event.preventDefault()
    const selectedCategory = event.target.options[event.target.selectedIndex]
    const categoryId = Number(selectedCategory.dataset.id)
    const category = Category.all.find(categoryObj => categoryObj.id === categoryId)
    const quizContainer = document.getElementById("quizzes-container")
   
    if (category) {
        quizContainer.innerHTML = category.getQuizzes()
        showQuizzes(true)
        fetchQuiz()
    }
}

const fetchQuiz = () => {
    const QUIZZES_URL = `${BASE_URL}/api/v1/quizzes`
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
        quizContainer.innerHTML = quiz.showQuiz()
        showQuiz(true)
        attatchQuizSubmitListener()
    }
}

attatchQuizSubmitListener = () => {
   const submitQuizBtn = document.querySelector('.submit-quiz-btn')
   submitQuizBtn.addEventListener('click', handleQuizSubmitBtnClick)
}

// handle quiz submit
handleQuizSubmitBtnClick = (event) => {
   event.preventDefault()
   confirmQuizSubmit()
}

confirmQuizSubmit = () => {
   return confirm("Are you sure you want to submit?") ?
      showQuiz(false) : showQuiz(true)
}

const handleLogout = () => {
    logout()
}

const logout = () => {
    const SESSIONS_URL = `${BASE_URL}/sessions`
    // Logout the current user
    fetch(SESSIONS_URL, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    showLoggedOutLinks()
}

const signupUser = (event) => {
    event.preventDefault()
   
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
    const USERS_URL = `${BASE_URL}/api/v1/users`
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
            hideLinksAndForms()
            showCategories(true)
        })
        .catch(error => {
            error.message = "Signup was unsuccessful"
            alert(error.message)
        })
}

const fetchUser = (userData) => {
    const SESSIONS_URL = `${BASE_URL}/sessions`
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
            hideLinksAndForms()
            showCategories(true)
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

const hideLinksAndForms = () => {
    const signupLoginLinks = document.querySelector(".signup-login-links")
    const logoutLink = document.querySelector(".logout-link")
    signupLoginLinks.hidden = true
    signupForm.hidden = true
    loginForm.hidden = true
    logoutLink.hidden = false
}

const showLoggedOutLinks = () => {
    showLinks()
    showCategories(false)
    showQuizzes(false)
    showQuiz(false)
}

const showLinks = () => {
    const signupLoginLinks = document.querySelector(".signup-login-links")
    const logoutLink = document.querySelector(".logout-link")
    signupLoginLinks.hidden = false
    logoutLink.hidden = true
}

const showCategories = (show) => {
    const categoriesContainer =
        document.getElementById("categories-container")
    if (show) {
        categoriesContainer.className = "show-categories"
    } else {
        categoriesContainer.className = "hide-categories"
    }
}

const showQuizzes = (show) => {
    const quizzesContainer = document.getElementById("quizzes-container")
    if (show) {
        quizzesContainer.className = "show"
    } else {
        quizzesContainer.className = "hide"
    }
}

const showQuiz = (show) => {
    const quiz = document.getElementById("show-quiz")
    if (show) {
        quiz.className = "show"
    } else {
        quiz.className = "hide"
    }
}

const checkForErrors = (response) => {
    if (response.status >= 200 && response.status <= 299) {
        return response.json()
    } else {
        throw Error(response.statusText);
    }
}
