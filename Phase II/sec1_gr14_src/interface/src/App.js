import React from "react";
import {Route, Routes} from "react-router-dom";
import InsertUser from "./insertUser";
import Navbar from "./Navbar";
import Login from "./Login";
import Homepage from "./Homepage";
import InsertProduct from "./insertProduct";

function App(){
    return(
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} /> 
                <Route path="/manageUsers" element={<InsertUser />} />
                <Route path="/manageProducts" element={<InsertProduct />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}
export default App