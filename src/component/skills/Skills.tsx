import { Grid, Typography, Paper, Chip, Container } from '@mui/material'
import React, { Component } from 'react'
import { SKILLS } from '../../common/constant/AppConstant';
import { styled } from '@mui/material/styles'
import './Skills.css';

interface AppProps {
    id?:string
}

interface AppState {
    id?:string
}

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default class Skills extends Component<AppProps, AppState> {
    skills = SKILLS;
    constructor(props: AppProps) {
        super(props);
    }

    render() : React.ReactElement {
        return (
            <div className="Skills Skills-header">
                <Typography variant="h4" justifySelf="center" component="div" mt={1} mb={2}>
                    Skills
                </Typography>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Paper component="ul" 
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    listStyle: 'none',
                                    p: 0.5,
                                    m: 0,
                                }}>
                                    {
                                    this.skills.skills.map((val, index) => {
                                        return(
                                        <ListItem key={index}>
                                            <Chip
                                                label={val}
                                            />
                                        </ListItem>
                                        );
                                    })
                                }
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper component="ul" 
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    listStyle: 'none',
                                    p: 0.5,
                                    m: 0,
                                }}>
                                    {
                                    this.skills.programming.map((val, index) => {
                                        return(
                                        <ListItem key={index}>
                                            <Chip
                                                label={val}
                                            />
                                        </ListItem>
                                        );
                                    })
                                }
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}
