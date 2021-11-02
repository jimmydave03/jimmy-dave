import React from "react";
import './Footer.css';
import { Grid, Container, Link } from '@mui/material';
import {EXTERNAL_LINKS} from '../../../common/constant/AppConstant'

export default class Footer extends React.Component {
    links = EXTERNAL_LINKS;
    render() : React.ReactElement {
        return(
            <div className="Footer">
                    <Container>
                        <Grid container 
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="flex-end"
                            spacing={2}>
                            <Grid item xs={6} textAlign={"right"}>
                                <Link href={this.links.linkedIn} target="_blank">
                                    Let&apos;s connect
                                </Link>
                            </Grid>
                        </Grid>
                </Container>
            </div>
        );
    }
}