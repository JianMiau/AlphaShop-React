// import { useState } from 'react'
import Product from './Product'
import ShopCartStyle from './ShopCartStyle'
import { useCartData, useCartDispatch } from '../../Context/CartContext'
import { useFormData } from '../../Context/FormContext'

function ShopCart() {
  const cartData = useCartData()
  const dispatch = useCartDispatch()
  let totalPrice = cartData.find(item => item.id === 'total').totalPrice
  const shippingType = useFormData().form[2].shipping
  // 如果選擇DHL 運費+500
  if (shippingType === 'DHL') {
    totalPrice += 500
  }
  // 按紐onClick事件handler (加減事件合併)
  function handleOnClick(productId, event) {
    //如果按到plus按鈕,要先取外層才抓得到data-set
    if (event.target.parentNode.dataset.id === "plus") {
      dispatch({ type: 'plus', id: productId })
    }
    //如果按到minus按鈕
    else if (event.target.parentNode.dataset.id === "minus") {
      dispatch({ type: 'minus', id: productId })
    }
  }

  return (
    <section className='cart-container'>
      <ShopCartStyle>
        <h3 className='cart-title'>購物籃</h3>
        <section className='product-list' data-total-price='0'>
          <Product data={cartData} onClick={handleOnClick} />
        </section>
        <section className='cart-info shipping'>
          <div className='text'>運費</div>
          <div className='price'>{shippingType === 'standard' ? '免費' : '$500'}</div>
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
