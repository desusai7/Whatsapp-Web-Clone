import React from 'react'
import './Sidebar.css';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar, IconButton } from '@material-ui/core';
import  DonutLargeIcon  from '@material-ui/icons/DonutLarge';
import  ChatIcon  from '@material-ui/icons/Chat';
import  MoreVertIcon  from '@material-ui/icons/MoreVert';
import  SearchOutlined  from '@material-ui/icons/SearchOutlined';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
             <Avatar />
            <div className="sidebar__headerRight">
                <IconButton><DonutLargeIcon /></IconButton>
                <IconButton><ChatIcon /></IconButton>
                <IconButton><MoreVertIcon /></IconButton>
            </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                <SearchOutlined /> 
             <input placeholder="Search or start new chat" type="text"/>
                </div>
             
            </div>
            <div className="sidebar__chats">
                
            </div>
        </div>
    )
}

export default Sidebar
