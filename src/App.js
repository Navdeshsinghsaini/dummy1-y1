import React from "react";
import "./App.css"
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/Store";
import { Provider } from "react-redux";


function App() {
  <Provider store={store} >
      return (
        
        <div>
              <Head /> 
              <Body />
        </div>
    
    
      )
    </Provider>
}

export default App;
