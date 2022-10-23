import DataController from "./DataController.js";

const searchInput = document.querySelector("#searchInput")
const searchBtn = document.querySelector("#searchButton")
const profileContainer = document.querySelector("#profile-container")

const dataController = new DataController()

searchBtn.addEventListener("click", async () => {
    if(searchInput.value!=='') {

        const username = searchInput.value;
    
        try {
            const res = await dataController.fetchProfile(username)
            if(res)
                console.log(res)
        
        }catch(err) {
            console.log(err.message)
        } finally {
            searchInput.value = "";
        }
    }

})
