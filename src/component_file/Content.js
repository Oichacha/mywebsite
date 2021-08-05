import '../css_file/App.css';
import React from 'react'
import Projects from './Project.js'
import AboutMe from './AboutMe.js'
import Footer from './Footer.js'
import { motion } from "framer-motion"

function Content(props){

    const contentVariant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.25
            }
        }
    }

    if (props.name === "Projects"){
        return(
            <motion.div className = "content-wrapper">
                
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