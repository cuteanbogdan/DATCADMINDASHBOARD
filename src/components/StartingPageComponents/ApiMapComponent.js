import React, { useState, useEffect } from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
const ApiMapComponent = () => {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.error(err);
        // Handle error or set a default position if needed
      },
      { enableHighAccuracy: true }
    );
  }, []);
  return (
    <APIProvider apiKey="AIzaSyBhZydz0h3BQXoFuVZIHsMbyDjN5rC9VAc">
      <div style={{ height: "100vh" }}>
        <Map zoom={20} center={position} mapId={"e29579724eab6d7f"}>
          <AdvancedMarker position={position}></AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
};

export default ApiMapComponent;
