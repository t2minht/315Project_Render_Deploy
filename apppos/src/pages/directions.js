import React, { Component } from "react";
import { GoogleMap, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";

// const google = window.google;

// const containerStyle = {
//     width: '80%',
//     height: '80vh'
// };

// const center = {
//     lat: 30.61234195012257,
//     lng: -96.34153287461642
// };
// const zach = {
//     lat: 30.62136621013343,
//     lng: -96.3404684638202
// }
// function renderMap() {
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
//             zoom={15}
//             onLoad={onLoad}
//             onUnmount={onUnmount}
//         >
//             { /* Child components, such as markers, info windows, etc. */}
//             <></>
//         </GoogleMap>
//     ) : <></>
// }

function mapsAPI() { }
//     map = renderMap();
//     const directionsToPizza = React.useCallback(function callback(map) {
//         const bounds = new window.google.maps.LatLngBounds(center);
//         map.fitBounds(bounds);

//         var directionsService = new google.maps.DirectionsService();
//         var directionsRenderer = new google.maps.DirectionsRenderer();

//         var request = {
//             origin: zach,
//             destination: center,
//             travelMode: 'DRIVING'
//         };
//         directionsService.route(request, function (result, status) {
//             if (status == 'OK') {
//                 directionsRenderer.setDirections(result);
//                 directionsRenderer.setMap(map);
//             }
//         });
//     }, [])
// }


// export default Directions;
export default React.memo(mapsAPI);









// import React from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// const google = window.google;

// const containerStyle = {
//     width: '80%',
//     height: '80vh'
// };

// const center = {
//     lat: 30.61234195012257,
//     lng: -96.34153287461642
// };
// const zach = {
//     lat: 30.62136621013343,
//     lng: -96.3404684638202
// }
// function MapsAPI() {
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: "AIzaSyAh_4bM5xonPGKrJ49pgcRlmyrY8AR7H68"
//     });
//     var [map, setMap] = React.useState(null)

//     // const onLoad = React.useCallback(function callback(map) {
//     //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     //     const bounds = new window.google.maps.LatLngBounds(center);
//     //     map.fitBounds(bounds);
//     //     setMap(map)
//     // }, [])

//   const onLoad = React.useCallback(function callback(map) {
//     //         // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     //         const bounds = new window.google.maps.LatLngBounds(center);
//     //         map.fitBounds(bounds);

//     //         setMap(map)
//     //     }, [])

//     const onUnmount = React.useCallback(function callback(map) {
//         setMap(null)
//     }, [])

//     return isLoaded ? (
//         <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             zoom={15}
//             directionsToPizza={directionsToPizza}
//             onUnmount={onUnmount}
//         >
//             { /* Child components, such as markers, info windows, etc. */
//                 <Marker position={center} />
//             }
//             <></>

//         </GoogleMap>

//     ) : <></>
// }

// export default React.memo(MapsAPI)

// // //Official example from react staff, using as reference.


// // import React from 'react'
// // import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// // const containerStyle = {
// //     width: '400px',
// //     height: '400px'
// // };

// // const center = {
// //     lat: -3.745,
// //     lng: -38.523
// // };

// // function MyComponent() {
// //     const { isLoaded } = useJsApiLoader({
// //         id: 'google-map-script',
// //         googleMapsApiKey: "AIzaSyAh_4bM5xonPGKrJ49pgcRlmyrY8AR7H68"
// //     })

// //     const [map, setMap] = React.useState(null)

// //     const onLoad = React.useCallback(function callback(map) {
// //         // This is just an example of getting and using the map instance!!! don't just blindly copy!
// //         const bounds = new window.google.maps.LatLngBounds(center);
// //         map.fitBounds(bounds);

// //         setMap(map)
// //     }, [])

// //     const onUnmount = React.useCallback(function callback(map) {
// //         setMap(null)
// //     }, [])

// //     return isLoaded ? (
// //         <GoogleMap
// //             mapContainerStyle={containerStyle}
// //             center={center}
// //             zoom={10}
// //             onLoad={onLoad}
// //             onUnmount={onUnmount}
// //         >
// //             { /* Child components, such as markers, info windows, etc. */}
// //             <></>
// //         </GoogleMap>
// //     ) : <></>
// // }


