import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
export  function NotFound() {

  const navigate = useNavigate();

  useEffect(()=> {
    toast.warn("Tự động chuyển về trang home sau 3s !")
    setTimeout(() => {
      navigate('/', {replace: true})
    }, 3000);
  }, [])
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
