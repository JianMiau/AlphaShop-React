import plusIcon from "../../../icons/plus.svg"
import minusIcon from "../../../icons/minus.svg"
import styled from "styled-components"
const ProductStyle = styled.div`
display: flex ;
.product-name,.product-price {
  display: inline-block;
}
`
const ProductImageStyle = styled.div`
width: 100px;
height: 100px;
.product-img {
  width: 100%;
  object-fit: contain ;
}
`
const ProductBtnStyle = styled.div`
.product-control {
  display: flex ;
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
          <span class="product-count">{props.count}</span>
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