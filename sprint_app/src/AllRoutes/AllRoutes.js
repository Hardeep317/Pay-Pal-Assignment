import { Route, Routes } from "react-router-dom";
import AddSprint from "../Component/Add Sprint/AddSprint";
import Home from "../Component/Home/Home";

export default function AllRotes(){
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/add-sprint" element={<AddSprint />}/>
        </Routes>
    )
}