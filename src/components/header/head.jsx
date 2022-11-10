import React from 'react';
import PropTypes from 'prop-types';
import './head.css'
import { Navigate, useNavigate } from 'react-router-dom';

Head.propTypes = {
    
};

function Head() {
    let Navigate = useNavigate();
    const handleCreate = (e) =>{
        let path ='/Form';
        Navigate(path);
    }
    return (
        <div className='container-head'>
            <button type='button' id='Btn' onClick={handleCreate}>Create New Task</button>
            <input type="search" name="" id="" placeholder='Type something to search'/>
            <input type="submit" name="" id="BtnSubmit" />
        </div>
    );
}

export default Head;