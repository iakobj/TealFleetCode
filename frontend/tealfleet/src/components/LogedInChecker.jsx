// React components
import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// import location of the API server
import { API_ENDPOINT } from "../constants/apiEndpoint";

// Chakra-UI components
import {

} from "@chakra-ui/react";

function LogedInChecker() {
  const [sessionValid, setSessionValid] = useState();
  const navigate = useNavigate();
  let location = useLocation();

  let userInfoDataLoader = async () => {
    try {
      const userInformation = await fetch(
        `http://${API_ENDPOINT}/users/me`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const userInfo = await userInformation.json();

      if (userInfo && userInfo.data[0] && userInfo.data[0].error) {
        console.log("Session not found");
        setSessionValid(false);
        navigate("/login")
      } else {
        console.log("Session valid");
        setSessionValid(true);
      }

    } catch (error) {
      console.error("Error loading user data:", error);
    }
  };

  useEffect(() => {
    userInfoDataLoader();
  }, [location]);  


  return (
    <>
    </>
  )
}

export default LogedInChecker;
