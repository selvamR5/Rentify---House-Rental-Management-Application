/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Form from "./Form";
import CloseIcon from '@mui/icons-material/Close';
import "./style.css"
import { toggleModal } from "../../../redux/modalShow";
import { useDispatch, useSelector } from "react-redux";

function Modal(props){
    const modalShow = useSelector((state) => state.modalShow.value);
    const formType = useSelector((state) => state.formType.value);
    const dispatch = useDispatch();

    if(!modalShow){
        return null;
    }
    
    return(
        <div>
            <div className="modal-backdrop" onClick={() => {dispatch(toggleModal(false))}}></div>
            <div className="form">
                <div className="close" onClick={() => {dispatch(toggleModal(false))}}>
                    <CloseIcon fontSize="large"/>
                </div>
                <h2>{formType}</h2>
                <Form/>
            </div>
        </div>
    );
}

export default Modal;