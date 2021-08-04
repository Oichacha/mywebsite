import './css_file/App.css';
import Visual from './component_file/Visual.js';
import React from 'react';
import { motion } from "framer-motion";
import { Component } from 'react';

class App extends Component {
  constructor(){
    super()
  }
  
  render(){
    return(
    <div>
      <div className = "visual-wrapper">
        <Visual />
      </div>
    </div>
    )
  }
}
  

export default App;
