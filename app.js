// init Github
const github = new Github();

// search Input
const searchUser = document.getElementById("searchUser");
const profile = document.getElementById("profile");

// search Input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input Text
  const userText = e.target.value;
  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // show alert
      } else {
        //   show alert
      }
    });
  } else {
    //   Clear Profile
  }
});
