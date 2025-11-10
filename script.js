document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let username = this.username.value.trim();
      let email = this.email.value.trim();
      let password = this.password.value.trim();

      if (username.length < 3) {
        alert("Username must be at least 3 characters!");
        return;
      }
      if (!email.includes("@")) {
        alert("Enter a valid email!");
        return;
      }
      if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
      }
      alert("Registration Successful");
      this.reset();
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let email = this.email.value.trim();
      let password = this.password.value.trim();

      if (!email.includes("@")) {
        alert("Enter a valid email!");
        return;
      }
      if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
      }
      alert("Login Successful");
      this.reset();
    });
  }
});
