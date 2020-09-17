import React, { useContext }  from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main'
import {StateContext} from "./context"

function App() {
  const { setShowModal, showModal } = useContext(StateContext);
  return (
    <div className="App">{ showModal ? (<div id="modal-wrap" className="visible"></div>) :(<div id="modal-wrap" ></div>)}
      <div className="modal-window">
        <button onClick={ () => setShowModal(false)}>Back</button>
        <div className="modal-content">
          <h1>Print Preview</h1>
        </div>
      </div>
      {/*<Header />*/}
      <Main />
    </div>
  );
}

export default App;
