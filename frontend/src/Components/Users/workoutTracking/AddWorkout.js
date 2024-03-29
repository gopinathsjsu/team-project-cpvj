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
    const apiCall = async (data)=>{


        setLoading(true);

        try{
            console.log(JSON.stringify(data));
            await axios.post("http://100.26.42.194:8080/userActivity", JSON.stringify(data) )
            alert("Data Submitted sucessfully")



        }catch (e){
            console.log(e);
            alert("OOps something happened")
        }

        setLoading(false);

    }

    return  <Card isHoverable variant="bordered" >
        <Card.Body>
            <form onSubmit={formSubmitHandler}>
                <Grid.Container gap={2} >

                    <Grid xs={12} justify="center">
                        <Text h3>Track your workout.</Text>
                    </Grid>

                    <Grid xs={12} justify="center">
                        <Dropdown name="location">
                            <Dropdown.Button flat color="secondary" css={{tt: "capitalize"}} name='workoutType' required>
                                {workoutValue}
                            </Dropdown.Button>
                            <Dropdown.Menu
                                aria-label="Single selection actions"
                                color="secondary"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={workouts}
                                onSelectionChange={setWorkout}
                                items={workouts}

                            >

                                {(item) => (
                                    <Dropdown.Item>
                                        {item.key}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Grid>
                    <Grid xs={6} justify="center">
                        <Input
                            clearable bordered
                            label="Start Time"
                            type="time"
                            name="startTime"
                            required
                        />
                    </Grid>
                    <Grid xs={6} justify="center">
                        <Input
                            clearable bordered
                            label="End Time"
                            type="time"
                            name="endTime"
                            required
                        />
                    </Grid>
                    <Grid xs={12} justify="center">
                        {el}
                    </Grid>


                </Grid.Container>
            </form>

        </Card.Body>
    </Card>


}


export default AddWorkout
