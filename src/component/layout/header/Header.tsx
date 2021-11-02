import React from "react";
import './Header.css';
import logo from '../../../assets/jimmy-dave.png';
import { LinkedIn, GitHub, ViewListRounded } from '@mui/icons-material';
import { Grid } from '@mui/material';
import Nav from '../nav/Nav';
import {EXTERNAL_LINKS} from '../../../common/constant/AppConstant'

export default class Header extends React.Component {
    links = EXTERNAL_LINKS;
    render() : React.ReactElement {
        return (
            <div className="Header">
                <header className="Header-header">
                    <img src={logo} className="Header-logo" alt="logo" />
                    <p>
                        Jimmy Dave | Software Engineer
                    </p>
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <a href={this.links.linkedIn} target="_blank" rel="noopener noreferrer">
                                <LinkedIn color="primary" titleAccess="LinkedIn" className="Header-ft-30" ></LinkedIn>
                                </a>
                            </Grid>
                            <Grid item xs={3}>
                                <a href={this.links.gitHub} target="_blank" rel="noopener noreferrer">
                                <GitHub color="primary" titleAccess="Github" className="Header-ft-30"></GitHub>
                                </a>
                            </Grid>
                            <Grid item xs={3}>
                                <a href={this.links.stackOverflow} target="_blank" rel="noopener noreferrer">
                                <ViewListRounded color="primary" titleAccess="Stack Overflow" className="Header-ft-30"></ViewListRounded>
                                </a>
                            </Grid>
                        </Grid>
                    </div>
                    {/* <Nav  open = {false}/> */}
                </header>
            </div>
        );
    }
}