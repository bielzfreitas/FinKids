import React, { useState, useEffect } from 'react'
import * as S from './styles'

import api from '../../services/api'

//components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SpentCard from '../../components/SpentCard'

function ListarTodos() {

  const [list, setList] = useState([])

  useEffect(() => {

    async function loadSpents() {

      const response = await api.get(`/show/${localStorage.getItem('id')}`)

      const data = response.data.spent

      const desires = data.filter((gastos) => {
        return gastos.desire === false

      })
      setList(desires)
    }
    loadSpents()
  }, [list])

  return (

    <S.Container>
      <Header />

      <S.Title>
        <h1>LISTA DE GASTOS</h1>
      </S.Title>

      <S.Content>
        {
          list.map(spent => (
            <SpentCard _id={spent._id} product={spent.product} description={spent.description} when={spent.when} value={spent.value} />
          ))
        }
      </S.Content>

      <Footer />
    </S.Container>

  )
}

export default ListarTodos;
