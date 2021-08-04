import '../css_file/App.css';
import React from 'react'
import { motion } from "framer-motion"

function Visual() {

    return(
        <div className = "visual-wrapper">
            <motion.h1>Hey there, I am <code>Ilda</code></motion.h1>
            
            <motion.h3>Feel free to pick my brain!</motion.h3>
        </div>
    )
}
  

export default Visual;