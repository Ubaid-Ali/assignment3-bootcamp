import React from 'react';
import Dinner from './dinner';
import './App.css';

function App(props) {
  return (

    <div align="center">
      <Dinner dish="Biryani" sweetDish="Kheer" />
      <hr />
      <Dinner dish="Tikka Boti" sweetDish="Gajar ka Halwa" />
      <hr />
      <Dinner dish="Chicken Karahi" sweetDish="Chocolates" />
    </div>
  );
}

export default App;
