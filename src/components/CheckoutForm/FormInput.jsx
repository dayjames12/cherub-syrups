import React from 'react'
import { TextField, Grid } from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form' // had to install earlier version of react-hook-form: 6.2.0

const FormInput = ({ name, label }) => {
    const { control } = useFormContext()
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                as={TextField}
                defaultValue=""
                control={control}
                fullWidth
                name={name}
                label={label}
                required
            />
        </Grid>
    )
}

export default FormInput
