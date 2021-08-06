import '../css_file/App.css';
import React from 'react'
import { motion } from "framer-motion"

function Visual() {

    const titleVariant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5
            }
        }
    }
    const subTitleVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 1.5
            }
        }
    }

    return(
        <div>
            <motion.h1 
                variants = {titleVariant} 
                initial = "hidden" 
                animate = "visible"
                style = {{fontSize: '42px'}}>
                Hey there, I am <code>Ilda</code>
            </motion.h1>
            
            <motion.h2 variants = {subTitleVariants} 
                initial = "hidden" 
                animate = "visible"
                style = {{fontWeight: 'bold'}}>
                Feel free to pick my brain!
            </motion.h2>
            
        </div>
    )
}
  

export default Visual;