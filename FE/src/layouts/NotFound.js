import React from 'react'

export  function NotFound() {
  return (
    <div className="notfound-page">
      <div className="page-left">
        <div className="page-logo">
          <img srcSet="/images/404-logo.png 2x" alt="" className="image-contain" />
          </div>
          <h3>PAGE not found!</h3>
          <h5>Bạn đã truy cập vào đường dẫn không hợp lệ chắc chắn rằng bạn đã sử dụng các thanh điều hướng của chúng tôi.</h5>
            <a href="/">
            <button>
            <h4>GoHome</h4>
            </button>
            </a>
        </div>
      <div className="page-right">
      <img srcSet="/images/404-image.png 2x" alt="" className="image-contain" />
      </div>
    </div>
  )
}
