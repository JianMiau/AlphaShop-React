import plusIcon from "../../../icons/plus.svg"
import minusIcon from "../../../icons/minus.svg"
import styled from "styled-components"
const ProductStyle = styled.div`
display: flex ;
padding-bottom: 33px ;
.product-info {
  margin-left: 21px ;
  width: 100% ;
}

.product-name,.product-price {
  display: inline-block;
  font-size: 1.6rem ;
  width: 50% ;
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
    line-height: 26px ;
    border-radius: 50% ;
    border: transparent ;
    & :hover {
      cursor: pointer;
    }
    & > img {
    width: 100% ;
    object-fit: cover ;
  }
  }
   & .product-count {
      width: 53.12px;
      text-align: center ;
      line-height: 1.4rem ;
    }
}

`
function ProductImage(props) {
  return (
    <div className="img-container">
      <ProductImageStyle>
        <img className='product-img' src={props.image} alt={props.name} />
      </ProductImageStyle>
    </div>
  )
}

function ProductBtn(props) {
  return (
    <div className='product-control-container'>
      <ProductBtnStyle>
        <div className='product-control'>
          <button>
            <img className="product-action-minus" src={minusIcon} alt="minus-btn" />
          </button>
          <span className="product-count">{props.count}</span>
          <button>
            <img className="product-action-minus" src={plusIcon} alt="plus-btn" />
          </button>
        </div>
      </ProductBtnStyle>
    </div>
  )
}


function Product(props) {
  return (
    <>
      {props.data.map(item => (
        <div className='product-container' key={item.id}>
          <ProductStyle>
            <ProductImage image={item.img} />
            <div className='product-info'>
              <div className='product-name'>{item.name}</div>
              <div className='product-price'>${item.price}</div>
              <ProductBtn count={item.quantity} />
            </div>
          </ProductStyle>
        </div>
      ))}
    </>
  )
}

export default Product