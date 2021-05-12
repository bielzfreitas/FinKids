import React, { Component } from 'react'
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import { history } from '../history'

import Home from '../views/Home'
import ListarTodos from '../views/ListarTodos'
import CadastrarGasto from '../views/CadastrarGasto'
import ListarDesejos from '../views/ListarDesejos'
import Login from '../views/Login'
import Cadastro from '../views/Cadastro'
import RecuperarLogin from '../views/RecuperarLogin'
import Carteira from '../views/Carteira'


const PrivateRoute = props => {
  const isLogged = !!localStorage.getItem('name')
  return isLogged ? <Route {...props} /> : <Redirect to='/' />
}

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/forgot' exact component={RecuperarLogin} />
      <Route path='/create' exact component={Cadastro} />
      <PrivateRoute path='/wallet' exact component={Carteira} />
      <PrivateRoute path='/home' exact component={Home} />
      <PrivateRoute path='/listar' exact component={ListarTodos} />
      <PrivateRoute path='/add' exact component={CadastrarGasto} />
      <PrivateRoute path='/desejos' exact component={ListarDesejos} />

    </Switch>
  </Router>
)


export default Routes