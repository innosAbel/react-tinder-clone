import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Router>
          <Switch>
          <Route path="/chat/:person">
              <Header backButton="/chat" />
              <ChatScreen />
            </Route>
            <Route path="/chat">
              <Header backButton="/" />
              <Chats />
            </Route>
            <Route path="/">
              <Header />
              <TinderCards />
              <SwipeButtons />
            </Route>
          </Switch>
        </Router>


        {/* Chat screens */}
        {/* Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
