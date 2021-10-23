import React from "react";
import './Header.css';
import logo from '../../assets/jimmy-dave.png';
import { LinkedIn, GitHub, ViewListRounded, BusinessCenterRounded } from '@mui/icons-material';
import { Grid } from '@mui/material';


class Header extends React.Component {
    render() : React.ReactElement {
        return (
            <div className="Header">
                <header className="Header-header">
                <img src={logo} className="Header-logo" alt="logo" />
                <p>
                    Software Engineer
                </p>
                <div>
                    <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <a href="http://www.linkedin.com/in/jimmy-dave/" target="_blank" rel="noopener noreferrer">
                        <LinkedIn color="primary" titleAccess="LinkedIn" className="Header-ft-30" ></LinkedIn>
                        </a>
                    </Grid>
                    <Grid item xs={3}>
                        <a href="http://www.github.com/jimmydave03" target="_blank" rel="noopener noreferrer">
                        <GitHub color="primary" titleAccess="Github" className="Header-ft-30"></GitHub>
                        </a>
                    </Grid>
                    <Grid item xs={3}>
                        <a href="https://stackoverflow.com/users/3855773/jimmy" target="_blank" rel="noopener noreferrer">
                        <ViewListRounded color="primary" titleAccess="Stack Overflow" className="Header-ft-30"></ViewListRounded>
                        </a>
                    </Grid>
                    <Grid item xs={3}>
                        <a href="https://www.upwork.com/freelancers/~01ef522935af6c43aa/" target="_blank" rel="noopener noreferrer">
                        <BusinessCenterRounded color="primary" titleAccess="Upwork" className="Header-ft-30"></BusinessCenterRounded>
                        </a>
                    </Grid>
                    </Grid>
                </div>
                </header>
            </div>
        );
    }
}

export default Header;