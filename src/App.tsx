import React from 'react';
import logo from './assets/jimmy-dave.png';
import stackoverflow from './assets/logo-stackoverflow.png';
import upwork from './assets/logo-upwork.svg';
import './App.css';
import { LinkedIn, GitHub, ViewListRounded, BusinessCenterRounded } from '@mui/icons-material';
import { Grid } from '@mui/material';

const App = () : React.ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Software Engineer
        </p>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <a href="http://www.linkedin.com/in/jimmy-dave/" target="_blank" rel="noopener noreferrer">
                <LinkedIn color="primary" titleAccess="LinkedIn"></LinkedIn>
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="http://www.github.com/jimmydave03" target="_blank" rel="noopener noreferrer">
                <GitHub color="primary" titleAccess="Github"></GitHub>
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="https://stackoverflow.com/users/3855773/jimmy" target="_blank" rel="noopener noreferrer">
                <ViewListRounded color="primary" titleAccess="Stack Overflow"></ViewListRounded>
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="https://www.upwork.com/freelancers/~01ef522935af6c43aa/" target="_blank" rel="noopener noreferrer">
                <BusinessCenterRounded color="primary" titleAccess="Upwork"></BusinessCenterRounded>
              </a>
            </Grid>
          </Grid>
        </div>
      </header>
    </div>
  );
}
export default App;
