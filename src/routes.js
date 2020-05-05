import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LivroListagem from './pages/Livros/Listagem';
import LivroForm from './pages/Livros/Form';
import Header from './components/Header';

const Routes = () => {
  return(
    <BrowserRouter>
      <Header /> 
      <Switch>
        <Route path="/" exact component={LivroListagem} />
        <Route path="/form/:id?" component={LivroForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
