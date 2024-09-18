import { API_ENDPOINT } from "../apiEndpoint";


  export const softwareCatGetBySWModelName = async (softwaremodelname) => {
    try {
      const getData = await fetch(`${API_ENDPOINT}/software/catalogs/models/names/${softwaremodelname}`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;

    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };

  export const softwareCatGetSWModelNameByVendor = async (vendor) => {
    try {
      const getData = await fetch(`${API_ENDPOINT}/software/catalogs/models/names/vendors/${vendor}`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;

    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };