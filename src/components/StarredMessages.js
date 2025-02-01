import React from 'react';
import {Box, Stack, Typography, IconButton} from '@mui/material';
import {useTheme} from "@mui/material/styles";
import { useDispatch } from 'react-redux';
import { CaretLeft } from 'phosphor-react';
import {UpdateSidebarType} from '../redux/slices/app';
import Message from "./Conversation/Message";

const StarredMessages = () => {
    const theme = useTheme();
    const dispatch = useDispatch();


    return (
        <Box sx={{width: 320, height: "100vh"}} >
            <Stack sx={{height: "100%"}}>
                <Box sx={{
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                    width: "100%",
                    bacgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
                }}>
                    <Stack sx={{height: "100%", p: 2}} direction="row" alignItems={"center"} spacing={3} >
                        <IconButton onClick={()=>{
                            dispatch(UpdateSidebarType("CONTACT"));
                        }} >
                            <CaretLeft />
                        </IconButton>
                        <Typography variant="subtitle2">STARRED Messages</Typography>
                    </Stack>

                </Box>
                {/* Body*/}
                <Stack sx={{height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll"}} p={3} spacing={2} >
                    <Message />
                </Stack>
            </Stack>
        </Box>
    )
}

export default StarredMessages;