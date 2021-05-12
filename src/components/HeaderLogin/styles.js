import styled from 'styled-components'


export const Container = styled.div`
  
  width: 100%;
  height: 60px;
  background: #352584;
  border-bottom: 5px solid #E97909;
  margin: 0 auto;
  
  position: fixed;
  display: flex;
  bottom: 91%;
  
`
export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  
  img{
    width: 250px;
    height: 62px;
  
  }
  
`
export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

    &:hover{
      color: #E97909;
    }
  }

  .divisor::after{
    color: #FFF;
    font-weight: bold;
    content: "|";
    margin: 0 10px;
  }
  
`