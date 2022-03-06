import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage, HomePage, RegisterPage, ToDoPage, NotFound } from './layouts';
import "./styles/app.scss"
import "./styles/styles.scss"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
		<ToastContainer
		position="top-right"
		autoClose={3000}
		hideProgressBar={false}
		newestOnTop={false}
		closeOnClick
		rtl={false}
		pauseOnFocusLoss
		draggable
		pauseOnHover
		/>
		</>
	);
}
