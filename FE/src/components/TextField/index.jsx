import React from 'react'
import { Controller } from "react-hook-form";
import {TextField as Field} from "@mui/material"
export default function TextField({name, control}) {
  return (
        <Controller
        name={name}
        control={control}   
        render={({field})=> <Field variant='outlined' fullWidth {...field} multiline label={name.toUpperCase()} />}
        />
  )
}
