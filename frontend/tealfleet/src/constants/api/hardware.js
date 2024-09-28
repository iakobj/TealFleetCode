import { API_ENDPOINT } from "../apiEndpoint";



export const hardwareCatGetByPartnumber = async (partnumber) => {
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


  

  export const hardwareCatGetHWModelNameByVendor = async (vendor) => {
    try {
      const getData = await fetch(`${API_ENDPOINT}/hardware/catalogs/models/names/vendors/${vendor}`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;

    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };


  export const hardwareCatGetHWModelName = async () => {
    try {
      const getData = await fetch(`${API_ENDPOINT}/hardware/catalogs/models/names`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;

    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };