class Github {
  constructor() {
    this.client_id = "966d70e4f8c6c09e83f2";
    this.client_secret = "654a5fab0ed64cf2ae9487338e2470e4dce3d556";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
