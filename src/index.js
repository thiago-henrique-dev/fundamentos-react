import './index.css'
import ReactDom from "react-dom";
import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'


ReactDom.render(
    <div id="app">
    <Primeiro></Primeiro>
    <ComParametro 
    titulo="Situação do aluno" 
    aluno="Thiago Henrique!" 
    nota={9.2}/>
    <Fragmento />
    
    </div>,
        document.getElementById('root')
);