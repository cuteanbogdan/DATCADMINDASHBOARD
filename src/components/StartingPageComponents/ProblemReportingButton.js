import React from "react";

function ProblemReportingButton() {
  /**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * SPDX-License-Identifier: Apache-2.0
   */
  function initMap() {
    const myLatLng = { lat: 45.75, lng: 21.22 };
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng,
    });

    new window.google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }

  window.initMap = initMap;

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          //placeMarkerAndPanTo(userLocation);
        },
        () => {
          console.error("The Geolocation service failed.");
        }
      );
    } else {
      console.error("Your browser doesn't support geolocation.");
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 flex justify-center pb-4">
      <button
        onClick={handleLocationClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        RAPORTEAZA PROBLEME
      </button>
    </div>
  );
}

export default ProblemReportingButton;
