class Github {
  constructor() {
    this.client_id = "966d70e4f8c6c09e83f2";
    this.client_secret = "1d20739eaae37c37bfda8e4043f9e545616f3706";
  }

  async getUsers(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
  }
}
