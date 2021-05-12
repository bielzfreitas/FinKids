import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'

function HeaderLogin() {
  return (
    <S.Container>
      <S.LeftSide>
        <Link to='/home'>< img src={logo} alt="Logo" /> </Link>
      </S.LeftSide>
    </S.Container>

  )
}

export default HeaderLogin;
