import React from 'react'

import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default () => {
    return (
        <div id="app">
        <h1>Fundamentos React</h1>
        <Aleatorio min={1} max={60}/>
        <Fragmento />
        <ComParametro 
            titulo="Situação do aluno" 
            aluno="Thiago Henrique!" 
            nota={9.2}
        />
        <Primeiro></Primeiro>  
        </div>

    )
}