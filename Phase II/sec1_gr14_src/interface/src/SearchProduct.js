import React, { useEffect } from "react";
import Axios from "axios";
import { useState } from 'react';
import "./insert.css";

function SearchProduct() {
    const [newmusicid, newsetMusicid] = useState(0);
    const [newmusicname,newsetMusicname] = useState("");
    const [newauthor, newsetAuthor] = useState("");
    const [newspotify, newsetSpotify] = useState("");
    const [newapple, newsetApple] = useState("");
    const [newjoox, newsetJoox] = useState("");
    const [newmv, newsetMv] = useState("");

    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [musicList, setMusicList] = useState([]);

    const updateMusicID = (id) => {
        Axios.put("http://localhost:3001/updateMusicID", { MusicID: newmusicid, id: id}).then(
          (response) => {
            setMusicList(
              musicList.map((val) => {
                return val.id === id ? {
                    MusicID: newmusicid,
                    MusicName: val.musicname,
                    Author: val.author,
                    Spotify: val.spotify,
                    Apple: val.apple,
                    Joox: val.joox,
                    MV: val.mv
                    }
                  : val;
              })
            );
          }
        );
    };

    const updateMusicName = (id) => {
        Axios.put("http://localhost:3001/updateMusicName", { MusicName: newmusicname, id: id}).then(
          (response) => {
            setMusicList(
              musicList.map((val) => {
                return val.id === id ? {
                    MusicID: val.musicid,
                    MusicName: newmusicname,
                    Author: val.author,
                    Spotify: val.spotify,
                    Apple: val.apple,
                    Joox: val.joox,
                    MV: val.mv
                    }
                  : val;
              })
            );
          }
        );
    };

    const updateAuthor = (id) => {
        Axios.put("http://localhost:3001/updateAuthor", { Author: newauthor, id: id}).then(
          (response) => {
            setMusicList(
              musicList.map((val) => {
                return val.id === id ? {
                    MusicID: val.musicid,
                    MusicName: val.musicname,
                    Author: newauthor,
                    Spotify: val.spotify,
                    Apple: val.apple,
                    Joox: val.joox,
                    MV: val.mv
                    }
                  : val;
              })
            );
          }
        );
    };

    const updateSpotify = (id) => {
        Axios.put("http://localhost:3001/updateSpotify", { Spotify: newspotify, id: id}).then(
          (response) => {
            setMusicList(
              musicList.map((val) => {
                return val.id === id ? {
                    MusicID: val.musicid,
                    MusicName: val.musicname,
                    Author: val.author,
                    Spotify: newspotify,
                    Apple: val.apple,
                    Joox: val.joox,
                    MV: val.mv
                    }
                  : val;
              })
            );
          }
        );
    };

    const updateApple = (id) => {
        Axios.put("http://localhost:3001/updateApple", { Apple: newapple, id: id}).then(
          (response) => {
            setMusicList(
              musicList.map((val) => {
                return val.id === id ? {
                    MusicID: val.musicid,
                    MusicName: val.musicname,
                    Author: val.author,
                    Spotify: val.spotify,
                    Apple: newapple,
                    Joox: val.joox,
                    MV: val.mv
                    }
                  : val;
              })
            );
          }
        );
    };

    const updateJoox = (id) => {
        Axios.put("http://localhost:3001/updateJoox", { Joox: newjoox, id: id}).then(
          (response) => {
            setMusicList(
              musicList.map((val) => {
                return val.id === id ? {
                    MusicID: val.musicid,
                    MusicName: val.musicname,
                    Author: val.author,
                    Spotify: val.spotify,
                    Apple: val.apple,
                    Joox: newjoox,
                    MV: val.mv
                    }
                  : val;
              })
            );
          }
        );
    };

    const updateMv = (id) => {
        Axios.put("http://localhost:3001/updateMv", { MV: newmv, id: id}).then(
          (response) => {
            setMusicList(
              musicList.map((val) => {
                return val.id === id ? {
                    MusicID: val.musicid,
                    MusicName: val.musicname,
                    Author: val.author,
                    Spotify: val.spotify,
                    Apple: val.apple,
                    Joox: val.joox,
                    MV: newmv
                    }
                  : val;
              })
            );
          }
        );
    };

    const deleteMusic = (MusicID) => {
        Axios.delete(`http://localhost:3001/deleteMusic/${MusicID}`).then((response) => {
            setMusicList(
              musicList.filter((val) => {
                return val.MusicID !== MusicID;
              })
            );
        });
    }

    useEffect(() => {
        const fetchMusic = async () =>{
            const res = await Axios.get(`http://localhost:3001/musics?type=${type}&search=${search}`)
            setMusicList(res.data);
        }
        fetchMusic()
    }, [type, search]);

    return(
        <div className="App container">
            <div className="music">
                <h1>Musics Information</h1>
                <label>Search By:</label>
                <select onChange={(event) => {setType(event.target.value)}}>
                        <option value=""></option>
                        <option value="MusicName">Music Name</option>
                        <option value="Author">Artist</option>
                        <option value="MusicID">ID</option>
                </select>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="form-control" 
                    onChange={(event) => {setSearch(event.target.value)}}
                />
                {musicList.map((val, key) => {
                    return (
                        <div className="musicval">
                            <div className="card">
                                <p className="text">MusicID: {val.MusicID}</p>
                                <div className="datamusic">
                                    <input
                                        className="insertform"
                                        style={{ width: "50px" }}
                                        type="text"
                                        placeholder="MusicID..."
                                        onChange={(event) => {
                                            newsetMusicid(event.target.value)
                                        }}
                                    />
                                    <button className="btnupMusic" onClick={() => {updateMusicID(val.MusicID)}}>Update</button>
                                </div>
                                <p className="text">MusicName: {val.MusicName}</p>
                                <div className="datamusic">
                                    <input
                                        className="insertform"
                                        style={{ width: "100px" }}
                                        type="text"
                                        placeholder="Music Name..."
                                        onChange={(event) => {
                                            newsetMusicname(event.target.value)
                                        }}
                                    />
                                    <button className="btnupMusic" onClick={() => {updateMusicName(val.MusicID)}}>Update</button>
                                </div>
                                <p className="text">Author: {val.Author}</p>
                                <div className="datamusic">
                                    <input
                                        className="insertform"
                                        style={{ width: "100px" }}
                                        type="text"
                                        placeholder="Artist..."
                                        onChange={(event) => {
                                            newsetAuthor(event.target.value)
                                        }}
                                    />
                                    <button className="btnupMusic" onClick={() => {updateAuthor(val.MusicID)}}>Update</button>
                                </div>
                                <p className="text">Spotify: {val.Spotify}</p>
                                <div className="datamusic">
                                    <input
                                        className="insertform"
                                        style={{ width: "100px" }}
                                        type="text"
                                        placeholder="Spotify..."
                                        onChange={(event) => {
                                            newsetSpotify(event.target.value)
                                        }}
                                    />
                                    <button className="btnupMusic" onClick={() => {updateSpotify(val.MusicID)}}>Update</button>
                                </div>
                                <p className="text">Apple Music: {val.Apple}</p>
                                <div className="datamusic">
                                    <input
                                        className="insertform"
                                        style={{ width: "100px" }}
                                        type="text"
                                        placeholder="Apple Music..."
                                        onChange={(event) => {
                                            newsetApple(event.target.value)
                                        }}
                                    />
                                    <button className="btnupMusic" onClick={() => {updateApple(val.MusicID)}}>Update</button>
                                </div>
                                <p className="text">Joox: {val.Joox}</p>
                                <div className="datamusic">
                                    <input
                                        className="insertform"
                                        style={{ width: "100px" }}
                                        type="text"
                                        placeholder="Joox Music..."
                                        onChange={(event) => {
                                            newsetJoox(event.target.value)
                                        }}
                                    />
                                    <button className="btnupMusic" onClick={() => {updateJoox(val.MusicID)}}>Update</button>
                                </div>
                            </div>
                            <div className="MVbox">
                                <p className="text">MV: {val.MV}</p>
                                    <div className="datamusic">
                                        <input
                                            className="insertform"
                                            style={{ width: "200px" }}
                                            type="text"
                                            placeholder="MV..."
                                            onChange={(event) => {
                                                newsetMv(event.target.value)
                                            }}
                                        />
                                        <button className="btnupMV" onClick={() => {updateMv(val.MusicID)}}>Update</button>
                                    </div>
                            </div>
                            <button className="btndelete" onClick={() => {deleteMusic(val.MusicID)}}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SearchProduct;