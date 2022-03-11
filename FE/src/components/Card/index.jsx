import React from 'react';

export default function Card({ value, getIdAndDelete, getValueAndEdit }) {
	return (
		<div className="card-item">
			<div className="item-action">
				<h2 className="item-title">{value.title}</h2>
				<div className="item-icon">
					<div
						className="icon-wrap"
						onClick={() => {
							getValueAndEdit(value);
						}}
					>
						<img src="/images/icon-edit.png" alt="" className="image-contain" />
					</div>
					<div
						className="icon-wrap"
						onClick={() => {
							getIdAndDelete(value._id);
						}}
					>
						<img src="/images/icon-trash.png" alt="" className="image-contain" />
					</div>
				</div>
			</div>
			<h4 className="item-content">{value.content}</h4>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<h6 className="item-date">type: {value.type}</h6>
				<h6 className="item-date">{value.updatedAt}</h6>
			</div>
		</div>
	);
}
