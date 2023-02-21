import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function Info() {
    const [ isVisible, setVisible ] = useState(true);
    return (
        <Stack sx={{ position: "sticky", top: "0px",flexDirection: "row", justifyContent: "space-between", padding: "5px 5%", backgroundColor: "primary.main", color: "white", alignItems: "center", display: `${isVisible ? "flex" : "none"}`}}>
            <Typography variant='h5' sx={{ fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" } }}>
                Due to the slow response of API calls, I was forced to make this site a static website😥
            </Typography>
            <CloseIcon sx={{ fontSize: { lg: "22px", md: "22px", sm: "20px", xs: "18px" }, cursor: "pointer" }} onClick={()=>{
                setVisible(false)
            }}/>
        </Stack>
    )
}
