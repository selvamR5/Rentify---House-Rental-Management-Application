import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toggleModal } from './redux/modalShow';
import { FormType } from './redux/form';


const PrivateRoute = ({children}) => {

    const userId = useSelector((state) => state.userId.value);
    const dispatch = useDispatch();

    if(userId){
        return children;
    }
    dispatch(toggleModal(true));
    dispatch(FormType("Login"))
    
    return (<Navigate to='/' />);
}

export default PrivateRoute

