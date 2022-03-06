import React from 'react';
import { Navigate } from 'react-router-dom';
import Card from '../components/Card';

export function ToDoPage() {
	const isLogin = Boolean(localStorage.getItem('accessToken'));
	if(!isLogin) return <Navigate to='/login'/>
	return (
		<div className="todo-page">
			<div className="page-wrap">
				<div className="page-header">
					<div className="header-left">
						<a href="/">
							<div className="header-logo">
								<img srcSet="./images/logo_home.png 2x" className="image-contain" />
							</div>
						</a>
						<ul className="header-nav">
							<li className="nav-item">
								<a href="">Github</a>
							</li>
							<li className="nav-item">
								<a href="">Youtube</a>
							</li>
							<li className="nav-item">
								<a href="">Facebook</a>
							</li>
						</ul>
					</div>
					<div className="header-right">
						<div className="header-info">
							<h3>TuyenBeat</h3>
							<div className="info-arrow">
								<img srcSet="./images/icon_arrow.png" alt="" className="image-contain" />
							</div>
						</div>
						<div className="header-avatar">
							<img srcSet="./images/avatar.png 2x" alt="" className="image-contain" />
						</div>
					</div>
				</div>
				<div className="page-container">
					<div className="column-item">
						<h3 className="column-title">TODO</h3>
						<div className="container-card">
							{Array.from(new Array(5)).map((value, index) => (
								<Card
									title="Dựng giao diện Todolist"
									content="Thấp thoáng ánh mắt đôi môi mang theo hương mê say
                Em cho anh tan trong miên man quên luôn đi đêm ngày
                Chạm nhẹ vội vàng hai ba giây nhưng con tim đâu hay
                Bối rối khẽ lên ngôi yêu thương đong đầy thật đầy Có câu ca trong gió hát ngân nga, ru trời mây ."
									date=" 2022-07-19 10:07:05"
                  key={index}
								/>
							))}
						</div>
					</div>
					<div className="column-item"></div>
					<div className="column-item"></div>
				</div>
			</div>
		</div>
	);
}
