import { API_ENDPOINT } from "../apiEndpoint";


export const contractsGetAll = async () => {
    try {
      const getData = await fetch(`${API_ENDPOINT}/contracts/all`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;

    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };


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

  export const contractsGetByContractNo = async (contract_no) => {
    try {
      const getData = await fetch(`${API_ENDPOINT}/contracts/numbers/${contract_no}`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;

    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };

  export const contractsGetByContractNoBasic = async (contract_no) => {
    try {
      const getData = await fetch(`${API_ENDPOINT}/contracts/basic/information/${contract_no}`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;

    } catch (error) {
      console.error("Error loading form data:", error);
    }
  }

  export const supportGetContracts = async (queryParams) => {
    try {
      const getData = await fetch(`${API_ENDPOINT}/contracts/all/filter/?${queryParams.toString()}`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;

    } catch (error) {
      console.error("Error loading form data:", error);
    }
  }

  export const contractsGetByAssetId = async (asset_id) => {
    try {
      const getData = await fetch(`${API_ENDPOINT}/contracts/assets/${asset_id}`, {
        method: "GET",
        credentials: "include",
      });

      const data = await getData.json();
      return data;

    } catch (error) {
      console.error("Error loading form data:", error);
    }
  }