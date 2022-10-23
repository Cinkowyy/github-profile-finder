import DataController from "./DataController.js";
import UIController from "./UIController.js";

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchButton");
const profileContainer = document.querySelector("#profile-container");
const errorElement = document.querySelector(".error-container");

const dataController = new DataController();
const interfaceController = new UIController(profileContainer, errorElement);

const userProfileFromStorage = dataController.userProfile;
if (userProfileFromStorage)
  interfaceController.renderProfile(userProfileFromStorage);

const searchProfile = async () => {
  if (searchInput.value !== "") {
    interfaceController.hideError();
    const username = searchInput.value;

    try {
      const profile = await dataController.fetchProfile(username);
      if (profile) interfaceController.renderProfile(profile);
    } catch (err) {
      interfaceController.showError(err.message);
    } finally {
      searchInput.value = "";
    }
  }
};

searchBtn.addEventListener("click", searchProfile);
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchProfile();
});
