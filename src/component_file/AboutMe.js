import '../css_file/App.css';
import React from 'react'
import myFace from '../picture_file/circle-cropped.png'

function AboutMe(){
    const subContentVariant1 = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 5
            }
        }
    }
    const subContentVariant2 = {
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
    const subContentVariant3 = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 2
            }
        }
    }

    return(

        <div className = "aboutme-layout">
            <img className = "my-picture"
                src = {myFace} 
                alt = "This is Me!">
            </img>

            <h3>
                UW Bothell || CSSE || Sophomore
            </h3>

            <p style = {{lineHeight: '150%'}}>
                At home, I am an indie game developer working on my game <a>Purgatory of Children</a>
            </p>

            <p>Being an indie dev makes me wear a lot of hats, like</p>

            <div className = "sub-aboutme-layout" variants = {subContentVariant1} initial = "hidden" animate = "visible">
            <p style = {{fontWeight: 700}}>
                Programmer
            </p>
            <p style = {{fontWeight: 700}}>
                Artist
            </p>
            <p style = {{fontWeight: 700}} >
                Game Designer
            </p>
            </div>
        </div>
    )
}

export default AboutMe
