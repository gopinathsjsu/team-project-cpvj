import {Button, Grid, Input, Loading, Modal, Text} from "@nextui-org/react";
import React, {forwardRef, useImperativeHandle, useState} from "react";
import axios from "axios";


const CheckModal = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => {
        return {
            checkInUser: checkIn,
            checkOutUser: checkOut
        }
    })


    const [loading, setLoading] = useState(false);


    const [visible, setAddClassVisible] = React.useState(false);

    const [data, setData] = useState({
        nane: "Check In User",
        isCheckIn: true,
        description: "Enter user email to check them in"
    });
    const checkIn = () => {
        setAddClassVisible(true);
        setLoading(false);
        setData({name: "Check In User", isCheckIn: true, description: "Enter user email to check them in"});
    }
    const checkOut = () => {
        setAddClassVisible(true);
        setLoading(false);
        setData({name: "Check Out User", isCheckIn: false, description: "Enter user email to check them out"});
    }


    const closeHandler = () => {
        setAddClassVisible(false);
        setLoading(true);

    };

});
export default CheckModal;