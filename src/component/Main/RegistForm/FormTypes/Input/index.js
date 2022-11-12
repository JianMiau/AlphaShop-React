import InputTextStyle from "./InputTextStyle"

function Input(props) {
  return (
    <InputTextStyle width={props.width} marginRight={props.right}>
      <div className='input-group'>
        <div className='input-label'>{props.label}</div>
        <input type={props.type} placeholder={props.placeholder} maxLength={props.maxlength} />
      </div>
    </InputTextStyle>

  )
}

export default Input
