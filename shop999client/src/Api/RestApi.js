const BASE_URL = "https://shop999backend.vercel.app/api/auth"

export const getMovieApi = async () => {
    try {
        const response = await fetch(`${BASE_URL}/getMovie/Api`);
        const result = response.json()
        return result;
    } catch (error) {
        console.error("API call failed:", error);
        throw error;
    }
}

export const GetIplTicketInfo = async () => {
    try {
        const response = await fetch(`${BASE_URL}/getticketsinfo`);
        const result = response.json()
        return result;
    } catch (error) {
        console.error("API call failed:", error);
        throw error;
    }
}

