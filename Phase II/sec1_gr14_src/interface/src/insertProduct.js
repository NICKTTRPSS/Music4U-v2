import React from "react";
import SearchProduct from "./SearchProduct";
import "./insert.css";
import { useState } from 'react';
import Axios from "axios";


function InsertProduct() {
    const [musicid, setMusicid] = useState(0);
    const [musicname,setMusicname] = useState("");
    const [author, setAuthor] = useState("");
    const [spotify, setSpotify] = useState("");
    const [apple, setApple] = useState("");
    const [joox, setJoox] = useState("");
    const [mv, setMv] = useState("");
    const [musicList, setMusicList] = useState([]);

    const addMusic = () => {
        Axios.post("http://localhost:3001/insertMusic", {
            musicid: musicid,
            musicname: musicname,
            author: author,
            spotify: spotify,
            apple: apple,
            joox: joox,
            mv: mv
        }).then(() => {
            setMusicList([
                ...musicList,
                {
                    musicid: musicid,
                    musicname: musicname,
                    author: author,
                    spotify: spotify,
                    apple: apple,
                    joox: joox,
                    mv: mv
                }
            ])
        })
    }
    
    return(
        <div className="container">
            <div className="information">
            <h1>Insert new Music</h1>
            <form action="">
                <div className="boxinsert">
                <label htmlFor="musicid">MusicID:</label>
                <input
                    type="number"
                    className="insertform"
                    placeholder="Enter MusicID"
                    onChange={(event) => {
                    setMusicid(event.target.value)
                    }}
                />
                </div>
                <div className="boxinsert">
                <label htmlFor="musicname">Music Name:</label>
                <input
                    type="text"
                    className="insertform"
                    placeholder="Enter Music Name"
                    onChange={(event) => {
                    setMusicname(event.target.value)
                    }}
                />
                </div>
                <div className="boxinsert">
                <label htmlFor="author">Artist:</label>
                <input
                    type="text"
                    className="insertform"
                    placeholder="Enter Artist"
                    onChange={(event) => {
                    setAuthor(event.target.value)
                    }}
                />
                </div>
                <div className="boxinsert">
                <label htmlFor="spotify">Spotify:</label>
                <input
                    type="text"
                    className="insertform"
                    placeholder="Enter Spotify"
                    onChange={(event) => {
                    setSpotify(event.target.value)
                    }}
                />
                </div>
                <div className="boxinsert">
                <label htmlFor="apple">Apple Music:</label>
                <input
                    type="text"
                    className="insertform"
                    placeholder="Enter Apple Music"
                    onChange={(event) => {
                    setApple(event.target.value)
                    }}
                />
                </div>
                <div className="boxinsert">
                <label htmlFor="joox">Joox:</label>
                <input
                    type="text"
                    className="insertform"
                    placeholder="Enter Joox"
                    onChange={(event) => {
                    setJoox(event.target.value)
                    }}
                />
                </div>
                <div className="boxinsert">
                <label htmlFor="mv">MV:</label>
                <input
                    type="text"
                    className="insertform"
                    placeholder="Enter MV Link"
                    onChange={(event) => {
                    setMv(event.target.value)
                    }}
                />
                </div>
                <button onClick={addMusic} class="btnadd">
                Add new music
                </button>
            </form>
            </div>
            <div className="music">
                <SearchProduct/>
            </div>
        </div>
    );
}
export default InsertProduct;