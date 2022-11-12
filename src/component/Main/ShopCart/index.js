import { useState } from 'react'
import Product from './Product'
import ShopCartStyle from './ShopCartStyle'

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
  function handleOnClick(productId, event) {
    //如果按到plus按鈕,要先取外層才抓得到data-set
    if (event.target.parentNode.dataset.id === "plus") {
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
    //如果按到minus按鈕
    else if (event.target.parentNode.dataset.id === "minus") {
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
  }

  return (
    <section className='cart-container'>
      <ShopCartStyle>
        <h3 className='cart-title'>購物籃</h3>
        <section className='product-list' data-total-price='0'>
          <Product data={product} onClick={handleOnClick} />
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
