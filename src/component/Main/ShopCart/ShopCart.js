import Product from "./Product/Product"
import styled from "styled-components"
const ShopCartStyle = styled.div`
width: 100% ;
padding: 32px 24px;
border: 1px solid #F0F0F5 ;
border-radius: 8px;
.cart-title {
  font-size: 2.4rem ;
}
.cart-info {
  width: 100% ;
  display: flex;
  justify-content: space-between ;
  align-items: flex-end;
  height: 37px ;
  border-top: 1px solid #F0F0F5 ;
  font-size: 1.4rem ;
  margin-bottom: 32px ;
  padding-top: 16px ;
  & .text {
    font-weight: 400 ;
  }
   & .price {
    font-weight: 700 ;
  }
}
`
const prdoucts = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]


function ShopCart() {
  return (
    <section className='cart-container'>
      <ShopCartStyle>
        <h3 className='cart-title'>購物籃</h3>
        <section className='product-list' data-total-price='0'>
          <Product data={prdoucts} />
        </section>
        <section className='cart-info shipping'>
          <div className='text'>運費</div>
          <div className='price'>免費</div>
        </section>
        <section className='cart-info total'>
          <div className='text'>小計</div>
          <div className='price'>${5298}</div>
        </section>
      </ShopCartStyle>

    </section>

  )
}
export default ShopCart
