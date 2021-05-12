import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import api from '../../services/api'
import * as S from './styles'

import { history } from '../../history'

function Carteira() {

  const [wallet, setWallet] = useState()

  async function UpdateWallet() {
    //Validação de campos
    if (!wallet)
      return alert("Você precisar informar seu dinheiro")

    /* ------------------------------------------------------------------------------- */
    await api.put(`/wallet/${localStorage.getItem('id')}`, {
      wallet
    }).then(response => {
      return alert('Carteira atualizada com sucesso!')

    })
    history.push('/home')

  }

  return (

    <S.Container>
      <Header />

      <S.Form>
        <S.Input>
          <input type="number" placeholder="Carteira" onChange={e => setWallet(e.target.value)} value={wallet} required />
        </S.Input>

        <S.Save>
          <button type="button" onClick={UpdateWallet}>SALVAR</button>

        </S.Save>

      </S.Form>

      <Footer />
    </S.Container>

  )
}

export default Carteira;
