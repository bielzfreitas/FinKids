import React, { useState } from 'react'
import HeaderLogin from '../../components/HeaderLogin'
import Footer from '../../components/Footer'
import api from '../../services/api'
import * as S from './styles'

import back1 from '../../assets/back1.jpg'

import { history } from '../../history'

function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  async function Logon() {
    //Validação de campos
    if (!email)
      return alert("Você precisar informar o email")
    else if (!password)
      return alert("Você precisa informar a senha")

    /* ------------------------------------------------------------------------------- */
    await api.post('/login', {
      email,
      password
    }).then(response => {
      const { _id, name, email } = response.data

      if (_id, name, email) {

        localStorage.setItem('id', _id)
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        history.push('/home')
      }

    }).catch(() => {
      return alert('Email/senha inválidos')
    })

  }

  return (

    <S.Container>
      <HeaderLogin />

      <S.Form>
        <S.Input>
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} required />
        </S.Input>

        <S.Input>
          <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} value={password} required />
        </S.Input>

        <S.Save>
          <button type="button" onClick={Logon}>Logar</button>

        </S.Save>
        <a href="/forgot">Esqueceu a senha? Clique aqui!</a>
        <a href="/create">Não tem cadastro? Crie agora mesmo!</a>
      </S.Form>


      <Footer />
    </S.Container>

  )
}

export default Login;
