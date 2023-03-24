import { Route, Routes } from "react-router-dom";
import AddSprint from "../Component/Add Sprint/AddSprint";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import SignUp from "../Component/SignUp/SignUp";

export default function AllRotes(){
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/add-sprint" element={<AddSprint />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
        </Routes>
    )
}