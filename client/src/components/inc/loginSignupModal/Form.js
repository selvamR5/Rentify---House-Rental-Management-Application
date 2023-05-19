import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './style.css'
import { changeUserId } from "../../../redux/userId";
import { toggleModal } from "../../../redux/modalShow";
import { FormType } from "../../../redux/form";


function Field(props) {
    return (
        <div className={props.className}>
            <input className="fieldBoxes" type={props.type} id={props.className} placeholder={props.labelName} value={props.fieldValue}
                onChange={(e) => {
                    props.setFieldValue(e.target.value);
                }} />
        </div>
    );
}

function RadioButton(props) {
    return (
        <div className="radio-button">
            <input name="radio" id={props.name} type="radio" onClick={() => { props.setRadioValue(props.name); }} />
            <label htmlFor={props.name}>{props.name}</label>
        </div>
    );
}

function Form() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [radio, setRadio] = useState("");

    const formType = useSelector((state) => state.formType.value);

    const dispatch = useDispatch();

    function registerUser(e) {
        e.preventDefault();
        const user = {
            emailId: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phone,
        }
        fetch('http://localhost:3001/users/create/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(user),
        }).then((res) => res.json())
        .then((res) => {
            dispatch(FormType("Login"))
            console.log(res);
        })
    }

    console.log(email, password)

    function loginUser(e) {
        e.preventDefault();
        const user = {
            emailId: email,
            password: password
        }
        fetch('http://localhost:3001/users/login/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(user),
        }).then((res) => res.json())
        .then((res) => {
            if (res) {
                localStorage.setItem('userDetails', JSON.stringify(res));
                localStorage.setItem('userId', res['user']['_id'])
                console.log(res);
                dispatch(toggleModal(false));
                dispatch(changeUserId(res.user._id));
            }
        })
    }

    if (formType === "SignUp") {
        return (
            <div>
                <form onSubmit={registerUser}>
                    <Field className="username" labelName="First Name" type="text" fieldValue={firstName} setFieldValue={setFirstName} />
                    <Field className="username" labelName="Last Name" type="text" fieldValue={lastName} setFieldValue={setLastName} />
                    <Field className="email" labelName="Email Address" type="text" fieldValue={email} setFieldValue={setEmail} />
                    <Field className="password" labelName="Password" type="password" fieldValue={password} setFieldValue={setPassword} />
                    <Field className="phone" labelName="Phone number" type="text" fieldValue={phone} setFieldValue={setPhone} />
                    <div className="radio-group">
                        <RadioButton name="Tenant" setRadioValue={setRadio} />
                        <RadioButton name="Landlord" setRadioValue={setRadio} />
                    </div>
                    <button className="submit-button">REGISTER</button>
                    <p> Already have an account? <a href="# " onClick={() => { dispatch(FormType("Login")) }}>Login</a></p>
                </form>
            </div>
        );
    }
    return (
        <div>
            <form onSubmit={loginUser}>
                <Field className="email" labelName="email id" type="text" fieldValue={email} setFieldValue={setEmail} />
                <Field className="password" labelName="Password" type="password" fieldValue={password} setFieldValue={setPassword} />
                <button className="submit-button">LOGIN</button>
                <p> Don't have an account? <a href="# " onClick={() => { dispatch(FormType("SignUp")) }}>SignUp</a></p>
            </form>
        </div>
    );
}

export default Form;