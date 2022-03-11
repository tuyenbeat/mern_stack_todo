import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { UserApi } from '../apis/UserApi';
import { API_ENDPOINT } from '../constants';
import { toast } from 'react-toastify';

export default function ActivePape() {
	const [searchParams, setSearchParams] = useSearchParams({});
	const navigate = useNavigate();
	const query = queryString.stringify(Object.fromEntries([...searchParams]));
	useEffect(() => {
		const callAPI = async () => {
			const data = await UserApi.activeUser(query);
      		toast.success(data.message)
			setTimeout(() => {
				navigate("/login")
			}, 1500);
		};
		callAPI();
	}, []);
	return <div className="active-page">
		<div className="page-image">
			<img src="./images/active-logo.png" alt="" className="image-contain" />
		</div>
		<div className="page-title"><h3>XÁC THỰC TÀI KHOẢN THÀNH CÔNG !</h3></div>
	</div>
}
