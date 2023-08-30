import React from "react";
import { useState } from "react";
import Axios from "axios";

import "./login.css";


function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = () => {
        Axios.post("http://localhost:3001/login", {
            Username: username,
            Passwords: password,
        }).then((response) =>{
            if (response.data.message){
                alert(response.data.message);
            }else{
                alert("Login Success. Welcome, " + response.data[0].Username)
            }
        });
    }
    return(
        <div className="login">
            <div className="loginform">
                <h1>Login</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Username..."
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password..."
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    </div>
                <button className="btnlogin" onClick={login}>Login</button>
            </div>
            <div className="footer">
                <h5>Music4U since 2022</h5>
            </div>
        </div>
    )
}

export default Login;