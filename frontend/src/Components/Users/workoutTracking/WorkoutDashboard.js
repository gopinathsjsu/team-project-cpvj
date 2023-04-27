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

    const getData = async () => {


        let d=""
        day.forEach((value) =>{
            d = value
        });
        d = d.split(" ")[0]
        const user = JSON.parse(sessionStorage.user)

        let d2 = await axios.get(`http://100.26.42.194:8080/getPastWorkoutData?interval=${d}&userid=${user.id}`);

        d2 = d2.data || []

        console.log(d2);


        //
        //
        // // Done
        // // required data format
        // /**
        //  * [
        //  *   {
        //  *     "devicetype": "Thread Mill",
        //  *     "totaltimeseconds": 5100
        //  *   },
        //  *   {
        //  *     "devicetype": "cycling",
        //  *     "totaltimeseconds": 5100
        //  *   },
        //  *   {
        //  *     "devicetype": "stair machine",
        //  *     "totaltimeseconds": 3600
        //  *   },
        //  *   {
        //  *     "devicetype": "weight training",
        //  *     "totaltimeseconds": 2700
        //  *   }
        //  * ]
        //  */
        //
        //
        //
        //
        //

        let arr = [0,0,0,0];

        d2.map((el,i)=>{

            arr[parseInt(el.devicetype)-1]=(el.totaltimeseconds)/60

        })
        console.log(arr);

        setData((prevData)=>{
            return {
                ...prevData,
                treadmill:arr[0],
                cycling: arr[1],
                stairMachine: arr[2],
                weightTrainning: arr[3]
            }
        });
    };

    useEffect(() => {

        getData()
    },[]);





}


export default WorkoutDashboard
