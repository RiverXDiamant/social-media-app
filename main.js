// Targets all the id selectors

let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// Event Listeners for the Form to prevent default behavior of the app

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");

  formValidation();
});

let formValidation = () => {
  // prevents users from submitting blank input fields

  if (input.value === "") {
    // message will show if the user tries to submit a blank form
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};

// ===== Accept Data From Input Fields === \\

// Store the data in an object using a function that collects data from the user input and store them.
let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);

  createPost();
};

// ===== Create Posts ===== \\

let createPost = () => {
  posts.innerHTML += `
  <div>
  <p>${data.text}</p>
  <span>
  <i onClick="editPost(this)" class="fas fa-edit"></i>
  <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
  </span>
  </div>`;
  input.value = "";
};

// ===== Delete Posts ===== \\
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

// ===== Edit Posts ===== \\

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
