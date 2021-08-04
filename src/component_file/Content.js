import '../css_file/App.css';
import React from 'react'
import Projects from './Project.js'
import AboutMe from './AboutMe.js'
import Footer from './Footer.js'
import { motion } from "framer-motion"

function Content(props){

    const contentVariant = {
        hidden: {
            x: '40vw'
        },
        visible: {
            x: 0
        }
    }

    if (props.name === "Projects"){
        return(
            <motion.div className = "content-wrapper">
                <h2>{props.name}</h2>
                    <motion.div className = "content-layout"
                        variants = {contentVariant}
                        initial = "hidden"
                        animate = "visible">
                        <Projects />
                        <Footer />
                    </motion.div>
            </motion.div>
        )
    }

    else if (props.name === "About Me")
        return(
            <div className = "content-wrapper">
                <h2>{props.name}</h2>
                    <motion.div className = "content-layout"
                        variants = {contentVariant}
                        initial = "hidden"
                        animate = "visible">
                        <AboutMe />
                        <Footer />
                    </motion.div>
            </div>
        )
}

export default Content