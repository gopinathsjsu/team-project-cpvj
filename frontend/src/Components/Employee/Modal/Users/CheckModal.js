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
    const formSubmitHandler = (event) => {
        event.preventDefault();

        // {
        //     "employeeid": 0,
        //     "locationid": 0,
        //     "type": 0, // 1 for checkin 2 for checkout
        //     "email": 0
        // }


        //todo fetch locationid and employeeid from local data.

        const employee = JSON.parse(sessionStorage.employee)

        const d = {
            "useremail": event.target.email.value,
            "type" : data.isCheckIn?1:2,
            "locationid":employee.locationid,
            "employeeid":employee.id

        }
        apiCall(d)
    }
    const apiCall = async (d) => {
        console.log("inside");
        console.log(d);
        const url = data.isCheckIn ? "http://100.26.42.194:8080/checkinRecord" : "http://100.26.42.194:8080/checkoutRecord"

        try {
            const response = await axios.post(url, d)

            data.isCheckIn?alert("User Checked in, sucessfully!!") : alert("user Checked out sucessfully!!");



        } catch (e) {

            data.isCheckIn?alert("User alaready checked in") : alert("User didn't checked in")

        }
        setAddClassVisible(false);

        setLoading(false);

    }

    const el = loading ? <Button type="submit"><Loading color='success'/></Button> :
        <Button type="submit">{data.isCheckIn ? "Check In" : "Check Out"}</Button>

});
export default CheckModal;