import styled from "styled-components"
const ProductStyle = styled.div`
display: flex ;
padding-bottom: 33px ;
.product-info {
  margin-left: 21px ;
  width: 100% ;
  @media (min-width: 800px) {
      margin-left: 10px ;
    }
  @media (min-width: 1000px) {
      margin-left: 21px ;
    }
}

.product-name,.product-price {
  display: inline-block;
  font-size: 1.6rem ;
  width: 50% ;
   @media (min-width: 800px) {
      font-size: 1.2rem ;
    }
  @media (min-width: 1000px) {
      font-size: 1.6rem ;
    }
}
& .product-name {
  margin-bottom: 24px ;
  font-weight: 400 ;
}
& .product-price {
  margin-bottom: 24px ;
  font-weight: 700 ;
  text-align: end ;
}
`
const ProductImageStyle = styled.div`
width: 100px;
height: 100px;
.product-img {
  width: 100%;
  object-fit: contain ;
  border-radius: 4px ;
}
`
const ProductBtnStyle = styled.div`
.product-control {
  display: flex ;
  font-size: 1.4rem ;
  & button {
    width: 24px ;
    height: 24px ;
    line-height: 24px ;
    padding: 5px ;
    border-radius: 50% ;
    border: transparent ;
    & :hover {
      cursor: pointer;
    }
    & > img {
    width: 100% ;
    object-fit: contain ;
  }
  }
   & .product-count {
      width: 53.12px;
      text-align: center ;
      line-height: 1.4rem ;
    }
}

`
export { ProductStyle, ProductBtnStyle, ProductImageStyle }