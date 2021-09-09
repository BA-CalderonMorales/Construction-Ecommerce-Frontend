import * as React from 'react';
import ReactMapGL from 'react-map-gl';
import dotenv from 'dotenv';
dotenv.config();

const Map = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 41.2, 
    longitude: -95.9,
    width:"100%",
    height:300,
    zoom: 9
  });

  return (
    <>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/ceemoe/cktbw5q260wrb18qp00043hnl"
        mapboxApiAccessToken="pk.eyJ1IjoiY2VlbW9lIiwiYSI6ImNrdGJxYnRzbTF5Y3cyb25yc2owdnZrcDYifQ.55WQcUhxconx90lrjzeyYg"
        onViewportChange={(viewport) => setViewport(viewport)}
      />
      {/* {console.log(Map)} */}
    </>
  );
}

export default Map;


// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class Map extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 8
//   };
  
  
//   render() {
    
//     const handleApiLoaded = (map, maps) => {
//       console.log(map);
//       console.log(maps);
//     };
    
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: 300, width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//           yesIWantToUseGoogleMapApiInternals
//           onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default Map;

// import React from 'react'
// import { useGoogleMaps } from "react-hook-google-maps";


// const GOOGLE_API = "";
 
// const Map = () => {
//   const { ref, map, google } = useGoogleMaps(
//     // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
//     GOOGLE_API,
//     // NOTE: even if you change options later
//     {
//       center: { lat: 41, lng: -95 },
//       zoom: 8,
//     },
//   );
//   console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
//   console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)
  
//   return <div ref={ref} style={{ width: '100%', height: 300 }} />;
// };
 
// export default Map;