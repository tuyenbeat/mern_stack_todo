import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage, HomePage, RegisterPage, ToDoPage, NotFound } from './layouts';
import "./styles/app.scss"
import "./styles/styles.scss"

export default function App() {
	return (
		<>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/home" element={<ToDoPage />} />
     		<Route path='*' element={<NotFound/>}/>
		</Routes>
		</>
	);
}
