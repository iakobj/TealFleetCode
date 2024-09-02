import { API_ENDPOINT } from "../apiEndpoint";

export const tenantsGetAll = async () => {
  try {
    const getData = await fetch(`http://${API_ENDPOINT}/tenants`, {
      method: "GET",
      credentials: "include",
    });

    const data = await getData.json();
    return data;
  } catch (error) {
    console.error("Error loading form data:", error);
  }
};
