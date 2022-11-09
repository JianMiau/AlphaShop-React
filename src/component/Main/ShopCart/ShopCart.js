import { useState } from 'react'
import Product from './Product/Product'
import styled from 'styled-components'
const ShopCartStyle = styled.div`
width: 100% ;
padding: 8px 6px;
border: 1px solid #F0F0F5 ;
border-radius: 8px;
box-sizing: border-box ;
.cart-title {
  font-size: 2.4rem ;
}
.cart-info {
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
  @media (min-width: 1000px) {
    padding: 32px 24px;
  }
`
const initialProducts = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1
  }
]

function ShopCart() {
  //主要父元件設置狀態
  const [product, setProducts] = useState(initialProducts)
  const copyProduct = Array.from(product) //先複製一份，使用mutate操作
  //總金額可以用狀態product資料去做計算
  let totalPrice = 0
  copyProduct.forEach(data => {
    totalPrice += data.quantity * data.price
  })
  // 按紐onClick事件handler
  function handleOnPlus(productId) {
    setProducts(product.map(item => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      else {
        return item
      }
    }))

  }
  function handleOnMinus(productId) {
    let NewProduct = product.map(item => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      else {
        return item
      }
    })
    //如果品項quantity變成0，不出現在cart內
    setProducts(NewProduct.filter(item => item.quantity > 0))
  }
  return (
    <section className='cart-container'>
      <ShopCartStyle>
        <h3 className='cart-title'>購物籃</h3>
        <section className='product-list' data-total-price='0'>
          <Product data={product} onClickPlus={handleOnPlus} onClickMinus={handleOnMinus} />
        </section>
        <section className='cart-info shipping'>
          <div className='text'>運費</div>
          <div className='price'>免費</div>
        </section>
        <section className='cart-info total'>
          <div className='text'>小計</div>
          <div className='price'>${totalPrice}</div>
        </section>
      </ShopCartStyle>

    </section>

  )
}
export default ShopCart
