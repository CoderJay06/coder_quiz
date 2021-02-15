// User class (for signing up new users)
class User {
    constructor(userJSON) {
        this.id = userJSON.id
        this.email = userJSON.email
        this.username = userJSON.username
        this.userUrl = "http://localhost:3000/api/v1/users"
        User.all.push(this)
    }

    static attatchFormListeners(loginUser) {
        this.signupForm = document.querySelector("#signup-form")
        this.loginForm = document.querySelector("#login-form")
        this.signupForm.addEventListener("submit", User.signupUser)
        this.loginForm.addEventListener("submit", loginUser)
    }

    static signupUser(event) {
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
        if (User.signupFormFilledOut(newUserData)) {
            User.fetchNewUser(newUserData)
        } else {
            alert("Signup form must be filled out on submit")
        }
    }

    static signupFormFilledOut = (newUserData) => {
        return (
            newUserData.user.email.length > 0 &&
            newUserData.user.username.length > 0 &&
            newUserData.user.password.length > 0 &&
            newUserData.user.password_confirmation.length > 0
        )
    }

    static fetchNewUser(newUserData) {
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
        fetch(userUrl, userConfigObj)
            .then(response => checkForErrors(response))
            .then(userObj => {
                User.create(userObj)
                    //  hideLinksAndForms()
                    //  showCategories(true)
            })
            .catch(error => {
                error.message = "Signup was unsuccessful"
                alert(error.message)
            })
    }

    static create(userObj) {
        new User({
            id: Number(userObj.data.id),
            email: userObj.data.attributes.email,
            username: userObj.data.attributes.username
        })
    }
}
User.all = []