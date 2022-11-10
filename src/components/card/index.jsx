import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.css";


const Card = ({ title, creator, description, removeCard, id, onHandleChange, status}) => {
  
  const [newStatus, setNewStatus] = useState(status)
  const handChangeStatus = () =>{
    switch (newStatus) {
      case status:
        setNewStatus("DOING")
        break;
        case "DOING":
        setNewStatus("DONE")
        break;
        default:
          setNewStatus("NEW")
          break;
    }
    onHandleChange(id)
  }
    const handleDeleteCard = () =>{
      removeCard(id)
    }
  return (
    <div>
        <div className="card-body">
            <h3 className="card-title">title: {title}</h3>
            <p className="card-text">creator: {creator} </p>
            <p id="status">status: {newStatus}</p>
            <h4>Description: {description} </h4>
            <button id={id} onClick={handChangeStatus} value={status} >Change</button>
            <button id={id} onClick={handleDeleteCard} >Delete</button>

        </div>
    </div>
  );
}


export default Card;