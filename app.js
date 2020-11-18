// init Github
const github = new Github();
const ui = new UI();

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
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        //  Get User
        ui.getUser(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //   Clear Profile
    ui.clearProfile();
  }
});
