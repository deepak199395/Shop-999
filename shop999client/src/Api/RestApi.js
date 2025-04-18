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

export const getLiveShowData=async()=>{
    try {
        const response = await fetch(`${BASE_URL}/getLiveshow/api`);
        const result = response.json()
        return result;
    } catch (error) {
        console.error("API call failed:", error);
        throw error;
     }
}
export const userLogin=async()=>{
  try {
    const response = await fetch(`${BASE_URL}/login`);
    const result = response.json()
    return result;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
    
  }
}