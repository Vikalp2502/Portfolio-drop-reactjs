import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile_photo.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <div className="index">
                    <h1>Vikalp <mark>Kaushik</mark></h1>
                    <ReactTypingEffect className="typingeffect" text={['A Full Stack Developer','A UI/UX Designer','A Data Scientist']} speed={100} eraseDelay={900}/>
                </div>
                  
                <Social />
            </div>
            )
        }
    }
    
    export default Home
    