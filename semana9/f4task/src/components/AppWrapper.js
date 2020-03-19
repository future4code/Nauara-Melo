import React, { Component } from 'react';
import Taskform from '../containers/TaskForm';
import Tasklist from '../containers/Tasklist';
import Toolbar from '../containers/Toolbar';

const AppWrapper = props => {
    return (
        <div>
            <Taskform/>
            <Tasklist/> 
            <Toolbar />
        </div>
    )
}

export default AppWrapper; 