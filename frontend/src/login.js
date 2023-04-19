import React, {useState} from 'react';
import {Button, Card, Container, Input, Spacer, Text,} from '@nextui-org/react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = ()=>{

    const navigate = useNavigate();
    let mes = false;
    let errorMessage = "";
    const [error, setError] = useState(mes);

    const [message, setMessage] = useState(errorMessage);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    // const el = {
    //     id: 1,
    //     locationid:0,
    //     name: "Chiruhas",
    //     email:"chiruhas@gmail.com"
    // }
    // sessionStorage.setItem('employee', JSON.stringify(el));
    const submitHandler = async () => {
        validateEmail(email);
        validatePassword(password);
        if (await authenticate(email, password)) {
            console.log("authenticated successfully");
        } else {
            console.log("authentication failed");
        }
    }
    const validateEmail = (email) => {
        if (email === "") {
            setEmailError('Enter Email address!')
        }
    }
    const validatePassword = (password) => {
        if (password === "") {
            setPasswordError('Enter Password!')
        } else if (password.length < 6) {
            setPasswordError('Password must contain atleast 6 characters!')
        }
    }

}

export default Login