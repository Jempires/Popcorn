import React from "react";
import '..styles/BackgroungVideo.css';

function BackgroungVideo () {
    return (
        <div>
            <video loop muted autoPlay id="bg-video">
                <source src={require('../assets/')}/>

            </video>
        </div>
    )
}