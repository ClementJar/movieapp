import {Outlet} from "react-router-dom";

import Nav from "../components/Nav";
import React from "react";

export default function Home(props) {
    return (
        <>
            <Nav/>
            <Outlet />
        </>
    )
}