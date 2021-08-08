import React, { useState } from 'react';

import { Provider } from 'react-redux';
import { store } from './store/Store';

import './App.css';
import { Route } from './routes/Route';


function App() {
 
  return (
    <Provider store={store}>
      <div className="App">
        <Route />
        
      </div>


    </Provider>
  );
}

export default App;
