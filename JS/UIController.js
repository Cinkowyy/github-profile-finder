class UIController {
  constructor(profileContainer, errorElement) {
    this.profileContainer = profileContainer;
    this.errorElement = errorElement;
  }

  showError(message) {
    this.errorElement.classList.add("shown");
    this.errorElement.querySelector(".error-message").textContent = message;
  }

  hideError() {
    this.errorElement.classList.remove("shown");
  }

  renderProfile(profileData) {
    const date = new Date(profileData.created_at);
    const formattedDate = date.toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const profileStructure = `<div class="profile-card">
            <div class="avatar-container">
                <img
                    src="${profileData.avatar_url}"
                    alt="pilotpirxie"
                />
                <a href="${profileData.html_url}" target="_blank">
                    <button class="btn">View Profile</button>
                </a>
            </div>

            <div class="data-container">
            <div class="main-data">
                <p class="username">${profileData.login}</p>
                <p class="joined-date">
                Joinded <span class="bold">${formattedDate}</span>
                </p>
            </div>
            <div class="bio-container">
                <p class="bio">
                ${
                  profileData.bio === null || profileData.bio === ""
                    ? "Bio Not Provided"
                    : profileData.bio
                }
                </p>
            </div>
            <div class="details-container">
                <div class="detail">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                    d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                    fill="rgba(51,51,51,1)"
                    />
                </svg>
                <p class="detail-text">${
                  profileData.location === null
                    ? "Not Provided"
                    : profileData.location
                }</p>
                </div>
                <div class="detail">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                    d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                    fill="rgba(51,51,51,1)"
                    />
                </svg>
                <p class="detail-text">${
                  profileData.twitter_username === null
                    ? "Not Provided"
                    : profileData.twitter_username
                }</p>
                </div>
                <div class="detail">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                    d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"
                    fill="rgba(51,51,51,1)"
                    />
                </svg>
                <p class="detail-text">${
                  profileData.blog === ""
                    ? "Not Provided"
                    : '<a href="http://' +
                      profileData.blog +
                      '" target="_blank">' +
                      profileData.blog +
                      "</a>"
                }</p>
                </div>
                <div class="detail">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                    d="M12 19h2V6l6.394 2.74a1 1 0 0 1 .606.92V19h2v2H1v-2h2V5.65a1 1 0 0 1 .594-.914l7.703-3.424A.5.5 0 0 1 12 1.77V19z"
                    fill="rgba(51,51,51,1)"
                    />
                </svg>
                <p class="detail-text">${
                  profileData.company === null
                    ? "Not Provided"
                    : profileData.company
                }</p>
                </div>
            </div>
            <div class="profile-stats">
                <div class="stat dark-gray">
                <p class="stat-text">Public Repos: ${
                  profileData.public_repos
                }</p>
                </div>
                <div class="stat light-gray">
                <p class="stat-text">Public Gists: ${
                  profileData.public_gists
                }</p>
                </div>
                <div class="stat green">
                <p class="stat-text">Followers: ${profileData.followers}</p>
                </div>
                <div class="stat blue">
                <p class="stat-text">Following: ${profileData.following}</p>
                </div>
            </div>
            </div>
        </div>`;

    this.profileContainer.innerHTML = profileStructure;
  }
}

export default UIController;
