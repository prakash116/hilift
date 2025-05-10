import React, { useEffect, useState } from "react";

function Location() {
    const [location, setLocation] = useState({
      latitude: null,
      longitude: null,
      address: null,
      error: null,
      isLoading: false,
    });
  
    useEffect(() => {
      if (navigator.geolocation) {
        setLocation((prev) => ({ ...prev, isLoading: true }));
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setLocation((prev) => ({
              ...prev,
              latitude,
              longitude,
              isLoading: false,
            }));
  
            // Fetch address
            try {
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
              );
              const data = await response.json();
              setLocation((prev) => ({
                ...prev,
                address: data.display_name || "Address not found",
              }));
            } catch (err) {
              setLocation((prev) => ({
                ...prev,
                error: "Failed to fetch address",
              }));
            }
          },
          (error) => {
            setLocation((prev) => ({
              ...prev,
              error: error.message || "Failed to get location",
              isLoading: false,
            }));
          }
        );
      } else {
        setLocation((prev) => ({
          ...prev,
          error: "Geolocation is not supported by this browser",
        }));
      }
    }, []);
  
    return (
      <div>
        {location.error ? (
          <p>Error: {location.error}</p>
        ) : location.isLoading ? (
          <p>Loading location...</p>
        ) : (
          <div>
            <p>
              Coordinates: {location.latitude}, {location.longitude}
            </p>
            {location.address && <p>Address: {location.address}</p>}
          </div>
        )}
      </div>
    );
  }

export default Location;
