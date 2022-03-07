import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { UserApi } from '../api/UserApi';
import { API_ENDPOINT } from '../constants';
import { toast } from 'react-toastify';

export default function ActivePape() {
	const [searchParams, setSearchParams] = useSearchParams({});
	const query = queryString.stringify(Object.fromEntries([...searchParams]));
	useEffect(() => {
		const callAPI = async () => {
			const url = API_ENDPOINT.user + "?"+ query;
			const data = await UserApi.activeUser(url);
      toast.success(data.message)
		};
		callAPI();
	}, []);
	return <div>ActivePape</div>;
}
