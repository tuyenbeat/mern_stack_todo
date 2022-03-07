import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card';
import { TodoApi } from '../../api/TodoApi';
export default function CardList() {
	const param = useParams();
	const [list, setList] = useState([]);
	useEffect(() => {
		const getAPI = async () => {
			const data = await TodoApi.getList();
			console.log(param)
             const newData = data.filter((value)=> {
                if(!param["*"]) return  value
                return value.type  === param.type
            })
            setList(newData)
		};
		getAPI();
	}, [param]);
	return (
		<React.Fragment>
			<div className="page-container">
				<div className="column-item">
					<div className="container-card">
						{list.map((value, index) => (
							<Card title={value.title} content={value.content} date={value.createdAt} key={index} type={value.type} />
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
