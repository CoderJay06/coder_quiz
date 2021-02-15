// User class (for signing up new users)
class User {
    constructor(userJSON) {
        this.id = userJSON.id
        this.email = userJSON.email
        this.username = userJSON.username
        User.all.push(this)
    }

    static attatchFormListeners(signupUser, loginUser) {
        this.signupForm = document.querySelector("#signup-form")
        this.loginForm = document.querySelector("#login-form")
        this.signupForm.addEventListener("submit", signupUser)
        this.loginForm.addEventListener("submit", loginUser)
    }
}
User.all = []