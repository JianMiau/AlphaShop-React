import styled from "styled-components";
const FormStyle = styled.div`
font-size: 1rem ;
width: 100% ;
padding: 3% 0;
.form {
  display: flex ;
  flex-direction: column ;
}
.form-title {
  font-size: 2.4rem ;
}
.form-row {
  width: 100% ;
  display: flex ;
  & >*{
    border-radius: 25px ;
  }
}
`
export default FormStyle