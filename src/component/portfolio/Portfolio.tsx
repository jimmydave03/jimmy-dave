import { Card, CardContent, CardHeader, Container, Grid, Typography, CardActions, Button } from '@mui/material'
import React, { Component } from 'react'
import Scrollbars from 'react-custom-scrollbars';
import { PORTFOLIO } from '../../common/constant/AppConstant'
import './Portfolio.css'

interface PortfolioProps {
    id?: string;
  }
  interface PortfolioState {
    data?: string;
  }

export default class Portfolio extends Component<PortfolioProps, PortfolioState> {
    
    portfolioList = PORTFOLIO;   

    render() : React.ReactElement {
        return (
            <div className="Portfolio Portfolio-header">
                <Typography variant="h4" justifySelf="center" component="div" mt={1} mb={2}>
                    Some Cool Work
                </Typography>
                <Container>
                    <Grid container spacing={2}>
                        {
                            this.portfolioList.map((val, index) => (
                                <Grid item xs={12} md={6} xl={3} key={index}>
                                    <Card>
                                        <CardHeader title={val.name} />
                                        <hr />
                                        <CardContent>
                                            <Scrollbars style={{height:'100px'}}>
                                                <Typography variant="body1" justifySelf="center" component="div">
                                                    {val.title}
                                                </Typography>
                                            </Scrollbars>
                                        </CardContent>
                                        {
                                            val.url.length > 0 &&
                                            <CardActions>
                                                <a href={val.url} target="_blank" rel="noreferrer">
                                                    <Button size="small" color="primary">
                                                        Visit
                                                    </Button>
                                                </a> 
                                            </CardActions>
                                        }
                                        {
                                            val.url.length === 0 &&
                                            <CardActions style={{height:'35px'}}>
                                            </CardActions>
                                        }
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
