// @flow

import * as React from 'react'
import HeroesTable from './components/HeroesTable'
import { Header } from './components/Header'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="center w85">
      <Header/>
       <div className="ph3 pv1 background-gray">
         <Switch>
           <Route exact path="/" component={ HeroesTable } />
         </Switch>
       </div>
     </div>
  );
}

export default App;
