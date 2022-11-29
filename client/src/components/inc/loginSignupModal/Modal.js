import React from "react";
import Form from "./Form";
import "./style.css"

function Modal(props){
    if(!props.show){
        return null;
    }
    return(
        <div>
            <div className="modal-backdrop" onClick={() => {props.setShow(false);}}></div>
            <div className="form">
                <a href="# " className="close" onClick={() => {props.setShow(false);}}></a>
                <h2>{props.form}</h2>
                <Form type={props.form} setType={props.setForm}/>
            </div>
        </div>
    );
}

export default Modal;