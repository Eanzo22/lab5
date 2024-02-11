window.addEventListener("load", () => {
  getUserData();
});

const getUserData = () => {
  const url = "http://localhost:3000/api/user/profile";
  fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      jwt: sessionStorage.getItem("token"),
      email: sessionStorage.getItem("email")
    },
  })
  .then(response => response.text()) 
  .then(html => {
      document.documentElement.innerHTML = html;
  })
  .then(response => response.text()) 
  .then(html => {
      document.documentElement.innerHTML = html;
  })
}