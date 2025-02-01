import React from 'react'
import {Box, Dialog, Slide, DialogTitle, DialogContent,  Button, DialogActions, FormControl, RadioGroup, FormControlLabel, Radio} from '@mui/material';
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";
import {useTheme} from "@mui/material/styles";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const RadioDialog = () => {
    const theme = useTheme();
    const {onToggleMode} = useSettings();
    const [value, setValue] = React.useState('"#F8FAFF"');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="#F8FAFF" control={<Radio />} label="White" />
        <FormControlLabel value="#000" control={<Radio />} label="Dark" />
      </RadioGroup>
    </FormControl>
    )
}

const ThemeDialog = ({open, handleClose}) => {
    const [value, setValue] = React.useState('#F8FAFF'); 
    return (
        <>
        <Dialog fullWidth open={open} onClose={handleClose} TransitionComponent={Transition} sx={{p: 4 }} >
            <DialogTitle>Theme</DialogTitle>
            <DialogContent sx={{mt: 2}}>
                <Box>
                    <RadioDialog />
                </Box>
                
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleClose}>Ok</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default ThemeDialog;