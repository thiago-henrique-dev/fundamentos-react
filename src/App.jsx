import React from 'react'
import Card from  './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default () => {
    return (
        <div id="app">

        <h1>Fundamentos React</h1>

        <Card titulo="Desafio aleatorio">
            <Aleatorio min={1} max={60}/>
        </Card>

        <Card titulo="#03Fragmento">
        <Fragmento />
        </Card>

        <Card titulo="#02Com Parâmetro">
       
        <ComParametro 
            titulo="Com Parâmetro" 
            aluno="Thiago Henrique!" 
            nota={9.2}/>
        </Card>

        <Card titulo="#01 Primeiro Componente">
      
             <Primeiro></Primeiro> 
        </Card>

        
        </div>

    )
}