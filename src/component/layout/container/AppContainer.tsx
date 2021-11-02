import React from 'react'
import './AppContainer.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import App from '../../app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const THEME = createTheme({
    typography: {
     "fontFamily": `"Nunito","Josefin Sans","Roboto", "Helvetica", "Arial", sans-serif`
    }
 });

export default class AppContainer extends React.Component {
    
    render() : React.ReactElement {
        return(
            <ThemeProvider theme={THEME}>
                <Box>
                    <Router>
                        <Header/>
                        <App/>
                        <Footer/>
                    </Router>
                </Box>
            </ThemeProvider>
        );
    }
}