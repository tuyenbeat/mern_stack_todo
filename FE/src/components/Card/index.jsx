import React from 'react'

export default function Card({title, content, date}) {
  return (
    <div className="card-item">
    <div className="item-action">
             <h2 className="item-title">{title}</h2>
            <div className="item-icon">
                <div className="icon-wrap">
                    <img src="./images/icon-edit.png" alt="" className='image-contain' />
                </div>
                <div className="icon-wrap">
                    <img src="./images/icon-trash.png" alt="" className='image-contain' />
                </div>
            </div>
     </div>
    <h4 className="item-content">
    {content}
    </h4>
    <h6 className="item-date">
       {date}
    </h6>
    </div>   
  )
}
