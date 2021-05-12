import styled from 'styled-components'

export const Container = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Form = styled.div`

  width: 50%;
  height: 500px;
  padding-top: 100px;
  margin-bottom: 70px; 
`
export const Input = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  input{
    font-size: 16px; 
    padding: 15px;
    border: none;
    border-bottom: 1px solid #EE6B26; 
  }
`
export const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  textarea{
    font-size: 16px;
    border: 1px solid #EE6B26;
    border-radius: 10px;
  }
     
`

export const Options = styled.div`
  display: flex;
  justify-content: space-between;

  div{
    display: flex;
    align-items: center;
    color: #EE6B26;
    font-weight: bold;
    font-size: 18px;
  }
`
export const Save = styled.div`
  width: 100%;
  margin-top: 30px;

  button{
  width: 100%;
  background-color: #EE6B26;
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: #FFF;
  padding: 15px;
  border-radius: 30px;
  cursor: pointer;

  &:hover{
    opacity: 0.7;
  }

  } 
`