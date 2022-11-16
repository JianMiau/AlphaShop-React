import TextInputWrapStyle from "./TextInputWrapStyle"

function Input(props) {
  // 掛上onChange事件，傳回輸入值
  const setInput = props.event
  const input = props.input
  return (
    <TextInputWrapStyle width={props.width} marginRight={props.right}>
      <div className='input-group'>
        <div className='input-label'>{props.label}</div>
        <input type={props.type} placeholder={props.placeholder} maxLength={props.maxlength} value={props.value} name={props.name} onChange={(e) => { setInput({ ...input, [e.target.name]: e.target.value }) }} />
      </div>
    </TextInputWrapStyle>

  )
}

export default Input
