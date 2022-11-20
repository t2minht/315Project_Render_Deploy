import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// function mapsAPI() {
//     return (
//         <div>
//             <title>Google Maps API Directions Services</title>
//             <div id="map" style="height:100vh"></div>
//             <script src=" https://maps.googleapis.com/maps/api/js?key=AIzaSyD8YX0txuyaSV1Ht3augMmhARVzqMlrfTw"></script>
//             <script src="maps.js"></script>
//         </div>
//     );
// }


export default function mapsAPI() {
    const { } = useLoadScript({ googleMapsApiKey: "AIzaSyD8YX0txuyaSV1Ht3augMmhARVzqMlrfTw" });
    return <div>Map</div>;
}

function makeMap() {
    return <GoogleMap zoom={16} center={{ lat: 30.61234195012257, lng: -96.34153287461642 }} mapContainerClassName="mapDimensions"></GoogleMap>
}