import { API_ENDPOINT } from "../apiEndpoint";



export const contractsGetAllContractTypes = async () => {
    try {
      const getData = await fetch(`${API_ENDPOINT}/contracts/types`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;

    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };