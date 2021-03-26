import React, {useState} from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Portfolio from './contents/Portfolio';
import Contact from './contents/Contact';

const GlobalStyle = createGlobalStyle`
  
  :root{
    --primary: ${props => props.theme.mode === 'dark' ? '#120d30' : '#318CFE'};
    --secondary: ${props => props.theme.mode === 'dark' ? '#000' : '#54ABFB'};
    --third: ${props => props.theme.mode === 'dark' ? '#1b1540' : '#1B6CFB'};
    --fourth: ${props => props.theme.mode === 'dark' ? '#ffffff66' : '#ffffff'};
    --fifth: ${props => props.theme.mode === 'dark' ? '#a8ceff66' : '#a8ceff'};
    --six: ${props => props.theme.mode === 'dark' ? '#c9c8ff' : '#000'};
  }
`

function App() {
  const [theme, setTheme] = useState({ mode: 'light'});
  return (
    <ThemeProvider theme={theme}>
      <>
    <GlobalStyle />
    <Router>
    <div className="App">
    <Navbar />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/portfolio">
    <Portfolio />
    </Route>
    <Route path="/contact">
    <Contact />
    </Route>
    <div class="back1" onClick={e => setTheme(
      theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'}
    )}><i class={theme.mode === 'dark' ? "fa fa-sun i1" : "fa fa-moon i1"}></i></div>
    </div>
    </Router>
    </>
    </ThemeProvider>
    );
  }
  
  export default App;
  