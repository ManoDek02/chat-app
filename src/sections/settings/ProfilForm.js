import React, {useState, useCallback} from 'react';
import {Link as RouterLink} from "react-router-dom";
import * as Yup from 'yup';
import {Alert, Stack, IconButton, InputAdornment, Link, Button} from '@mui/material';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import FormProvider from '../../components/hook-form/FormProvider';
import RHFTextField from '../../components/hook-form/RHFTextField';
import {Eye, EyeSlash} from 'phosphor-react';


const ProfilForm = () => {


    const LoginSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        about: Yup.string().required("About is required"),
        avatarUrl: Yup.string().required("Avatar is required").nullable(true),
    });


    const defaultValues = {
        name: "",
        about: ""
    }

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });


    const {reset, watch, control, setValue, setError, handleSubmit, formState: {errors,isSubmitting, isSubmitSuccessful}} = methods;


    const values = watch();

    const handleDrop = useCallback((acceptFiles) => {
        const file = acceptFiles[0];

        const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file)
        })

        if(file) {
            setValue("avatarUrl", newFile, {shouldValidate: true});
        }

    }, [setValue]);

    const onSubmit = async (data) => {
        try {
            // submit data to backend
            console.log("Data", data);
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
            <Stack spacing={3}>
                {!!errors.afterSubmit && (<Alert severity="error">{errors.afterSubmit.message}</Alert>)}

                <RHFTextField name="name" label="Name" helperText={"This name is visible to yours contacts"} />
                <RHFTextField multiline rows={3} maxRows={5} name="about" label="About" />
            </Stack>
            <Stack direction="row" justifyContent="end">
                <Button color="primary" size="large" type="submit" variant="outlined" >Save</Button>
            </Stack>
            </Stack>

        </FormProvider>
    )
}

export default ProfilForm;