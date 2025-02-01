import React from 'react'
import {Stack, Box, Typography, Link, IconButton, Divider,  Avatar, Badge, InputBase} from '@mui/material'
import { faker } from "@faker-js/faker";
import {styled} from "@mui/material/styles";
import { ArrowDownLeft, ArrowUpRight, Phone, VideoCamera } from "phosphor-react";


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));


const CallLogElement = ({online, incoming, missed}) => {
    return (
        <>
        <Box sx={{
            width:"100%",
            borderRadius:1.5,
            backgroundColor:(theme) => theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,

        }}
        p={2}
        >
            <Stack 
             direction="row" 
             alignItems={"center"} 
             justifyContent="space-between"
            >
                <Stack direction="row" alignItems={"center"} spacing={2} >
                    {online ? <StyledBadge 
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        >
                            <Avatar src={faker.image.avatar()}/>
                    </StyledBadge> :<Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />}

                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
                        {/* <Typography variant="caption">{msg}</Typography> */}
                        <Stack direction={"row"} alignItems={"center"} spacing={1}>
                            {incoming ? <ArrowDownLeft color={missed ? "red" : "green"}  /> : <ArrowUpRight color={missed ? "red" : "green"} />}
                            <Typography variant="caption">Yesterday 21:30</Typography>  
                        </Stack>
                        
                    </Stack>  
                </Stack>
                <IconButton>
                    <Phone color="green" />
                </IconButton>
                 
            </Stack>

        </Box>
        </>
    )
}

const CallElement = ({online}) => {
    return (
        <Box sx={{
            width:"100%",
            borderRadius:1.5,
            backgroundColor:(theme) => theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,

        }}
        p={2}
        >
            <Stack 
             direction="row" 
             alignItems={"center"} 
             justifyContent="space-between"
             sx={{mb: 1}}
            >
                <Stack direction="row" alignItems={"center"} spacing={2} >
                    {online ? <StyledBadge 
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        >
                            <Avatar src={faker.image.avatar()}/>
                    </StyledBadge> :<Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />}

                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
                        {/* <Typography variant="caption">{msg}</Typography> */}
                        
                    </Stack>  
                </Stack>
                <Stack direction="row" justifyContent={"center"} alignItems={"center"}>
                    <IconButton>
                        <Phone color="green" />
                    </IconButton>
                    <IconButton>
                        <VideoCamera color="green" />
                    </IconButton>
                </Stack>
                
            </Stack>
            <Divider />
        </Box>
        
    )
}

export {CallElement, CallLogElement};