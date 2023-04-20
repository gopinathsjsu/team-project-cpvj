import {Button, Card, Dropdown, Grid, Input, Loading, Text} from "@nextui-org/react";
import React, {useState} from "react";
import axios from "axios";


const AddWorkout = ()=> {

    const workouts = [{key:"Treadmill",value:1},{key:"Cycling",value:2},{key:"Stair Machine",value:3},{key:"Weight Training",value:4}];
    const [workout, setWorkout] = React.useState(new Set(["Choose a Workout"]));

    const workoutValue = React.useMemo(
        () => Array.from(workout).join(", ").replaceAll("_", " "),
        [workout]
    );



}


export default AddWorkout
