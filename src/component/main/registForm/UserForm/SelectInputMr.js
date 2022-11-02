import styled from "styled-components"
const InputStyle = styled.div`
width: ${(props) => props.width}% ; 
.input-group {
  width: 100% ;
  display: flex ;
  flex-direction: column ;
  font-size: 1.8rem ;
   padding: 10px ;
   & select {
    font-size: 1.5rem ;
    border-radius: 10px ;
  }
}


`


function SelectInputMr(props) {
  return (
    <InputStyle width={props.width}>
      <div className="input-group">
        <div className="input-label">稱謂</div>
        <div className="select-container">
          <select>
            <option value="mr" selected>先生</option>
            <option value="ms">女士</option>
            <option value="mx">不明</option>
          </select>
        </div>
      </div>
    </InputStyle>

  )
}

export default SelectInputMr