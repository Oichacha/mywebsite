import '../css_file/App.css';
import React from 'react'
import myFace from '../picture_file/circle-cropped.png'

function AboutMe(){
    return(
        <div className = "aboutme-layout">
            <img className = "my-picture"
                src = {myFace} 
                alt = "This is Me!">
            </img>
        </div>
    )
}

export default AboutMe
