import React from 'react'
import { Col } from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from "./style"
import Search from 'antd/es/transfer/search';
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperTextHeader> TIKI </WrapperTextHeader>
        </Col>
        <Col span={12}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
          // suffix={suffix}
          // onSearch={onSearch}
          /></Col>
        <Col span={6} style={{ display: 'flex', gap: '20px'}}>

          <WrapperHeaderAccount>
              <UserOutlined style={{ fontSize: '30px' }} />
            <div>
              <div>
                <WrapperTextHeaderSmall>Đăng Nhập/ Đăng Ký</WrapperTextHeaderSmall>
              </div>
              <div>
                <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <ShoppingCartOutlined style={{fontSize: '30px',color:'#fff'}} />
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent