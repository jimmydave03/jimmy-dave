import React from 'react'
import './AppContainer.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import App from '../../app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';

export default class AppContainer extends React.Component {

    render() : React.ReactElement {
        return(
            <Box>
                <Router>
                    <Header/>
                    <App/>
                    <Footer/>
                </Router>
            </Box>
        );
    }
}