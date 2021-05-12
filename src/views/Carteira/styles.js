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
  padding-top: 200px;
  margin-left: 380px;
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

export const Save = styled.div`
  width: 100%;
  margin-top: 60px;

  button{
  width: 40%;
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