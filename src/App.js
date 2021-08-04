import './css_file/App.css';
import Visual from './component_file/Visual.js';
import React from 'react';
import { motion } from "framer-motion";
import { Component } from 'react';

class App extends Component {
  constructor(){
    super()

    this.state = {
      showContent: false,
      clickedButton: false,
      typeContent: ""
    }
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(event){
    const {name} = event.target
    this.setState({
      typeContent: name
    })
    if (this.state.showContent === false) {
      this.setState({showContent: true}) 
    }

    else if (name === "Close Me") {
      this.setState({showContent: false})
    }
  }

  render(){
    const buttonVariant = {
      hidden: {
        x: '100vw'
      },
      visible: {
        x: 0,
        transition: {
          delay: 2.5
        }
      }
    }
    const visualWrapperVariant = {
      beforeClicked: {
        width: '100%'
      },
      afterClicked: {
        width: '40%'
      }
    }
    
    return(
    <div>
      <motion.div className = "visual-wrapper"
        variants = {visualWrapperVariant}
        initial = "beforeClicked"
        animate = {this.state.showContent ? "afterClicked" : "beforeClicked"}
        >

        <Visual />
          <motion.div className = "button-layout"
            variants = {buttonVariant} 
            initial = "hidden"
            animate = "visible">

              <button 
                name = "Projects"
                onClick = {this.handleClick}>
                Projects
              </button>

              <button 
                name = "About Me" 
                onClick = {this.handleClick}>
                About Me
              </button>

              <button 
                name = "Close Me"
                onClick = {this.handleClick}>
                Close Me
              </button>
          </motion.div>

      </motion.div>
    </div>
    )

    

  }
}
  

export default App;
