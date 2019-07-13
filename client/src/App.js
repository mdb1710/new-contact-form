import React from 'react';
import Form from './Form';
import Header from './Header';



const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='new-form'>
      <Form />
      </div>
    </div>
  );
}

export default App;
