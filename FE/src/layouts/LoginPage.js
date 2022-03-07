import React, { useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import RestAPI from '../api/RestAPI';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../features/Auth/AuthSlice';
import { toast } from 'react-toastify';
import { API_ENDPOINT } from '../constants';

export function LoginPage() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const dispatch = useDispatch();
	const onSubmit = async (data) => {
		const value = await RestAPI.post(API_ENDPOINT.login, data);
		localStorage.setItem('accessToken', value.data.accessToken);
    toast.success("Đăng nhập thành công !")
	localStorage.setItem("user", JSON.stringify(value.data))
    dispatch(addUser(value.data))
		setTimeout(() => {
      navigate('/home');
    }, 1000);
	};
	return (
		<div className="login-page">
			<div className="container">
				<form className="form-wrap" onSubmit={handleSubmit(onSubmit)}>
					<div className="form-item">
						<div className="item-icon">
							<img src="./images/icon-user.png" alt="" className="image-cover" />
						</div>
						<input type="text" className="item-input" {...register('username')} placeholder="Nhập tài khoản ..." />
					</div>
					<div className="form-item">
						<div className="item-icon">
							<img src="./images/icon-password.png" alt="" className="image-cover" />
						</div>
						<input type="password" {...register('password')} className="item-input" placeholder="Nhập mật khẩu ..." />
					</div>
					<button type="submit" className="item-button">
						<h3>ĐĂNG NHẬP</h3>
					</button>
					<div className="form-text">
						<a href="/">Quay lại trang chủ</a>
					</div>
				</form>
			</div>
			<div className="login-image">
				<img srcSet="./images/login-image.png 2x" alt="" className="image-contain" />
			</div>
		</div>
	);
}
