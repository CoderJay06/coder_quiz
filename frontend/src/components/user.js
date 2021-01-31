// User class (for signing up new users)
class User {
    constructor(userJSON) {
        this.email = userJSON.email
        this.username = userJSON.username
        this.password = userJSON.password
    }
}