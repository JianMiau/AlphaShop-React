import styled from 'styled-components'
const InputStyle = styled.div`
width: ${props => props.width}% ;
.input-group {
   box-sizing: border-box ;
  width: 100% ;
  display: flex ;
  flex-direction: column ;
  font-size: 1.8rem ;
  padding: 3% 0 ;
   & .input-label {
 font-size: 1.2rem;
    font-weight: 700 ;
  margin-bottom: 10px ;
  color:#808080;
 }
  & select {
    width: 95% ;
    font-size: 1.5rem ;
    border-radius: 10px ;
    padding: 12px 16px;
    height: 67px ;
    margin-top: 6px ;
  }
  }

`

function Option (props) {
  return (
    <>
      {props.data.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
    </>
  )
}

function SelectInput (props) {
  return (
    <InputStyle width={props.width}>
      <div className='input-group'>
        <div className='input-label'>{props.label}</div>
        <div className='select-container'>
          <select required>
            <Option data={props.data} />
          </select>
        </div>
      </div>
    </InputStyle>
  )
}
export default SelectInput
