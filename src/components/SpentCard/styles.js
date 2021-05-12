import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 200px;
  box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
  border-radius: 10px;
  

  display: flex;
  align-items: flex-start;
  padding: 20px;
  justify-content: center;
  flex-direction: column;
  

  margin: 30px;
    
`

export const TopCard = styled.div`
 padding-bottom: 100px;
`

export const BottomCard = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-around;
  

  strong {
    color: #EE6B26;
    font-weight: bold;
  }

  span {
    color: #707070;
  }

`