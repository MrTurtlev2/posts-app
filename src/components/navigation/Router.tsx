import {Route, Routes} from "react-router-dom";
import NavBar from "./NavBar";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import React from "react";

const Router = () => {


    return (
        <Routes>
            <Route path="/" element={<NavBar/>}>
                <Route index element={<Login/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}
export default Router