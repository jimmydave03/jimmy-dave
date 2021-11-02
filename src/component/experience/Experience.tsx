import React, { Component } from 'react'
import { Card, CardContent, CardHeader, Grid, Typography, Container } from '@mui/material';
import { EXPERIENCE } from '../../common/constant/AppConstant';
import { JobExperience } from '../../common/interface/JobExperience';
import './Experience.css';

interface ExperienceProps {
    id?: string;
  }
  interface ExperienceState {
    data?: string;
  }

export default class Experience extends Component<ExperienceProps, ExperienceState> {
    experienceList: JobExperience[];
    constructor(props: ExperienceProps) {
        super(props);
        this.experienceList = EXPERIENCE;
    }
    render() : React.ReactElement {
        return (
            <div className="Experience Experience-header">
                <Typography variant="h4" justifySelf="center" component="div" mt={1} mb={2}>
                    Work Profile
                </Typography>
                <Container>
                    <Grid container spacing={2}>
                        {
                        this.experienceList.map((value, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card className="Experience-card">
                                <CardHeader title={
                                    <a href={value.url} target="_blank" rel="noreferrer">{value.company}</a>
                                } subheader={
                                    <span>{value.position} <br/> {value.date}</span>
                                    }/>                  
                                <CardContent className="Exp-Card-Overflow">
                                    <Typography variant="body1" component="div" justifySelf="left">
                                    <ul>
                                    {value.description.map((point, index) => (
                                        <li key={index}>
                                            {point}
                                        
                                        </li>
                                    ))}
                                    </ul>
                                    </Typography>
                                </CardContent>
                                </Card> 
                            </Grid>
                        ))
                        }
                    </Grid>
                </Container>
            </div>
        )
    }
}
