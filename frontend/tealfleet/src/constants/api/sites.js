import { API_ENDPOINT } from "../apiEndpoint";



export const sitesGetAll = async () => {
    try {
      const getData = await fetch(`${API_ENDPOINT}/sites`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;

    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };