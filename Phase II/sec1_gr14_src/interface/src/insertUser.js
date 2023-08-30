import React from "react";

import "./insert.css";
import { useState } from 'react';
import Axios from "axios";
import SearchUsers from "./SearchUser";

function Insert() {
    const [userid, setUserid] = useState(0);
    const [firstname,setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [usPassword, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [userList, setUserList] = useState([]);

    const addUser = () => {
        Axios.post("http://localhost:3001/insert", {
            userid: userid,
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: usPassword,
            role: role
        }).then(() => {
            setUserList([
                ...userList,
                {
                    userid: userid,
                    firstname: firstname,
                    lastname: lastname,
                    username: username,
                    password: usPassword,
                    role: role
                }
            ])
        })
    }
    
    return(
        <div className="container">
            <div className="information">
            <h1>Insert new User</h1>
            <form action="">
                <div className="boxinsert">
                <label htmlFor="userid">UserID:</label>
                <input
                    type="number"
                    className="insertform"
                    placeholder="Enter UserID"
                    onChange={(event) => {
                    setUserid(event.target.value)
                    }}
                />
                </div>
                <div className="boxinsert">
                <label htmlFor="firstname">Firstname:</label>
                <input
                    type="text"
                    className="insertform"
                    placeholder="Enter Firstname"
                    onChange={(event) => {
                    setFirstname(event.target.value)
                    }}
                />
                </div>
                <div className="boxinsert">
                <label htmlFor="lastname">Lastname:</label>
                <input
                    type="text"
                    className="insertform"
                    placeholder="Enter Lastname"
                    onChange={(event) => {
                    setLastname(event.target.value)
                    }}
                />
                </div>
                <div className="boxinsert">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    className="insertform"
                    placeholder="Enter Username"
                    onChange={(event) => {
                    setUsername(event.target.value)
                    }}
                />
                </div>
                <div className="boxinsert">
                <label htmlFor="password">Password:</label>
                <input
                    type="text"
                    className="insertform"
                    placeholder="Enter Password"
                    onChange={(event) => {
                    setPassword(event.target.value)
                    }}
                />
                </div>
                <div className="boxinsert">
                <label htmlFor="role">Role:</label>
                <input
                    type="text"
                    className="insertform"
                    placeholder="Enter Role"
                    onChange={(event) => {
                    setRole(event.target.value)
                    }}
                />
                </div>
                <button onClick={addUser} class="btnadd">
                Add new user
                </button>
            </form>
            </div>
            <div className="user">
                <SearchUsers />
            </div>
        </div>
    );
}

export default Insert;