import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 00px;
  width: 300px;
  height: 300px;
  box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
  border-radius: 10px;
  
  display: flex;
  align-items: flex-start;
  
  justify-content: center;
  flex-direction: column;
    
`

export const TopCard = styled.div`
 width: 100%;
 padding-bottom: 50px;
 display: flex;
 
 justify-content: space-around;
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

