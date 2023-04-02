import React, { useState } from "react";
import './style.css'

function Field(props){
    return(
        <div className={props.className}>
            <input className="fieldBoxes" type={props.type} id={props.className} placeholder={props.labelName} value={props.fieldValue}
            onChange={(e) => {
                props.setFieldValue(e.target.value);
            }}/>
        </div>
    );
}

function RadioButton(props){
    return(
        <div className="radio-button">
            <input name="radio" id={props.name} type="radio" onClick={() => {props.setRadioValue(props.name);}}/>
            <label htmlFor={props.name}>{props.name}</label>
        </div>
    );
}

function Form(props){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [radio, setRadio] = useState("");

    console.log(radio)

    function registerUser(e){
        e.preventDefault();
    }

    function loginUser(e){
        e.preventDefault();
    }

    if(props.type === "SignUp"){
        return(
            <div>
                <form onSubmit={registerUser}>
                    <Field className="username" labelName="Username" type="text" fieldValue={username} setFieldValue={setUsername}/>
                    <Field className="email" labelName="Email Address" type="text" fieldValue={email} setFieldValue={setEmail}/>
                    <Field className="password" labelName="Password" type="password" fieldValue={password} setFieldValue={setPassword}/>
                    <Field className="phone" labelName="Phone number" type="text" fieldValue={phone} setFieldValue={setPhone}/>
                    <div className="radio-group">
                        <RadioButton name="Tenant" setRadioValue={setRadio}/>
                        <RadioButton name="Landlord" setRadioValue={setRadio}/>
                    </div>
                    <button className="submit-button">REGISTER</button>
                    <p> Already have an account? <a href="# " onClick={() => {props.setType("Login")}}>Login</a></p>
                </form>
            </div>
        );
    }
    return(
        <div>
            <form onSubmit={loginUser}>
                <Field className="username" labelName="Username" type="text" fieldValue={username} setFieldValue={setUsername}/>
                <Field className="password" labelName="Password" type="password" fieldValue={password} setFieldValue={setPassword}/>
                <button className="submit-button">LOGIN</button>
                <p> Don't have an account? <a href="# " onClick={() => {props.setType("SignUp")}}>SignUp</a></p>
            </form>
        </div>
    );
}

export default Form;