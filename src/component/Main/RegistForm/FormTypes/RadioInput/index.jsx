import RadioInputWrapStyle from "./RadioInputWrapStyle"
function RadioInput(props) {
  return (
    <RadioInputWrapStyle width={props.width} >
      <label className='radio-group' data-price='0' htmlFor="shipping-standard">
        <input id='shipping-standard' type='radio' name='shipping' defaultChecked={props.check} />
        <div className='radio-info'>
          <div className='radio-title'>
            <div className='radio-text'>{props.title}</div>
            <div className='radio-price'>{props.price}</div>
          </div>
          <div className='radio-period'>{props.content}</div>
        </div>
      </label>
    </RadioInputWrapStyle>

  )
}
export default RadioInput
