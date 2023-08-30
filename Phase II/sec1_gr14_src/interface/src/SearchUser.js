import React, { useEffect } from "react";
import Axios from "axios";
import { useState } from 'react';
import "./insert.css";

function SearchUsers() {
    const [newuserid, newsetUserid] = useState(0);
    const [newfirstname,newsetFirstname] = useState("");
    const [newlastname, newsetLastname] = useState("");
    const [newusername, newsetUsername] = useState("");
    const [newusPassword, newsetPassword] = useState("");
    const [newrole, newsetRole] = useState("");
    const [userList, setUserList] = useState([]);

    const [search, setSearch] = useState("");
    const [type, setType] = useState("");

    const updateUserID = (id) => {
        Axios.put("http://localhost:3001/updateUserID", { UserID: newuserid, id: id}).then(
          (response) => {
            setUserList(
              userList.map((val) => {
                return val.id === id ? {
                    userid: newuserid,
                    firstname: val.firstname,
                    lastname: val.lastname,
                    username: val.username,
                    password: val.usPassword,
                    role: val.role
                    }
                  : val;
              })
            );
          }
        );
    };

    const updateFirstname = (id) => {
        Axios.put("http://localhost:3001/updateFirstname", { Firstname: newfirstname, id: id}).then(
          (response) => {
            setUserList(
              userList.map((val) => {
                return val.id === id ? {
                    userid: val.userid,
                    firstname: newfirstname,
                    lastname: val.lastname,
                    username: val.username,
                    password: val.usPassword,
                    role: val.role
                    }
                  : val;
              })
            );
          }
        );
    };

    const updateLastname = (id) => {
        Axios.put("http://localhost:3001/updateLastname", { Lastname: newlastname, id: id}).then(
          (response) => {
            setUserList(
              userList.map((val) => {
                return val.id === id ? {
                    userid: val.userid,
                    firstname: val.firstname,
                    lastname: newlastname,
                    username: val.username,
                    password: val.usPassword,
                    role: val.role
                    }
                  : val;
              })
            );
          }
        );
    };

    const updateUsername = (id) => {
        Axios.put("http://localhost:3001/updateUsername", { Username: newusername, id: id}).then(
          (response) => {
            setUserList(
              userList.map((val) => {
                return val.id === id ? {
                    userid: val.userid,
                    firstname: val.firstname,
                    lastname: val.lastname,
                    username: newusername,
                    password: val.usPassword,
                    role: val.role
                    }
                  : val;
              })
            );
          }
        );
    };

    const updatePassword = (id) => {
        Axios.put("http://localhost:3001/updatePassword", { Passwords: newusPassword, id: id}).then(
          (response) => {
            setUserList(
              userList.map((val) => {
                return val.id === id ? {
                    userid: val.userid,
                    firstname: val.Firstname,
                    lastname: val.Lastname,
                    username: val.username,
                    password: newusPassword,
                    role: val.role
                    }
                  : val;
              })
            );
          }
        );
    };

    const updateRole = (id) => {
        Axios.put("http://localhost:3001/updateRole", { UserRole: newrole, id: id}).then(
          (response) => {
            setUserList(
              userList.map((val) => {
                return val.id === id ? {
                    userid: val.userid,
                    firstname: val.Firstname,
                    lastname: val.Lastname,
                    username: val.username,
                    password: val.usPassword,
                    role: newrole
                    }
                  : val;
              })
            );
          }
        );
    };

    const deleteUser = (UserID) => {
        Axios.delete(`http://localhost:3001/deleteUser/${UserID}`).then((response) => {
            setUserList(
              userList.filter((val) => {
                return val.UserID !== UserID;
              })
            );
        });
    }

    useEffect(() => {
        const fetchUser = async () =>{
            const res = await Axios.get(`http://localhost:3001/users?type=${type}&search=${search}`)
            setUserList(res.data);
        }
        fetchUser()
    }, [type, search]);

    return(
        <div className="App container">
            <div className="user">
                <h1>Users Information</h1>
                <label>Search By:</label>
                <select onChange={(event) => {setType(event.target.value)}}>
                        <option value=""></option>
                        <option value="userid">ID</option>
                        <option value="firstname">Firstname</option>
                        <option value="username">Username</option>
                        <option value="userrole">Role</option>
                </select>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="form-control" 
                    onChange={(event) => {setSearch(event.target.value)}}
                />
                {userList.map((val, key) => {
                    return (
                        <div className="userval">
                            <div className="card">
                                <p className="text">UserID: {val.UserID}</p>
                                <div className="datauser">
                                    <input
                                        className="insertform"
                                        style={{ width: "50px" }}
                                        type="text"
                                        placeholder="UserID..."
                                        onChange={(event) => {
                                            newsetUserid(event.target.value)
                                        }}
                                    />
                                    <button className="btnupUser" onClick={() => {updateUserID(val.UserID)}}>Update</button>
                                </div>
                                <p className="text">Firstname: {val.Firstname}</p>
                                <div className="datauser">
                                    <input
                                        className="insertform"
                                        style={{ width: "100px" }}
                                        type="text"
                                        placeholder="Firstname..."
                                        onChange={(event) => {
                                            newsetFirstname(event.target.value)
                                        }}
                                    />
                                    <button className="btnupUser" onClick={() => {updateFirstname(val.UserID)}}>Update</button>
                                </div>
                                <p className="text">Lastname: {val.Lastname}</p>
                                <div className="datauser">
                                    <input
                                        className="insertform"
                                        style={{ width: "100px" }}
                                        type="text"
                                        placeholder="Lastname..."
                                        onChange={(event) => {
                                            newsetLastname(event.target.value)
                                        }}
                                    />
                                    <button className="btnupUser" onClick={() => {updateLastname(val.UserID)}}>Update</button>
                                </div>
                                <p className="text">Username: {val.Username}</p>
                                <div className="datauser">
                                    <input
                                        className="insertform"
                                        style={{ width: "100px" }}
                                        type="text"
                                        placeholder="Username..."
                                        onChange={(event) => {
                                            newsetUsername(event.target.value)
                                        }}
                                    />
                                    <button className="btnupUser" onClick={() => {updateUsername(val.UserID)}}>Update</button>
                                </div>
                                <p className="text">Password: {val.Passwords}</p>
                                <div className="datauser">
                                    <input
                                        className="insertform"
                                        style={{ width: "100px" }}
                                        type="text"
                                        placeholder="Password..."
                                        onChange={(event) => {
                                            newsetPassword(event.target.value)
                                        }}
                                    />
                                    <button className="btnupUser" onClick={() => {updatePassword(val.UserID)}}>Update</button>
                                </div>
                                <p className="text">Role: {val.UserRole}</p>
                                <div className="datauser">
                                    <input
                                        className="insertform"
                                        style={{ width: "100px" }}
                                        type="text"
                                        placeholder="Role..."
                                        onChange={(event) => {
                                            newsetRole(event.target.value)
                                        }}
                                    />
                                    <button className="btnupUser" onClick={() => {updateRole(val.UserID)}}>Update</button>
                                </div>
                            </div>
                            <button className="btndelete" onClick={() => {deleteUser(val.UserID)}}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SearchUsers;