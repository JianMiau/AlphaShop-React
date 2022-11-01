import styled from "styled-components"
const InputStyle = styled.div`
width: ${props => props.width};
`

function Input(props) {
  return (
    <InputStyle>
      <div className={"input-group"}>
        <div className="input-label">{props.label}</div>
        <input type={props.type} placeholder={props.placeholder} />
      </div>
    </InputStyle>

  )

}

export default Input