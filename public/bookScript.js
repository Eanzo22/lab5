window.addEventListener("load", () => {
  getAllBooks();
});

const getAllBooks = () => {
  const url = "http://localhost:3000/api/user/profile/books";
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
    /*.then((response) => response.json())
    .then((data) => {
      console.log(data);
      let courses = data.courses;
      courses.map((course) => {
        const courseElement = document.createElement("h1");
        courseElement.innerHTML = course.courseName;
        document.body.appendChild(courseElement);
      });
    });
};
*/