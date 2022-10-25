import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Dropdown from './components/Dropdown';
import Input from './components/Input';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [div1, setDiv1] = useState("");
  const [div2, setDiv2] = useState("");

  return (
    <>
      <h1>Conversión de divisas</h1>
      <Dropdown titulo = "Primera Divisa: " setDiv ={setDiv1}/>
      <p></p>
      <Dropdown titulo = "Segunda Divisa: " setDiv ={setDiv2}/>
      <p></p>
      <Input div1 = {div1} div2 = {div2} />
    </>
  );
};

root.render(
  <App/>  
);
