import './index.css'
import ReactDom from "react-dom";
import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'


ReactDom.render(
    <div id="app">
    <Primeiro></Primeiro>
    <ComParametro 
    titulo="Situação do aluno" 
    aluno="Thiago Henrique!" 
    nota={9.2}
    ></ComParametro>
    <ComParametro 
    titulo="Situação do aluno" 
    aluno="Maria!" 
    nota={8.5} />
    </div>,
        document.getElementById('root')
);