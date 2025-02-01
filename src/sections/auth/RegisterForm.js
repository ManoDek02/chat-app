import React, {useState} from 'react';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import FormProvider from '../../components/hook-form/FormProvider';
import RHFTextField from '../../components/hook-form/RHFTextField';
import {Alert, Stack, IconButton, InputAdornment, Button} from '@mui/material';
import {Eye, EyeSlash} from 'phosphor-react';


const RegisterForm = () => {


    const [showPassword, setShowPassword] =useState(false);

    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string().required("firstname is required"),
        lastName: Yup.string().required("lastname is required"),
        email: Yup.string().required("Email is required").email("Email must be a valid email address"),
        password: Yup.string().required("Password is required"),
    });


    const defaultValues = {
        firstName: "Emmanuel",
        lastName: "Dossekou",
        email: "demo@tawk.com",
        password: "demo1234"
    }

    const methods = useForm({
        resolver: yupResolver(RegisterSchema),
        defaultValues,
    });


    const {reset, setError, handleSubmit, formState: {errors,isSubmitting, isSubmitSuccessful}} = methods;

    const onSubmit = async (data) => {
        try {
            // submit data to backend
        }
        catch (error) {
            console.log(error);
            reset();
            setError("afterSubmit", {
                ...error,
                message: error.message,
            })
        }
    }

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                {!!errors.afterSubmit && (<Alert severity="error">{errors.afterSubmit.message}</Alert>)}
                <Stack direction={{ xs: "column", sm: "row"}} spacing={2}>
                    <RHFTextField name="firstName" label="First Name" />
                    <RHFTextField name="lastName" label="Last Name" />
                </Stack>
                <RHFTextField name="email" label="Email adress" />
                <RHFTextField name="password" label="Password" type={showPassword ? "text" : "password"} InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton onClick={() => {
                                setShowPassword(!showPassword);
                            }}>
                                {showPassword ? <Eye /> : <EyeSlash />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}/>


                
            <Button fullWidth 
            color="inherit" 
            size="large" 
            type="submit" 
            variant="contained" 
            sx={{bgcolor: "text.primary", color: (theme) => theme.palette.mode === "light" ? "common.white" :"grey.800", '&hover': {
                bgcolor: "text.primary",
                color: (theme) => theme.palette.moden === 'light' ? "common.white" : "grey.800",
            }}}>
                Create account
            </Button>

            </Stack>

        </FormProvider>

    )
}

export default RegisterForm;