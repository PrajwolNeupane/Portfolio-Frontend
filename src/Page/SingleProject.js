import { Stack, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function SingleProject() {

    const { id } = useParams();
    const [data, setData] = useState({});
    const {project} = useSelector((state) => state.Project)
    useEffect(() => {
        const getData = async () => {
            setData(project.filter(function(curr){
                if(curr._id == id){
                    return curr;
                }
            }));
        }
        getData();
    }, []);

    return (
        <>
            <Stack sx={{ alignItems: "center", margin: "20px 0px", gap: "50px" }}>
                {
                    data?.message === "Cannot find Project" ? <>
                        <Typography variant='h4' sx={{ fontSize: "25px" }}>Project not found</Typography>
                        <Link to="/">Go to HomePage</Link>
                    </> : <><Typography variant='h4' sx={{ fontSize: "25px" }}>{data?.name?.toUpperCase()}</Typography>
                        <Stack sx={{ width: "80%", padding: { md: "25px 50px", sm: "15px 30px", xs: "15px 30px" }, margin: "0px auto", backgroundColor: "secondary.main", flexDirection: { md: "row", sm: "column" }, gap: "50px" }}>
                            <img src={data?.image} style={{ width: "55%" }} />
                            <Stack>
                                <Typography variant='h4' sx={{ fontSize: "20px" }}>{data?.name}</Typography>
                                <Typography variant='h5' sx={{ fontSize: "18px" }}>{data?.tagline}</Typography>
                                <Typography variant='h5' sx={{ fontSize: "16px" }}>{data?.description}</Typography>
                                <a href={data?.link} target={"_blank"} rel="noopener">Click here to vist site</a>
                            </Stack>
                        </Stack></>
                }
            </Stack>
        </>
    )
}
