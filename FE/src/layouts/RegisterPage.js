import React, { useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import RestAPI from '../apis/RestAPI';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { addUser } from '../features/Auth/AuthSlice';
import { toast } from 'react-toastify';
import { API_ENDPOINT } from '../constants';
import { UserApi } from '../apis/UserApi';

export function RegisterPage() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
	} = useForm();

	const dispatch = useDispatch();
	const onSubmit = async (data) => {
		const res = await UserApi.addUser(data)
		toast.success("đăng ký thành công, vui lòng kích hoạt tài khoản qua email đăng ký !")
		setTimeout(() => {
			navigate('/login')
		}, 1000);
	};
	return (
		<div className="login-page">
			<div className="container container-register">
				<form className="form-wrap wrap-register" onSubmit={handleSubmit(onSubmit)}>
					<div className="form-item">
						<div className="item-icon">
							<img src="./images/icon-user.png" alt="" className="image-cover" />
						</div>
						<input type="text" className="item-input" {...register('username')} placeholder="Nhập tài khoản ..." />
					</div>
					<div className="form-item">
						<div className="item-icon">
							<img src="./images/icon-email.png" alt="" className="image-cover" />
						</div>
						<input type="email" {...register('email')} className="item-input" placeholder="Nhập email ..." />
					</div>
					<div className="form-item">
						<div className="item-icon">
							<img src="./images/icon-password.png" alt="" className="image-cover" />
						</div>
						<input type="password" {...register('password')} className="item-input" placeholder="Nhập mật khẩu ..." />
					</div>
					<button type="submit" className="item-button">
						<h3>ĐĂNG KÝ</h3>
					</button>
					<div className="form-text"> 
						<Link to="/">Trang Chủ</Link>
						<Link to="/login">Đăng Nhập</Link>
					</div>
				</form>
			</div>
			<div className="login-image register-image">
				<img srcSet="./images/logo-register.png 2x" alt="" className="image-contain" />
			</div>
		</div>
	);
}
