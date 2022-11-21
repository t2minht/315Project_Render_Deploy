// import React from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// // function mapsAPI() {
// //     return (
// //         <div>
// //             <title>Google Maps API Directions Services</title>
// //             <div id="map" style="height:100vh"></div>
// //             <script src=" https://maps.googleapis.com/maps/api/js?key=AIzaSyD8YX0txuyaSV1Ht3augMmhARVzqMlrfTw"></script>
// //             <script src="maps.js"></script>
// //         </div>
// //     );
// // }


// export default function MapsAPI() {
//     const { isLoaded } = useLoadScript({
//         // googleMapsApiKey: "AIzaSyD8YX0txuyaSV1Ht3augMmhARVzqMlrfTw"
//         // AIzaSyAh_4bM5xonPGKrJ49pgcRlmyrY8AR7H68
//         googleMapsApiKey: "AIzaSyAh_4bM5xonPGKrJ49pgcRlmyrY8AR7H68"
//     });
//     if (!isLoaded) return <div>...Creating Map.......</div>
//     return <MakeMap />
// }

// function MakeMap() {
//     return <GoogleMap zoom={16} center={{ lat: 30.61234195012257, lng: -96.34153287461642 }} mapContainerClassName="mapDimensions"></GoogleMap>
// }



//Official example from react staff, using as reference.


// import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const containerStyle = {
//     width: '400px',
//     height: '400px'
// };

// const center = {
//     lat: -3.745,
//     lng: -38.523
// };

// function MyComponent() {
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: "AIzaSyAh_4bM5xonPGKrJ49pgcRlmyrY8AR7H68"
//     })

//     const [map, setMap] = React.useState(null)

//     const onLoad = React.useCallback(function callback(map) {
//         // This is just an example of getting and using the map instance!!! don't just blindly copy!
//         const bounds = new window.google.maps.LatLngBounds(center);
//         map.fitBounds(bounds);

//         setMap(map)
//     }, [])

//     const onUnmount = React.useCallback(function callback(map) {
//         setMap(null)
//     }, [])

//     return isLoaded ? (
//         <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             zoom={10}
//             onLoad={onLoad}
//             onUnmount={onUnmount}
//         >
//             { /* Child components, such as markers, info windows, etc. */}
//             <></>
//         </GoogleMap>
//     ) : <></>
// }

// export default React.memo(MyComponent)