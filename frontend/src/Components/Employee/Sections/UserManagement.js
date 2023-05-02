import {Button, Card, Grid, Spacer, Text} from "@nextui-org/react";
import React, {useRef} from "react";
import CreateUserModal from "../Modal/Users/CreateUserModal";
import CheckModal from "../Modal/Users/CheckModal";

const UserManagement = () => {
    const addUser = useRef();
    const checkUser = useRef();
    return <>

        <Grid.Container justify="center">
            <Grid xs={12}>
                <Text h2>User Management</Text>
            </Grid>
            <Grid xs={12}>
                <Card>
                    <Card.Body>
                        <Button onClick={() => addUser.current.addUser()}> Add User </Button>
                    </Card.Body>
                </Card>
            </Grid>
            <CreateUserModal ref={addUser}/>
            <CheckModal ref={checkUser}/>

        </Grid.Container>


    </>

}
export default UserManagement;