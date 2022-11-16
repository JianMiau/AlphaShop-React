import RadioInputWrapStyle from "./RadioInputWrapStyle"
function RadioInput(props) {
  const input = props.input
  const setInput = props.event
  return (
    <RadioInputWrapStyle width={props.width} check={props.check}>
      <label className='radio-group' data-price='0' htmlFor="shipping-standard">
        <input id='shipping-standard' type='radio' name='shipping' defaultChecked={props.check} value={props.value} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
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
