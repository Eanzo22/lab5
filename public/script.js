// alert("Hello Static Files!")
// Select the login form element
const loginForm = document.querySelector("#form");
const registerForm = document.querySelector("#register");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  console.log(email);
  const password = document.getElementById("password").value;
  const url = "http://localhost:3000/api/user/login";
  try {
    // Send login data to the server
  console.log(email);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // Handle the server response
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      //save token in cookie or sessionstorage
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("email", data.user.email);

      // console.log("Login successful:", data);
      // console.log(email);
      window.location.href="http://localhost:3000/profile.html";
      // Redirect or perform actions upon successful login
    } else {
      const errorMessage = await response.text();
      console.error("Login failed:", errorMessage);
    }
  } catch (error) {
    console.error("Error:", error);
  }
  });
  //momo@m.com
  //testing password