import React, { useMemo } from 'react'
import { format } from 'date-fns'
import api from '../../services/api'
import * as S from './styles'


function SpentCard({ _id, product, description, when, value }) {

  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));

  async function Remove() {
    await api.post(`/delete/${localStorage.getItem('id')}`, {
      _id
    }).then(() => {
      alert('Gasto excluído!')
    })

  }

  return (

    <S.Container>
      <S.TopCard>
        <h2>Produto: {product}</h2>
        <h4>Descrição: {description}</h4>

      </S.TopCard>
      <S.BottomCard>
        <strong>{date}</strong>
        <span>R${value}</span>
        <button type="button" onClick={Remove}>Excluir</button>

      </S.BottomCard>
    </S.Container>

  )
}

export default SpentCard;
