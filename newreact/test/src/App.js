import React from 'react';
import './App.css';
import Form from "./components/formComponent";
import List from "./components/listComponent";
import {Provider} from "react-redux";
import {createStore} from "redux";
import appReducer from "./redux/state";

let store = createStore(appReducer);

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Provider store={store}>
          <Form/>
          
          <List/>
       </Provider>
      </div>
    </div>
  );
}

export default App;
