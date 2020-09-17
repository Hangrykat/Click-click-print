import React  from 'react';
import './shared-styles.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main'
import PrintPreview from './components/Main/PrintPreview/PrintPreview';


function App() {

  return (
    <div className="App">    
      {/*<Header />*/}
      <PrintPreview />
      <Main />
    </div>
  );
}

export default App;
