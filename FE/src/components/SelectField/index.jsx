import React from 'react';
import { Controller } from 'react-hook-form';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
export default function SelectField({ name, control }) {
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">TYPE</InputLabel>
				<Select value={age} onChange={handleChange} {...field} fullWidth label="TYPE">
					<MenuItem value="todo">TODO</MenuItem>
					<MenuItem value="inprogress">IN PROGRESS</MenuItem>
					<MenuItem value="done">DONE</MenuItem>
				</Select>
				</FormControl>
			)}
		/>
	);
}
