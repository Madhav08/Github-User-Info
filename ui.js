class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  //   Display Profile
  getUser(user) {
    console.log(user);
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>

                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-primary">Followers: ${user.followers}</span>
                    <span class="badge badge-primary">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div class="repos"></div>
    `;
  }

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = ``;
  }

  //   clear Alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //   Show Alert
  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);
    // Time Out after 3s
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //   show Repos
  showRepos(repos) {
    const repo = document.querySelector(".repos");
    let output = "";

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
                </div>
            </div>
        </div>
      `;
    });

    // output repos
    document.querySelector(".repos").innerHTML = output;
  }
}
