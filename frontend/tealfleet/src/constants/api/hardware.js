import { API_ENDPOINT } from "../apiEndpoint";



export const hardwareCatGetHWModelName = async (partnumber) => {
    try {
      const getData = await fetch(`${API_ENDPOINT}/hardware/catalogs/partnumbers/${partnumber}`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;

    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };



  export const hardwareCatGetByHWModelName = async (hardwaremodelname) => {
    try {
      const getData = await fetch(`${API_ENDPOINT}/hardware/catalogs/models/names/${hardwaremodelname}`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;

    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };