// User class (for signing up new users)
class User {
    constructor(userJSON) {
        //   this.id = userJSON.id
        this.email = userJSON.email
        this.username = userJSON.username
        this.password = userJSON.password
        this.password_confirmation = userJSON.password_confirmation
    }
}