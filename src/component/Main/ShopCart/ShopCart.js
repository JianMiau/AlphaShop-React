import Product from "./Product/Product"
import styled from "styled-components"
const ShopCartStyle = styled.div`
width: 100% ;
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
        <section className='cart-info shipping col col-12'>
          <div className='text'>運費</div>
          <div className='price' />
        </section>
        <section className='cart-info total col col-12'>
          <div className='text'>小計</div>
          <div className='price' />
        </section>
      </ShopCartStyle>

    </section>

  )
}
export default ShopCart
