import React from 'react';
import Education from '../eduction/Education';
import Experience from '../experience/Experience';
import Portfolio from '../portfolio/Portfolio';
import Skills from '../skills/Skills';
import './App.css';

export default class App extends React.Component {
  render() : React.ReactElement {
    return (
      <div>
        <Experience />
        <Skills />
        <Portfolio />
        <Education />
      </div>
    );
  }
}
