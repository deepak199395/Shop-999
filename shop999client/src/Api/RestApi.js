
export const getMovieApi = async () => {
    try {
        const response = await fetch("https://shop999backend.vercel.app/back-end/rest-API/Secure/api/v1/movies/GetMovieInfo-list/api19");
        const result = response.json()
        return result;
    } catch (error) {
        console.error("API call failed:", error);
        throw error;
    }
}

export const GetIplTicketInfo = async () => {
    try {
        const response = await fetch("https://shop999backend.vercel.app/back-end/rest-API/Secure/api/v1/tickets/GetIPLTickets-list/api9");
        const result = response.json()
        return result;
    } catch (error) {
        console.error("API call failed:", error);
        throw error;
    }
}

export const getLiveShowData=async()=>{
    try {
        const response = await fetch("https://shop999backend.vercel.app/back-end/rest-API/Secure/api/v1/liveshows/GetLiveShow-list/api21");
        const result = response.json()
        return result;
    } catch (error) {
        console.error("API call failed:", error);
        throw error;
     }
}
export const userLogin=async()=>{
  try {
    const response = await fetch("https://shop999backend.vercel.app/back-end/rest-API/Secure/api/v1/auth/Login-User/api3");
    const result = response.json()
    return result;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
    
  }
}