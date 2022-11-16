import plusIcon from '../../../../icons/plus.svg'
import minusIcon from '../../../../icons/minus.svg'
import { ProductStyle, ProductBtnStyle, ProductImageStyle } from './ProductStyle'

function ProductImage(props) {
  return (
    <div className='img-container'>
      <ProductImageStyle>
        <img className='product-img' src={props.image} alt={props.name} />
      </ProductImageStyle>
    </div>
  )
}

function ProductBtn(props) {
  const handleClick = props.onClick
  return (
    <div className='product-control-container'>
      <ProductBtnStyle>
        <div className='product-control'>
          <button data-id="minus" onClick={(event) => { handleClick(props.productId, event) }}>
            <img className='product-action-minus' src={minusIcon} alt='minus-btn' />
          </button>
          <span className='product-count'>{props.count}</span>
          <button data-id='plus' onClick={(event) => { handleClick(props.productId, event) }}>
            <img className='product-action-plus' src={plusIcon} alt='plus-btn' />
          </button>
        </div>
      </ProductBtnStyle >
    </div >
  )
}

function Product(props) {
  return (
    <>
      {props.data.map(item => {
        if (item.id !== 'total' && item.quantity > 0) {
          return (
            <div className='product-container' key={item.id}>
              <ProductStyle>
                <ProductImage image={item.img} />
                <div className='product-info'>
                  <div className='product-name'>{item.name}</div>
                  <div className='product-price'>${item.price}</div>
                  <ProductBtn count={item.quantity} productId={item.id} onClick={props.onClick} />
                </div>
              </ProductStyle>
            </div>
          )
        }
        return
      })}
    </>
  )
}

export default Product
