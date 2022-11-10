import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './text.css'
import { Navigate, useNavigate } from 'react-router-dom';




Text.propTypes = {};


function Text(props) {
    const myData = localStorage.getItem('Form')? JSON.parse(localStorage.getItem('Form')): [];
    
    const [formValue, setFormValue] =useState({
        id:1,
        title:'',
        creator:'',
        status:'NEW',
        description:'',
    })
    
    const handleOnChange=(e)=>{
        setFormValue((formValue)=> ({
            ...formValue,
            [e.target.name] : e.target.value,
        }));
        
    }
    let Navigate = useNavigate();
    const handCreateTask =(event)=>{
        event.preventDefault();
        myData.push(formValue);
        console.log(formValue);
        localStorage.setItem('Form',JSON.stringify(myData));
        let path1= '/Home';
        Navigate(path1);
    }
    
    return (
        <form className='container' onSubmit={handCreateTask}>
            <label htmlFor="Title">Title :</label>
            <input 
            required
            type='text' 
            id='title' 
            value={formValue.title} 
            onChange={handleOnChange} 
            name='title' /><br></br>
            <label htmlFor="Creator">Creator :</label>
            <input 
            required
            type='text' 
            id='creator' 
            value={formValue.creator} 
            onChange={handleOnChange} 
            name='creator' /><br></br>
            <label htmlFor="Status">Status :</label>
            <select 
            className='status_info' 
            value={formValue.status} 
            onChange={handleOnChange} 
            name='status' >
                <option value='NEW'>NEW</option>
                <option value='DOING'>DOING</option>
                <option value='DONE'>DONE</option>
            </select><br></br>
            <label htmlFor="Description">Description :</label>
            <input 
            required
            type='textarea' 
            id='description' 
            placeholder='type something' 
            value={formValue.description} 
            onChange={handleOnChange} 
            name='description' />
            <input 
            type="submit" 
            value="SAVE" 
            
            />
        </form>
    );

}
export default Text;