import React from 'react'
import {Dialog, Slide, DialogTitle, DialogContent, Stack, Button, InputBase} from '@mui/material';
import {styled, alpha, useTheme} from "@mui/material/styles";
import { MagnifyingGlass, Plus } from "phosphor-react";
import {CallElement} from '../../components/CallElement';
import { CallLogs } from "../../data";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Search = styled("div")(({ theme }) => ({
    position:"relative",
    borderRadius:20,
    backgroundColor: alpha(theme.palette.background.default, 1),
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

const StartCall = ({open, handleClose}) => {
    return (
        <>
        <Dialog fullWidth maxWidth="xs" open={open} TransitionComponent={Transition} keepMounted sx={{ p: 4}} onClose={handleClose} >
            <DialogTitle sx={{mb: 3}} >Start Call</DialogTitle>
            <DialogContent>
                <Stack sx={{width: "100%"}}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color="#709CE6"/>
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search..." inputProps={{"aria-label": "search"}} />
                    </Search>
                </Stack>
                <Stack>
                    {CallLogs.map((el) => <CallElement {...el} />)}
                </Stack>
            </DialogContent>
        </Dialog>
        </>
    )
}

export default StartCall