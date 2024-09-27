import { API_ENDPOINT } from "../apiEndpoint";

export const dashboardGetStatusCardData = async (tenant) => {
  if (tenant == undefined) {
    try {
      const getData = await fetch(`${API_ENDPOINT}/dashboard/assets/status/`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;
    } catch (error) {
      console.error("Error loading form data:", error);
    }
  } else {
    try {
      const getData = await fetch(
        `${API_ENDPOINT}/dashboard/assets/status/${tenant}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await getData.json();
      return data;
    } catch (error) {
      console.error("Error loading form data:", error);
    }
  }
};

export const dashboardGetTotalsCardData = async (tenant) => {
  if (tenant == undefined) {
    try {
      const getData = await fetch(`${API_ENDPOINT}/dashboard/assets/totals/`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;
    } catch (error) {
      console.error("Error loading form data:", error);
    }
  } else {
    try {
      const getData = await fetch(
        `${API_ENDPOINT}/dashboard/assets/totals/${tenant}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await getData.json();
      return data;
    } catch (error) {
      console.error("Error loading form data:", error);
    }
  }
};

export const dashboardGetSupportCardData = async (tenant) => {
  if (tenant == undefined) {
    try {
      const getData = await fetch(`${API_ENDPOINT}/dashboard/assets/support/`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;
    } catch (error) {
      console.error("Error loading form data:", error);
    }
  } else {
    try {
      const getData = await fetch(
        `${API_ENDPOINT}/dashboard/assets/support/${tenant}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await getData.json();
      return data;
    } catch (error) {
      console.error("Error loading form data:", error);
    }
  }
};
