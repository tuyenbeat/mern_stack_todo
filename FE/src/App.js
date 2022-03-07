import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage, HomePage, RegisterPage, ToDoPage, NotFound } from './layouts';
import './styles/app.scss';
import './styles/styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ActivePape from './layouts/ActivePape';

export default function App() {
	return (
		<>
			<Routes>
				<Route path="" element={<HomePage />} />
				<Route path="user" element={<ActivePape />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="register" element={<RegisterPage />} />
				<Route path="home/*" element={<ToDoPage />}>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<ToastContainer
				position="top-right"
				autoClose={1500}
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
