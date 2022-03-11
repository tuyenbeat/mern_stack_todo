import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card';
import { TodoApi } from '../../apis/TodoApi';
import { toast } from 'react-toastify';
import {Dialog, Box} from '@mui/material';
import FormData from '../FormAdd';

export default function CardList() {
	const param = useParams();
	const [list, setList] = useState([]);
	const [id, setId] = useState(0);
	const [open, setOpen] = useState(false);
	const TypeCheck = useRef({type: "ADD" ,data: {}})
	useEffect(() => {
		const getAPI = async () => {
			const data = await TodoApi.getList();
			const newData = data.filter((value) => {
				if (!param['*']) return value.isDelete === false;
				if (param.type === 'trash') return value.isDelete === true;
				return value.type === param.type && value.isDelete === false;
			});
			setList(newData);
		};
		getAPI();
	}, [param, id]);

	const getIdAndDelete = async (id) => {
		await TodoApi.deleteList(id);
		toast.success('Xóa thành công !');
		setId(id);
	};
	const getDataForm = async (data) => {
		if(TypeCheck.current.type === "ADD"){
			await TodoApi.addList(data);
			toast.success('thêm mới thành công !');
		}else {
			await TodoApi.editList(TypeCheck.current.data._id, data);
			toast.success('sửa thành công thành công !');
		}
		setId(x=>x+1);
		setOpen(false);
	};
	const getValueAndEdit = async (data) => {
		TypeCheck.current = {type: "EDIT", data}
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false);
	  };

	return (
		<React.Fragment>
			<div className="wrap-button">
				<button onClick={()=> {
					TypeCheck.current.type = "ADD"
					setOpen(true)
				}}>
					<p>ADD NEW</p>
				</button>
			</div>
			<div className="page-container">
				<div className="column-item">
					<div className="container-card">
						{list.map((value, index) => (
							<Card key={index} value={value} getValueAndEdit={getValueAndEdit} getIdAndDelete={getIdAndDelete}/>
						))}
					</div>
				</div>
			</div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<Box width="600px" boxSizing="border-box" p={3}>
					<FormData getDataForm ={getDataForm} TypeCheck={TypeCheck.current} />
				</Box>
			</Dialog>
		</React.Fragment>
	);
}
