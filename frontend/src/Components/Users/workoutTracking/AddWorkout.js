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

    const [loading, setLoading] = useState(false);

    const el = loading ? <Button type="submit"><Loading color='success'/></Button> :
        <Button type="submit">Submit</Button>

    const user = JSON.parse(sessionStorage.user)


    const formSubmitHandler = (event)=>{
        event.preventDefault()


        const type = event.target.workoutType.children[1].innerHTML

        console.log(type);

        if(type==="Choose a Workout")
            alert("Choose a workout type");
        else{


            let dp = workouts.filter((el) => {
                return el.key === type
            })

            const data = {
                userid:user.id,
                deviceid:dp[0].value,
                start:event.target.startTime.value,
                end:event.target.endTime.value
            }
            console.log(data);
            apiCall(data)
        }
    }


}


export default AddWorkout
