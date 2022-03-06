 import React from 'react'
 import { useSelector, useDispatch } from 'react-redux'
export  function LoginPage() {

  return (
    <div className="login-page">
      <div className="container">
        <form className='form-wrap'>
          <div className="form-item">
              <div className="item-icon">
                <img src="./images/icon-user.png" alt=""  className='image-cover' />
                </div>
              <input type="text" className="item-input" placeholder='Nhập tài khoản ...' />
            </div>
            <div className="form-item">
              <div className="item-icon">
                <img src="./images/icon-password.png" alt="" className='image-cover' />
                </div>
              <input type="password" className="item-input" placeholder='Nhập mật khẩu ...' />
            </div>
            <button type='submit' className="item-button">
              <h3>ĐĂNG NHẬP</h3>
            </button>
            <div className="form-text"><a href="/">Quay lại trang chủ</a></div>
        </form>
      </div>
      <div className="login-image">
        <img srcSet="./images/login-image.png 2x" alt=""  className='image-contain' />
      </div>
    </div>
  )
}
