import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import api from '../../services/api'
import * as S from './styles'

function CadastrarGasto() {

  const [id, setId] = useState()
  const [desire, setDesire] = useState(false)
  const [product, setProduct] = useState()
  const [description, setDescription] = useState()
  const [value, setValue] = useState()
  const [when, setWhen] = useState()

  async function Save() {
    //Validação de campos
    if (!product)
      return alert("Você precisar informar o nome do produto")
    else if (!description)
      return alert("Você precisa informar a descrição")
    else if (!value)
      return alert("Você precisa informar o valor do produto")
    else if (!when)
      return alert("Você precisa informar a data")
    /* ------------------------------------------------------------------------------- */
    await api.put(`/add/${localStorage.getItem('id')}`, {
      product,
      description,
      desire,
      value,
      when: `${when}T00:00:00`
    }).then(() => {
      alert("Gasto salvo com sucesso!")
    })
  }

  return (

    <S.Container>
      <Header />

      <S.Form>
        <S.Input>
          <input type="text" placeholder="Nome do produto" onChange={e => setProduct(e.target.value)} value={product} required />
        </S.Input>

        <S.TextArea>
          <textarea rows={5} placeholder="Descrição do produto" onChange={e => setDescription(e.target.value)} value={description} required />
        </S.TextArea>

        <S.Input>
          <input type="date" onChange={e => setWhen(e.target.value)} value={when} required />
        </S.Input>

        <S.Input>
          <input type="number" placeholder="R$" onChange={e => setValue(e.target.value)} value={value} required />
        </S.Input>

        <S.Options>
          <div>
            <input type="checkbox" checked={desire} onChange={() => setDesire(!desire)} />
            <span> É UM DESEJO?</span>
          </div>
        </S.Options>

        <S.Save>
          <button type="button" onClick={Save}>SALVAR</button>
        </S.Save>

      </S.Form>

      <Footer />
    </S.Container>

  )
}

export default CadastrarGasto;
