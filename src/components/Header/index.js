import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'

function ClearStorage() {
  localStorage.removeItem('id')
  localStorage.removeItem('name')
  localStorage.removeItem('email')

}

function Header() {
  const name = localStorage.getItem('name')
  return (
    <S.Container>
      <S.LeftSide>

        <Link to='/home'>< img src={logo} alt="Logo" /> </Link>
        <span>Bem vindo {name}!</span>
      </S.LeftSide>
      <S.RightSide>
        <Link to="/wallet">MINHA CARTEIRA</Link>
        <span className="divisor" />
        <Link to="/add">CADASTRAR GASTO</Link>
        <span className="divisor" />
        <Link to="/listar">LISTAR GASTOS</Link>
        <span className="divisor" />
        <Link to="/desejos">MEUS DESEJOS</Link>
        <span className="divisor" />
        <Link to='/' onClick={ClearStorage}>SAIR</Link>
      </S.RightSide>
    </S.Container>

  )
}

export default Header;
