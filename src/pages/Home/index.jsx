import { Box,Button,TextField } from "@mui/material";

import {getData} from "../../service";
 import { useState} from "react";

const Home=() =>{
    const [user,setuser]=useState({});
    const [username,setUsername]=useState({}) ;

    const getUserfromGithub =async()=>{
        //console.log(username)
        const user =await getData(`/users/${username}`);
        setUsername("");
        setuser(user);
    }

    return (
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            bgcolor:"secondary.main"

        }} m={4} >
            <div>
                <h1>Buscar usuario:</h1>
            </div>
            <div>
            <TextField size="small"
            label="Write a username" 
            //value={username}
            onChange={(e)=> setUsername(e.target.value)} />
            <Button variant="contained" color="primary" onClick={getUserfromGithub }>
             My button in this page
            </Button>
            </div>
            <div>
                <h3>User data</h3> 
                <img src={user.avatar_url} alt="" />
                <h3>{user.login}</h3>
                
            </div>
        </Box>
    )
};
export default Home;