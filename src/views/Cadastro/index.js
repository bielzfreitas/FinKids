import React, { useState } from 'react'
import Footer from '../../components/Footer'
import api from '../../services/api'
import * as S from './styles'
import HeaderLogin from '../../components/HeaderLogin'

import { history } from '../../history'

function Cadastro() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  async function Save() {
    //Validação de campos
    if (!name)
      return alert("Você precisar informar o nome")
    else if (!email)
      return alert("Você precisa informar o email")
    else if (!password)
      return alert("Você precisa informar a senha")

    /* ------------------------------------------------------------------------------- */
    await api.post('/create', {
      name,
      email,
      password,

    }).then(() => {
      alert("Cadastro criado com sucesso!")
      history.push('/')
    })
  }

  return (

    <S.Container>
      <HeaderLogin />

      <S.Form>
        <S.Input>
          <input type="text" placeholder="Nome" onChange={e => setName(e.target.value)} value={name} required />
        </S.Input>

        <S.Input>
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} required />
        </S.Input>

        <S.Input>
          <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} value={password} required />
        </S.Input>

        <S.Save>
          <button type="button" onClick={Save}>CADASTRAR</button>
        </S.Save>

      </S.Form>

      <Footer />
    </S.Container>

  )
}

export default Cadastro;
