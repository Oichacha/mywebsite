import '../css_file/App.css';
import React from 'react'
import Projects from './Project.js'
import AboutMe from './AboutMe.js'
import { motion } from "framer-motion"

function Content(props){
    if (props.name === "Projects"){
        return(
            <div className = "content-wrapper">
                <h2>{props.name}</h2>
                    <div className = "content-layout">
                        <Projects />
                    </div>
            </div>
        )
    }

    else if (props.name === "About Me")
        return(
            <div className = "content-wrapper">
                <h2>{props.name}</h2>
                    <div className = "content-layout">
                        <AboutMe />
                    </div>
            </div>
        )
}

export default Content