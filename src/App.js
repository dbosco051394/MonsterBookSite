import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Gallery from "react-photo-gallery";
import { photos } from "./components/photos";
import { SRLWrapper } from 'simple-react-lightbox'



const App = () => (
  <div className='app'>
    <h1>React Skeleton Site</h1>
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/photogallery'>Photo Gallery</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/rulesbook'>Rules Book</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
 <div className="main">
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/photogallery' component={BasicRows}></Route>
      <Route exact path='/rulesbook' component={RulesBook}></Route>
    </Switch>
  </div>
);

const Home = () => (
  <div className='home'>
    <h1>Skeleton react site for later use.</h1>
  </div>
);

const About = () => (
  <div className='about'>
    <h1>About this page</h1>
    <p>Basic web page for education.</p>
  </div>
);

const Contact = () => (
  <div className='contact'>
    <h1>Contact Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

const BasicRows = () => (
  <SRLWrapper>
    <div className="photogallery">
      <h1>Some Card Examples</h1>
      <Gallery photos={photos} />
    </div>
  </SRLWrapper>
);

const RulesBook = () => (
  <div className="rulesbook">
    <h1>The Rules Book will be here.</h1>
  </div>
);

export default App;
