import React, { Component } from 'react';
import Social from '../components/Social';
import Map from '../img/map.png';

class Contact extends Component {
    render() {
        return (
            <div className="condiv contact">
                <div className="index">
            <h1 className="subtopic">Contact Me</h1>
            </div>
            <div class="con_out"><img src={Map} class="co1"></img></div>
            <a href="#"><div className="back3">Download Resume</div></a>
            <a href="mailto:youremail@gmail.com"><div className="back3 back4">Contact Me</div></a>
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    