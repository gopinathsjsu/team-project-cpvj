import {Button, Checkbox, Dropdown, Grid, Input, Loading, Modal, Text} from "@nextui-org/react";
import React, {forwardRef, useImperativeHandle, useState} from "react";
import axios from "axios";

const CreateUserModal = forwardRef(({}, ref) => {
    useImperativeHandle(ref, () => {
        return {
            addUser: show
        }
    })

    const [isTrail, setIsTrail] = useState(false);
    const [loading, setLoading] = useState(false);


    const [visible, setAddClassVisible] = React.useState(false);

    const show = () => {
        setAddClassVisible(true);
        setLoading(false);

        // send API CALL

    }
    const closeHandler = () => {
        setAddClassVisible(false);
        setLoading(true);

    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const data={
            username :event.target.userName.value,
            password :event.target.password.value,
            email:event.target.email.value,
            istrail:isTrail,
            membership:isTrail?1: parseInt(event.target.membership.value)
        }

        setLoading(true);
        apiCall(data)
    }
    const apiCall = async (data) => {
        console.log("inside");
        console.log(JSON.stringify(data))
        try{

            const response =  await axios.post("http://100.26.42.194:8080/usersV2", JSON.stringify(data) )
            console.log(response);
            alert("User data entered sucessfully");
            setAddClassVisible(false);


        }catch (e){
            alert("OOPs something happened");
            console.log(e);
        }

        setLoading(false);

    }
});
export default CreateUserModal;

