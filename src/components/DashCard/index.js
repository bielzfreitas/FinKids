import React, { useState, useEffect } from 'react'
import * as S from './styles'

import api from '../../services/api'




function DashCard() {

  const [total, setTotal] = useState([0])
  const [wallet, setWallet] = useState([])

  useEffect(() => {

    async function loadSpentsTotal() {

      const response = await api.get(`/show/${localStorage.getItem('id')}`)

      const wallet = response.data.wallet

      const data = response.data.spent
      const desires = data.filter((gastos) => {
        return gastos.desire === false

      })

      const myValues = desires.map(valor => valor.value)

      const reducer = ((accumulator, currentValue) => accumulator + currentValue);
      const total = (myValues.reduce(reducer, 0))
      setWallet(wallet - total)
      setTotal(total)

    }
    loadSpentsTotal()
  }, [total], [wallet])


  return (

    <S.Container>
      <S.TopCard>
        <h2>Total Gasto: R$ {total} </h2>


      </S.TopCard>
      <S.BottomCard>
        <h2>Carteira: R$ {wallet}</h2>
      </S.BottomCard>
    </S.Container>

  )
}

export default DashCard;
