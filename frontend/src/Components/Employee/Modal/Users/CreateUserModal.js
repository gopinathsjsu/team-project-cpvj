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
});
export default CreateUserModal;

