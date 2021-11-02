import React, { Component } from 'react'
import './Education.css'
import { Timeline, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Typography } from '@mui/material';

export default class Education extends Component {
    render() : React.ReactElement {
        return (
            <div className="Education-header">
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="h6" component="span">
                                Bachelor in Computer science and Engineering
                            </Typography>
                            <Typography>Gujarat Technological University</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent  color="text.secondary">
                            Jul 2011 - Jun 2014
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="h6" component="span">
                                Diploma in Computer Engineering
                            </Typography>
                            <Typography>Gujarat Technological University</Typography>
                            
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent color="text.secondary">
                            May 2008 - Apr 2011
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        )
    }
}
