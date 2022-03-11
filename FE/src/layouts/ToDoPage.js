import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CardList from '../components/CardList';
export function ToDoPage() {
	const isLogin = Boolean(localStorage.getItem('accessToken'));
	const data = useSelector((sate) => sate.auth.user);
	const navigate = useNavigate();
	const [isShow, setShow] = useState(false)
	if (!isLogin) return <Navigate to="/login" />;
	return (
		<div className="todo-page">
			<div className="page-wrap">
				<div className="page-header">
					<div className="header-left">
						<a href="/">
							<div className="header-logo">
								<img srcSet="/images/logo_home.png 2x" className="image-contain" />
							</div>
						</a>
						<ul className="header-nav">
							<li className="nav-item">
								<a href="/">Github</a>
							</li>
							<li className="nav-item">
								<a href="/">Youtube</a>
							</li>
							<li className="nav-item">
								<a href="/">Facebook</a>
							</li>
						</ul>
					</div>
					<div className="header-right">
						<div className="header-info">
							<h3>{data.username || JSON.parse(localStorage.getItem('user')).username}</h3>
							<div className="info-arrow">
								<img srcSet="/images/icon_arrow.png" alt="" className="image-contain" />
							</div>
						</div>
						<div className="header-avatar">
							<img srcSet="/images/avatar.png 2x" alt="" className="image-contain" />
						</div>
						<div className="header-dropdown">
							<p className='dropdown-title'>{data.username || JSON.parse(localStorage.getItem('user')).username}</p>
							<p className='dropdown-des'>{data.email || JSON.parse(localStorage.getItem('user')).email}</p>
							<button
								onClick={() => {
									localStorage.setItem("accessToken", '');
									localStorage.setItem("user", '');
									navigate('/');
									toast.success('Đăng xuất thành công');
								}}
							>
								LogOut
							</button>
						</div>
					</div>
				</div>
				<div className="page-nav">
					<NavLink to="" end>ALL</NavLink>
					<NavLink to="todo">TODO</NavLink>
					<NavLink to="inprogress">INPROGRESS</NavLink>
					<NavLink to="done">DONE</NavLink>
					<NavLink to="trash">TRASH</NavLink>
				</div>
				<Routes>
					<Route path="" element={<CardList />} />
					<Route path=":type" element={<CardList />} />
				</Routes>
			</div>
		</div>
	);
}
