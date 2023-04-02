/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Form from "./Form";
import CloseIcon from '@mui/icons-material/Close';
import "./style.css"

function Modal(props){
    if(!props.show){
        return null;
    }
    
    return(
        <div>
            <div className="modal-backdrop" onClick={() => {props.setShow(false);}}></div>
            <div className="form">
                <div className="close" onClick={() => {props.setShow(false);}}>
                    <CloseIcon fontSize="large"/>
                </div>
                <h2>{props.form}</h2>
                <Form type={props.form} setType={props.setForm}/>
            </div>
        </div>
    );
}

export default Modal;