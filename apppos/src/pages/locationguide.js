import React, { useEffect, Fragment, useState } from "react";
import MapsAPI from "./directions.js";

function LocationGuide() {
    let component = <MapsAPI />
    return (<Fragment>
        <h1>Here's our nearest Location!</h1>
        {component}
        <a href="/pizzatype">
            <button >Back to Home Screen</button>
        </a>
    </Fragment>);
}

export default LocationGuide;