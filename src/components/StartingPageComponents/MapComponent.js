import React, { useEffect, useRef } from "react";
import ProblemReportingButton from "./ProblemReportingButton";
const MapComponent = () => {
  const mapRef = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    map.current = new window.google.maps.Map(mapRef.current, {
      center: { lat: 45.75, lng: 21.22 },
      zoom: 20,
      styles: [
        {
          featureType: "poi",
          stylers: [{ visibility: "off" }], // This line hides points of interest
        },
        {
          featureType: "transit",
          stylers: [{ visibility: "off" }], // This line hides transit lines and stations
        },
      ],
    });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map.current.setCenter(pos);
      },
      () => {}
    );
  }, []);
  // Adjusting the bottom margin
  // Example: mb-8 for larger bottom margin
  return (
    <>
      <div ref={mapRef} id="map" style={{ height: "100vh", width: "100%" }} />
      <ProblemReportingButton></ProblemReportingButton>
    </>
  );
};

export default MapComponent;
