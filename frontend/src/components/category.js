// Category class ()
class Category {
    constructor(categoryJSON) {
        this.id = categoryJSON.id
        this.name = categoryJSON.name
    }

    // Method to render category to the dom
    renderCategory() {
        return `
         <li class="category" data-id="${this.id}">${this.name}</li>
        `
    }
}