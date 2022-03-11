import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import TextField from '../TextField';
import SelectField from '../SelectField';
import { Button } from '@mui/material';
export default function FormData({getDataForm, TypeCheck}) {
	const { handleSubmit, control, setValue, getFieldState } = useForm();
    const onSubmit = data => {getDataForm(data)};
	useEffect(()=> {
		if(TypeCheck.type === "EDIT") {
			["title", "type", "content"].map((value)=> {
				setValue(value, TypeCheck.data[value])
			})
		}		
	}, [])
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField name="title" control={control} />
					</Grid>
					<Grid item xs={12}>
						<SelectField name="type" control={control} />
					</Grid>
					<Grid item xs={12}>
						<TextField name="content" control={control}/>
					</Grid>
					<Grid item xs={12}>
						<Button variant="contained" type="submit" fullWidth>
							{TypeCheck.type} TODO
						</Button>
					</Grid>
				</Grid>
			</form>
		</>
	);
}
