import React from 'react'
import { useGoogleMaps } from "react-hook-google-maps";


const GOOGLE_API = "AIzaSyDWB1CGabMNozbnVgX_kWurzAnN0cb0oDM";
 
const Map = () => {
  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    GOOGLE_API,
    // NOTE: even if you change options later
    {
      center: { lat: 41.256538, lng: -95.934502 },
      zoom: 8,
    },
  );
  console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
  console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)
  
  return <div ref={ref} style={{ width: '100%', height: 300 }} />;
};
 
export default Map;