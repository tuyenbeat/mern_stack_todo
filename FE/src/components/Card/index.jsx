import React from 'react';

export default function Card({ title, content, date, type}) {
	return (
	<div className="card-item">
		<div className="item-action">
			<h2 className="item-title">{title}</h2>
			<div className="item-icon">
				<div className="icon-wrap">
					<img src="/images/icon-edit.png" alt="" className="image-contain" />
				</div>
				<div className="icon-wrap">
					<img src="/images/icon-trash.png" alt="" className="image-contain" />
				</div>
			</div>
		</div>
		<h4 className="item-content">{content}</h4>
		<div style={{display: "flex", justifyContent: "space-between"}}>
		<h6 className="item-date">type: {type}</h6>
		<h6 className="item-date">{date}</h6>
		</div>
	</div>
	);
}
