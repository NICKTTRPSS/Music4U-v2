import React from "react";
import "./Home.css";
import hpimage from "./hp1better.jpg";

function Homepage(){
    return(
        <div className="first">
            <img src={hpimage} alt="hp" className="imghp" />
                <div className ="para1">
                    <h3>What is Music4U?</h3>
                    <div className="text1">
                        Music4u is a website that provides information about songs, which information will tell about, What music streaming is this song on, artist or album name or the lyrics of songs.
                    </div>
                </div>
            <div className="footer">
                <h5>Music4U since 2022</h5>
            </div>
        </div>
    )
}
export default Homepage