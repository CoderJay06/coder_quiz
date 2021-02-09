// User class (for signing up new users)
class User {
    constructor(userJSON) {
        this.id = userJSON.id
        this.email = userJSON.email
        this.username = userJSON.username
        User.all.push(this)
    }
}
User.all = []