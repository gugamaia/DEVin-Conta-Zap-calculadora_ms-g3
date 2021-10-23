import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

export default function App() {
  const [valorTela,setValorTela]=useState('')
  const [resultado,setResultado]=useState(0)
  const [acumulador,setAcumulador]=useState(0)
  const [operacao,setOperacao]=useState(false)

  const Tela=(valor,resultadoFinal)=> { 
    return(
      <div style={}>
        <span style={}>{valor}</span>
        <span sytle={}>{resultadoFinal}</span>
      </div>
    )
  }

  const cssTela={
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    justifycontent:'center',
    alignItems: 'flex-start',
    backgroundColor: '#111',
    flexDirection: 'column',
    width: 260
  }

  const cssTelaOperacao={
    fontSize:25,
    color: '#fff',
    height:20
  }

  const cssTelaResiltado={
    fontSize:50,
    color: '#fff',
    height:20
  }

  return (
    <>

    </>
  );
}

export default App;
