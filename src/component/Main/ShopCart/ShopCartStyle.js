import styled from "styled-components";
const ShopCartStyle = styled.div`
width: 100% ;
padding: 8px 6px;
border: 1px solid #F0F0F5 ;
border-radius: 8px;
box-sizing: border-box ;
.cart-title {
  font-size: 1.8rem ;
  margin-bottom: 32px;
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
export default ShopCartStyle