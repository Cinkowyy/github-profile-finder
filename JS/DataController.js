class DataController {
    constructor() {
        this.baseURL = "https://api.github.com/users/";
        this.userProfile = JSON.parse(localStorage.getItem("userProfile"))
    }

    async fetchProfile(username) {
            const response = await fetch(this.baseURL+username)
            if(response.ok) {
                const profile = response.json()
                localStorage.setItem("userProfile", profile )
                return profile
            }
        
            if(response.status === 404)
            throw new Error("The profile you're looking for was not found")
            else
            throw new Error("Something went wrong")

    }
}

export default DataController;