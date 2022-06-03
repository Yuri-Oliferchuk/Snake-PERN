import axios from "axios";

// const urlBase = "http://localhost:3001";

export const getHighScore = async() => {
    const result = await axios.get("/score")
    return result.data
}

export const postResultToDatabase = async(username, score) => {
    const data = {username, score}
    await axios.post("/score", data)
}
 