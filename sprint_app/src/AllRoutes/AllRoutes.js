import { Route, Routes } from "react-router-dom";
import AddSprint from "../Component/Add Sprint/AddSprint";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import SignUp from "../Component/SignUp/SignUp";
import {PrivateRoute} from "./PrivateRoute";

export default function AllRotes({userDetails, setUserDetails}){
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}/>
            <Route path="/add-sprint" element={<AddSprint />}/>
            <Route path="/login" element={<Login userDetails={userDetails} setUserDetails={setUserDetails} />}/>
            <Route path="/signup" element={<SignUp />}/>
        </Routes>
    )
}