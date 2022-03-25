
class Form {
  constructor() {
  }

  getById(elementId) {
    return document.getElementById(elementId)
  }


  render(e, form) {
    e.preventDefault();
    const signupForm = this.getById("signup-form");
    const loginForm = this.getById("login-form");
    console.log(signupForm)
    if (form === "signup") {
      // render signup
      loginForm.hidden = true;
      signupForm.hidden = false;
    } else {
      // render login
      signupForm.hidden = true;
      loginForm.hidden = false;
    }
  }

} 