import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default () => {
    return (
        <div id="app">
        <h1>Fundamentos React</h1>
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