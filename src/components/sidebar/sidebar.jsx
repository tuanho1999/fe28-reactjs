import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.css'

Sidebar.propTypes = {};

function Sidebar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="">All Task</a></li>
                    <li><a href="">New Task</a></li>
                    <li><a href="">Doing Task</a></li>
                    <li><a href="">Done Task</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;