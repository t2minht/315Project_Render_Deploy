// import React from "react";
// import withProps from "recompose";
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
// // function mapsAPI() {
// //     var directionsService = new google.maps.DirectionsService();
// //     var directionsRenderer = new google.maps.DirectionsRenderer();
// //     const map = new google.maps.Map(document.getElementById("map"), {
// //         zoom: 16,
// //         center: { spinNStone },
// //         mapTypeId: google.maps.MapTypeId.ROADMAP,
// //     });
// //     directionsRenderer.setMap(map);
// //     var request = {
// //         origin: "125 Spence St, College Station, TX 77840",
// //         destination: spinNStone,
// //         travelMode: 'DRIVING'
// //     };
// //     directionsService.route(request, function (result, status) {
// //         if (status === 'OK') {
// //             directionsRenderer({
// //                 suppressMarkers: true,
// //                 directions: result,
// //                 map: map,
// //             });
// //         }
// //     });
// // };





// // var initMap = function () {
// //     var directions = new google.maps.DirectionsRenderer();

// //     var map = new google.maps.Map(document.getElementById('map'), {
// //         zoom: 14,
// //         center: spinNStone
// //     });
// // }


// // function directions() {

// // var directionsService = new google.maps.Directions
// // Service();
// // var directionsRenderer = new google.maps.DirectionsRenderer();
// // directionsRenderer.setMap(map);
// // }
// // //     var request = {
// // //         origin: "125 Spence St, College Station, TX 77840",
// // //         destination: center,
// // //         travelMode: 'DRIVING'
// // //     };
// // //     directionsService.route(request, function (result, status) {
// // //         if (status == 'OK') {
// // //             directionsRenderer.setDirections(result);
// // //         }
// // //     });
// // // }
// // // // origin: LatLng | String | google.maps.Place,
// // // // destination: LatLng | String | google.maps.Place,
// // // // travelMode: TravelMode,


// // function MapsAPI() {
// //     const { isLoaded } = useJsApiLoader({
// //         id: 'google-map-script',
// //         googleMapsApiKey: "AIzaSyAh_4bM5xonPGKrJ49pgcRlmyrY8AR7H68"
// //     });
// //     const [map, setMap] = React.useState(null)

// //     // const onLoad = React.useCallback(function callback(map) {
// //     //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
// //     //     const bounds = new window.google.maps.LatLngBounds(center);
// //     //     map.fitBounds(bounds);
// //     //     setMap(map)
// //     // }, [])

// //     const directionsToPizza = React.useCallback(function callback(map) {
// //         const bounds = new window.google.maps.LatLngBounds(center);
// //         map.fitBounds(bounds);

// //         var directionsService = new google.maps.DirectionsService();
// //         var directionsRenderer = new google.maps.DirectionsRenderer();

// //         var request = {
// //             origin: "125 Spence St, College Station, TX 77840",
// //             destination: center,
// //             travelMode: 'DRIVING'
// //         };
// //         directionsService.route(request, function (result, status) {
// //             if (status == 'OK') {
// //                 directionsRenderer.setDirections(result);
// //                 directionsRenderer.setMap(map);
// //                 setMap(map)
// //             }
// //         });
// //     }, [])

// //     const onUnmount = React.useCallback(function callback(map) {
// //         setMap(null)
// //     }, [])

// //     return isLoaded ? (
// //         <GoogleMap
// //             mapContainerStyle={containerStyle}
// //             center={center}
// //             zoom={14}
// //             directionsToPizza={directionsToPizza}
// //             onUnmount={onUnmount}
// //         >
// //             { /* Child components, such as markers, info windows, etc. */
// //                 <Marker position={center} />
// //             }
// //             <></>
// //             {withProps.directions && <DirectionsRenderer directionsRenderer={withProps.directions} />}
// //         </GoogleMap>

// //     ) : <></>
// // }

// // export default React.memo(MapsAPI)

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

// // export default React.memo(MyComponent)

// import { compose, withProps, lifecycle } from "recompose";
// import react from "react";
// import {
//     GoogleMap,
//     withScriptjs,
//     withGoogleMap,
//     useJsApiLoader,
//     Marker,
//     DirectionsService,
//     DirectionsRenderer,
// } from "@react-google-maps/api";
// import {
//     TravelMode,
//     LatLng,
// } from "@react-google-maps";

// const mapsAPI = compose(
//     withProps({
//         googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAh_4bM5xonPGKrJ49pgcRlmyrY8AR7H68&v=3.exp&libraries=geometry,drawing,places",
//         loadingElement: <div style={{ height: `100%` }} />,
//         containerElement: <div style={{ height: `400px` }} />,
//         mapElement: <div style={{ height: `80%` }} />,
//     }),
//     withScriptjs,
//     withGoogleMap,
//     lifecycle({
//         mapMount() {
//             var directionsService = new DirectionsService();
//             // var directionsRenderer = new DirectionsRenderer();
//             DirectionsService.route({
//                 origin: "125 Spence St, College Station, TX 77840",
//                 destination: new LatLng(30.61234195012257, -96.34153287461642),
//                 travelMode: TravelMode.DRIVING,
//             }, (result, status) => {
//                 if (status === DirectionsService.OK) {
//                     this.setState({
//                         directions: result,
//                     });
//                 } else {
//                     console.error(`Could not generate map`);
//                 }
//             });
//         }
//     })
// )(props =>
//     <GoogleMap
//         defaultZoom={14}
//         defaultCenter={new LatLng(30.61234195012257, -96.34153287461642)}
//     >
//         {props.directions && <DirectionsRenderer directions={props.directions} />}
//     </GoogleMap>)
//     < mapsAPI />

// export default React.memo(mapsAPI)

// import React from "react";
// import { compose, withProps, lifecycle } from "recompose";
// const {
//     withScriptjs,
//     withGoogleMap,
//     GoogleMap,
//     DirectionsRenderer,
//     DirectionsService,
//     TravelMode
// } = require("@react-google-maps/api");


// const MapWithADirectionsRenderer = compose(
//     withProps({
//         googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAh_4bM5xonPGKrJ49pgcRlmyrY8AR7H68&v=3.exp&libraries=geometry,drawing,places",
//         loadingElement: <div style={{ height: `100%` }} />,
//         containerElement: <div style={{ height: `400px` }} />,
//         mapElement: <div style={{ height: `100%` }} />,
//     }),
//     withScriptjs,
//     withGoogleMap,
//     lifecycle({
//         componentDidMount() {
//             const getDirec = new DirectionsService();

//             getDirec.route({
//                 origin: "125 Spence St, College Station, TX 77840",
//                 destination: { lat: 30.61234195012257, lng: -96.34153287461642 },
//                 travelMode: TravelMode.DRIVING,
//             }, (result, status) => {
//                 if (status === getDirec.OK) {
//                     this.setState({
//                         directions: result,
//                     });
//                 } else {
//                     console.error(`error fetching directions ${result}`);
//                 }
//             });
//         }
//     })
// )(props =>
//     <GoogleMap
//         defaultZoom={7}
//         defaultCenter={{ lat: 30.61234195012257, lng: -96.34153287461642 }}
//     >
//         {props.directions && <DirectionsRenderer directions={props.directions} />}
//     </GoogleMap>
// );

// <MapWithADirectionsRenderer />

// export default mapsAPI;

// export default React.memo(MapWithADirectionsRenderer);
