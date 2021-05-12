import styled from 'styled-components'

export const Container = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a{
  width: 80%;
  border: none;
  font-size: 20px;
  }
`
export const Form = styled.div`
  width: 40%;
  height: 800px;
  padding-top: 160px;
  margin-bottom: 100px;
  margin-left:260px; 


  a{
  width: 50%;
  border: none;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: center;
  
  }
`
export const Input = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  justify-content: center;

  input{
    font-size: 16px; 
    padding: 15px;
    border: none;
    border-bottom: 1px solid #EE6B26; 
  }
`

export const Save = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;

  button{
  width: 50%;
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

  a{
  width: 50%;
  border: none;
  font-size: 20px;
  }
`
