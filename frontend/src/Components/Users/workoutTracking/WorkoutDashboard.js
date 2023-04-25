import {Container, Dropdown, Grid, Text} from "@nextui-org/react";
import React, {useEffect} from "react";
import axios from "axios";

const WorkoutDashboard = (props) => {

    const days = [{key:"1 day"},{key:"7 days"},{key:"30 days"},{key:"60 days"},{key : "90 days"}];
    const [day, setDay] = React.useState(new Set(["1 day"]));
    const [selectedDay, setSelectedDay] = React.useState("1 day");



    const [data, setData] = React.useState({
        treadmill: 0,
        cycling: 0,
        stairMachine: 0,
        weightTrainning: 0
    })







}


export default WorkoutDashboard
