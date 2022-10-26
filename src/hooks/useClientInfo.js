import { useState, useEffect } from "react";

// URL endpoints
const V4_URL = "https://api.ipify.org?format=json";
const V6_URL = "https://api64.ipify.org?format=json";

export const useClientInfo = () => {
  // states
  const [isLoading, setIsLoading] = useState(false);
  const [userIpAddress, setUserIpAddress] = useState({
    v4: "",
    v6: "",
    error: null,
  });
  const [containError, setContainError] = useState({
    error: false,
    message: "",
  });
  const [userLocation, setUserLocation] = useState({
    isAvailable: false,
    lat: null,
    lng: null,
  });
  const [userBrowser, setUserBrowser] = useState({
    appCodeName: null,
    appName: null,
    appVersion: null,
    cookieEnabled: false,
    language: null,
    platform: null,
    online: false,
    product: null,
    userAgent: false,
    error: null,
  });

  // success handler for geo-location
  function locationSuccessHandler(position) {
    setUserLocation({
      isAvailable: true,
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  }

  // error handler for geo-location
  function locationErrorHandler() {
    setContainError({
      error: true,
      message: "Something went wrong, user could not be located",
    });
  }

  // function to get the location
  function getUserLocation() {
    setIsLoading(true);
    // browser geolocation supported or not
    if (!navigator && !navigator.geolocation) {
      setContainError({
        error: true,
        message:
          "Browser either does not support geolocation or geolocation is turned off by user",
      });
    }
    navigator.geolocation.getCurrentPosition(
      locationSuccessHandler,
      locationErrorHandler,
      {
        enableHighAccuracy: true,
      }
    );
    setIsLoading(false);
  }

  // function to get the user browser information
  function getBrowserInformation() {
    if (!navigator) {
      setUserBrowser((ret) => ({
        ...ret,
        error: "Browser information not available",
      }));
    }
    setUserBrowser({
      appCodeName: navigator.appCodeName,
      appName: navigator.appName,
      appVersion: navigator.appVersion,
      cookieEnabled: navigator.cookieEnabled,
      language: navigator.language,
      online: navigator.online,
      platform: navigator.platform,
      product: navigator.product,
      userAgent: navigator.userAgent,
    });
  }

  // function to get the IP address of the client
  function getUserIp() {
    try {
      fetch(V4_URL).then((response) =>
        setUserIpAddress((ret) => ({ ...ret, v4: response }))
      );
      fetch(V6_URL).then((response) =>
        setUserIpAddress((ret) => ({ ...ret, v6: response }))
      );
    } catch (err) {
      setUserIpAddress((ret) => ({
        ...ret,
        error: err,
      }));
    }
  }

  // Get the geo-location when the component mounts
  useEffect(() => {
    getUserLocation();
    getBrowserInformation();
    getUserIp();
  }, []);

  return {
    isLoading,
    containError,
    userLocation,
    userBrowser,
    userIpAddress,
    getUserLocation,
    getBrowserInformation,
    getUserIp,
  };
};
