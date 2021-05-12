import React, { useState } from 'react'
import HeaderLogin from '../../components/HeaderLogin'
import Footer from '../../components/Footer'

import api from '../../services/api'

import * as S from './styles'

import { history } from '../../history'

function RecuperarLogin() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()


  async function Forgot() {
    //Validação de campos
    if (!name)
      return alert("Você precisar informar o email")
    else if (!email)
      return alert("Você precisa informar a senha")

    /* ------------------------------------------------------------------------------- */
    await api.post('/forgot', {
      name,
      email
    }).then(response => {
      const password = response.data

      if (password === 'dado inválido') {
        alert('Cadastro inexistente')

      } else if (password !== 'dado inválido')

        alert('Anote sua senha: ' + password)
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

        <S.Save>
          <button type="button" onClick={Forgot}>Recuperar Senha</button>


        </S.Save>

      </S.Form>

      <Footer />
    </S.Container>

  )
}

export default RecuperarLogin;
