
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector("#email-signup").value.trim();
    const name = document.querySelector("#name-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (email && name && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ email, name, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        console.log("sign up success!");
        document.location.replace("/");
      } else {
        console.log("failed");
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);
  