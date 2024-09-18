import { API_ENDPOINT } from "../apiEndpoint";


export const usersGetMe = async () => {
    try {
      const getData = await fetch(`${API_ENDPOINT}/users/me`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;

    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };