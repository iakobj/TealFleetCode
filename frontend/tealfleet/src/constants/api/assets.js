import { API_ENDPOINT } from "../apiEndpoint";


export const assetsGetAll = async () => {
    try {
      const getData = await fetch(`${API_ENDPOINT}/assets/fleet/all/`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;

    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };


  export const assetsGetAllQuery = async (queryParams) => {
    try {
      const getData = await fetch(`${API_ENDPOINT}/assets/fleet/all/filter/?${queryParams.toString()}`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;

    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };
