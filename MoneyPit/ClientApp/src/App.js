import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import BudgetCategories from './Budget/BudgetCategories';
import AddPayee from 'Payee/AddPayee';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact {...{ path: '/', component: Home }} />
        <Route exact path='/counter' component={Counter} />
        <Route exact path='/fetch-data' component={BudgetCategories} />
        <Route exact path='/transactions' component={AddPayee} />
      </Layout>
    );
  }
}
