import React, { Component } from 'react';
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';
import project4 from '../img/project4.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
                <div className="index">
            <h1 className="subtopic">My Work</h1>
            </div>
            <div class="port_out port1"><a href="https://github.com/vikalp2502/AlgoSort-Sorting-Visualiser"><img src={project1} className="po1"></img></a></div>
            <div class="port_out port2"><a href="https://github.com/vikalp2502/Shoes-Nike-Landing-page"><img src={project2} className="po1"></img></a></div>
            <div class="port_out port3"><a href="https://github.com/vikalp2502/To-do-list-v2"><img src={project3} className="po1"></img></a></div>
            <div class="port_out port4"><a href="https://github.com/vikalp2502/Tribute-to-msd"><img src={project4} className="po1"></img></a></div>
            </div>
            )
        }
    }
    
export default Portfolio
    