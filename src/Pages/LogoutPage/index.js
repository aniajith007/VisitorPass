import { Box, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

function LogoutPage() {
    const location = useLocation();
    if(location.state){
        if(location.state.userdata){
            console.log(location.state.userdata)
        }
    }
  return (
    <Box>
    <Box sx={{display:'flex', justifyContent:'center',my:30}}>
        <Typography variant='h6'>{"Loggged out! "+location.state.userdata.user+" Thank You!!!"}</Typography>
    </Box>        
    </Box>
  )
}

export default LogoutPage