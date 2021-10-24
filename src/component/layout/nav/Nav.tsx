import { ChevronLeft, Menu, Inbox, Mail } from "@mui/icons-material";
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { Component } from "react";
import './Nav.css';

interface NavState {
    open: boolean
}

interface NavProps {
    open: boolean
}

export default class Nav extends Component<NavProps, NavState> {
    constructor(props: NavProps) {
        super(props);
        this.state = {
            open: props.open,
        }
    }

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };
    render() : React.ReactElement {
        return(
            <div className="Nav">
                <IconButton onClick={this.handleDrawerOpen}>
                    <Menu color="primary"/>
                </IconButton>
            
                <Drawer variant="persistent" anchor="right" open={this.state.open}>
                    <IconButton onClick={this.handleDrawerClose}>
                        <ChevronLeft />
                    </IconButton>
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <Inbox /> : <Mail />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                            </ListItem>
                        ))}
                        </List>
                </Drawer>
            </div>
        );
    }
}