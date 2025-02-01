import React, {useState} from 'react'

import {Stack, Box, Typography, Link, IconButton, Divider,  Avatar, Badge, InputBase} from '@mui/material'
import { MagnifyingGlass, Plus } from "phosphor-react";
import { faker } from "@faker-js/faker";
import {styled, alpha, useTheme} from "@mui/material/styles";
import {SimpleBarStyle} from "../../components/Scrollbar";
import { ChatList } from "../../data";
import CreateGroup from '../../sections/main/CreateGroup';

const Search = styled("div")(({ theme }) => ({
    position:"relative",
    borderRadius:20,
    backgroundColor: alpha(theme.palette.background.paper, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width:"100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyCoontent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1rem + ${theme.spacing(4)})`,
        width: "100%",
    },
}));


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


const ChatElement = ({id, name, img, msg, time, unread, online}) => {
    const theme = useTheme();
    return (
        <Box sx={{
            width:"100%",
            borderRadius:1.5,
            backgroundColor:theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,

        }}
        p={2}
        >
            <Stack 
             direction="row" 
             alignItems={"center"} 
             justifyContent="space-between"
            >
                <Stack direction="row" spacing={2}>
                    {online ? <StyledBadge 
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    >
                        <Avatar src={faker.image.avatar()}/>
                    </StyledBadge> :<Avatar src={faker.image.avatar()}/>}
                    
                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">{name}</Typography>
                        <Typography variant="caption">{msg}</Typography>
                    </Stack>
                </Stack>
                <Stack spacing={2} alignItems="center">
                    <Typography sx={{fontweight: 600}} variant="caption" >{time}</Typography>
                    <Badge color="primary" badgeContent={unread}>

                    </Badge>
                </Stack>
                
                
            </Stack>

        </Box>
    )
}


const Group = () => {
    const theme = useTheme();
    const [openDialog, setOpenDialog] = useState(false);
    const handleCloseDialog = () => {
        setOpenDialog(false);
    }
    return (
        <>
        <Stack dirction={"row"} sx={{width: "100%"}} >
            <Box sx={{height: "100vh", backgroundColor: (theme) => theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper, width: 320, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"}} >
                <Stack p={3} spacing={2} sx={{maxHeight:"100vh"}}>
                    <Stack>
                        <Typography variant="h5">Groups</Typography>
                    </Stack>
                    <Stack sx={{width: "100%"}}>
                        <Search>
                            <SearchIconWrapper>
                                <MagnifyingGlass color="#709CE6"/>
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search..." inputProps={{"aria-label": "search"}} />
                        </Search>
                    </Stack>
                    <Stack direction={"row"} justifyContent="space-between" alignItems={"center"}>
                        <Typography variant="subtitle2" component={Link}>Create New Group</Typography>
                        <IconButton onClick={() => {
                            setOpenDialog(true);
                        }} >
                            <Plus style={{color: (theme) => theme.palette.primary.main}} />
                        </IconButton>
                    </Stack>
                    <Divider/>
                    <Stack spacing={3} sx={{flexGrow: 1, overflowY: "scroll", height: "100%"}}>
                        <SimpleBarStyle timeout={500} clickOnTrack={false}>
                            <Stack spacing={2.4}>
                                <Typography variant="subtitle2" sx={{color:"#676767"}}>
                                    Pinned
                                </Typography>
                                {ChatList.filter((el)=> el.pinned).map((el)=> {
                                    return <ChatElement {...el} />
                                })} 

                                <Typography variant="subtitle2" sx={{color:"#676767"}}>
                                    All Groups
                                </Typography>
                                {ChatList.filter((el)=> !el.pinned).map((el)=> {
                                    return <ChatElement {...el} />
                                })} 
                            </Stack>
                    </SimpleBarStyle>
                </Stack>
            </Stack>
            </Box>
        </Stack>
        {openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog} />}
        </>
    )
}

export default Group;