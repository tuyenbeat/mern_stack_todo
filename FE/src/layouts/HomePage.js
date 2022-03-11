import React from 'react';
import {Link} from "react-router-dom"
export function HomePage() {
	return (
		<div className="page-home">
			<div className="header-wrap">
				<div className="header-left">
					<a href="">
						<div className="header-logo ">
							<img srcSet="/images/logo_home.png 2x" alt="" className="image-cover" />
						</div>
					</a>
					<ul className="header-menu">
						<li className="menu-item">
							<a className="text-title" href="">
								Github
							</a>
						</li>
						<li className="menu-item">
							<a className="text-title" href="">
								Youtube
							</a>
						</li>
						<li className="menu-item">
							<a className="text-title" href="">
								Facebook
							</a>
						</li>
					</ul>
				</div>
				<div className="header-right">
					<Link className="text-title" to="/login">
						Login
					</Link>
					<Link className="text-title" to="/register">
						<button>
							<h3 className="text-button">Register</h3>
						</button>
					</Link>
				</div>
			</div>
			<div className="main-wrap">
				<div className="main-content">
					<div className="main-title">ỨNG DỤNG MIỄN PHÍ 100%</div>
					<div className="main-des">ứng dụng giúp bạn quản lý công việc trở lên đơn giản, hiệu quả hơn.</div>
					<Link to="/home">
						<button className="main-button">
							<h3>XEM NGAY</h3>
						</button>
					</Link>
				</div>
				<div className="main-image">
					<img srcSet="./images/thumb_home.png 2x" alt="" className="image-contain" />
				</div>
			</div>
		</div>
	);
}
