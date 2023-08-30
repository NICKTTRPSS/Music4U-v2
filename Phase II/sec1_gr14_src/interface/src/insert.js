import React from "react";
import "./insert.css";
import { useState } from 'react';
import Axios from "axios";


function Insert() {
    const [userid, setUserid] = useState(0);
    const [firstname,setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [usPassword, setPassword] = useState("");
    const [role, setRole] = useState("");

    const [newuserid, newsetUserid] = useState(0);
    const [newfirstname,newsetFirstname] = useState("");
    const [newlastname, newsetLastname] = useState("");
    const [newusername, newsetUsername] = useState("");
    const [newusPassword, newsetPassword] = useState("");
    const [newrole, newsetRole] = useState("");

    const [userList, setUserList] = useState([]);

    const getUsers = () =>{   
        Axios.get("http://localhost:3001/users").then((response) => {
            setUserList(response.data);
        });
    }

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

    const updateUserID = (id) => {
        Axios.put("http://localhost:3001/update", { UserID: newuserid, id: id}).then(
          (response) => {
            setUserList(
              userList.map((val) => {
                return val.id == id ? {
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

    const updateFirstname = (UserID) => {
        Axios.put("http://localhost:3001/updateFirstname", { Firstname: newfirstname, UserID: UserID}).then(
          (response) => {
            setUserList(
              userList.map((val) => {
                return val.UserID == UserID ? {
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
                return val.id == id ? {
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
                return val.id == id ? {
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
                return val.id == id ? {
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
                return val.id == id ? {
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
        Axios.delete(`http://localhost:3001/delete/${UserID}`).then((response) => {
            setUserList(
              userList.filter((val) => {
                return val.UserID != UserID;
              })
            );
        });
    }

    
    return(
        <div className="App container">
            <h1>Insert new User</h1>
            <div className="information">
            <form action="">
                <div className="mb-3">
                <label className="form-label" htmlFor="userid">
                    UserID:
                </label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Enter UserID"
                    onChange={(event) => {
                    setUserid(event.target.value)
                    }}
                />
                </div>
                <div className="mb-3">
                <label htmlFor="firstname">Firstname:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Firstname"
                    onChange={(event) => {
                    setFirstname(event.target.value)
                    }}
                />
                </div>
                <div className="mb-3">
                <label htmlFor="lastname">Lastname:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Lastname"
                    onChange={(event) => {
                    setLastname(event.target.value)
                    }}
                />
                </div>
                <div className="mb-3">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Username"
                    onChange={(event) => {
                    setUsername(event.target.value)
                    }}
                />
                </div>
                <div className="mb-3">
                <label htmlFor="password">Password:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Password"
                    onChange={(event) => {
                    setPassword(event.target.value)
                    }}
                />
                </div>
                <div className="mb-3">
                <label htmlFor="role">Role:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Role"
                    onChange={(event) => {
                    setRole(event.target.value)
                    }}
                />
                </div>
                <button onClick={addUser} class="btn btn-success">
                Add new user
                </button>
            </form>
            </div>
            <div className="user">
                <h1>User Information</h1>
                <button className='btnshow' onClick={getUsers}>Show Users</button>
                {userList.map((val, key) => {
                    return (
                        <div className="App">
                            <div className="card">
                                <p className="text">UserID: {val.UserID}</p>
                                <div className="d-flex">
                                    <input
                                        className="form-control"
                                        style={{ width: "50px" }}
                                        type="text"
                                        placeholder="UserID..."
                                        onChange={(event) => {
                                            newsetUserid(event.target.value)
                                        }}
                                    />
                                    <button className="btn btn-warning" onClick={() => {updateUserID(val.UserID)}}>Update</button>
                                </div>
                                <p className="text">Firstname: {val.Firstname}</p>
                                <div className="d-flex">
                                    <input
                                        className="form-control"
                                        style={{ width: "100px" }}
                                        type="text"
                                        placeholder="Firstname..."
                                        onChange={(event) => {
                                            newsetFirstname(event.target.value)
                                        }}
                                    />
                                    <button className="btn btn-warning" onClick={() => {updateFirstname(val.UserID)}}>Update</button>
                                </div>
                                <p className="text">Lastname: {val.Lastname}</p>
                                <div className="d-flex">
                                    <input
                                        className="form-control"
                                        style={{ width: "100px" }}
                                        type="text"
                                        placeholder="Lastname..."
                                        onChange={(event) => {
                                            newsetLastname(event.target.value)
                                        }}
                                    />
                                    <button className="btn btn-warning" onClick={() => {updateLastname(val.UserID)}}>Update</button>
                                </div>
                                <p className="text">Username: {val.Username}</p>
                                <div className="d-flex">
                                    <input
                                        className="form-control"
                                        style={{ width: "100px" }}
                                        type="text"
                                        placeholder="Username..."
                                        onChange={(event) => {
                                            newsetUsername(event.target.value)
                                        }}
                                    />
                                    <button className="btn btn-warning" onClick={() => {updateUsername(val.UserID)}}>Update</button>
                                </div>
                                <p className="text">Password: {val.Passwords}</p>
                                <div className="d-flex">
                                    <input
                                        className="form-control"
                                        style={{ width: "100px" }}
                                        type="text"
                                        placeholder="Password..."
                                        onChange={(event) => {
                                            newsetPassword(event.target.value)
                                        }}
                                    />
                                    <button className="btn btn-warning" onClick={() => {updatePassword(val.UserID)}}>Update</button>
                                </div>
                                <p className="text">Role: {val.UserRole}</p>
                                <div className="d-flex">
                                    <input
                                        className="form-control"
                                        style={{ width: "100px" }}
                                        type="text"
                                        placeholder="Role..."
                                        onChange={(event) => {
                                            newsetRole(event.target.value)
                                        }}
                                    />
                                    <button className="btn btn-warning" onClick={() => {updateRole(val.UserID)}}>Update</button>
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

export default Insert;