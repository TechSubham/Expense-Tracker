import React from 'react'
import Expenses from './Component/Expenses'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import First from './Component/First';
import Second from './Component/Second';
import Taskbar from './Component/Taskbar';
import SignUp from './Component/SignUp';
import Information from './Component/Info';
import Contact from './Component/Contact';
import Settings from './Component/settings';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={First} />
          <Route exact path="/second" component={Second} />
          <Route exact path="/taskbar" component={Taskbar} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/Info" component={Information} />
          <Route exact path="/Expenses" component={Expenses} />
          <Route exact path = "/Contact" component={Contact} />
          <Route exact path = "/settings" component={Settings} />
          <Route exact path = "/Second" component={Second} />
        </Switch>
      </Router>
    </div>
  )
}

export default App