class Github {
  constructor() {
    this.client_id = "966d70e4f8c6c09e83f2";
    this.client_secret = "654a5fab0ed64cf2ae9487338e2470e4dce3d556";
    this.repos_count = 5;
    this.repos_sort = "pushed: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
