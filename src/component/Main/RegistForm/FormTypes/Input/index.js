import TextInputWrapStyle from "./TextInputWrapStyle"

function Input(props) {
  return (
    <TextInputWrapStyle width={props.width} marginRight={props.right}>
      <div className='input-group'>
        <div className='input-label'>{props.label}</div>
        <input type={props.type} placeholder={props.placeholder} maxLength={props.maxlength} />
      </div>
    </TextInputWrapStyle>

  )
}

export default Input
