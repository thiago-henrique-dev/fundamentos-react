import './App.css'
import React from 'react'
import Card from  './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'
import Familia from './components/basicos/Familia'
<<<<<<< HEAD
import ListaAlunos from './components/repetição/ListaAlunos'
=======
>>>>>>> c968b67d1aca0538d369fa2cb5345b98fc6e6ce6
import FamiliaMembro from './components/basicos/FamiliaMembro'

export default () => {
    return (
        <div className="App">

        <h1>Fundamentos React</h1>

        <div className="Cards">

        <Card titulo="#5 Repetição" color="#F4C65">
         
           <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#5 Familia Componente" color="#FA6900">
<<<<<<< HEAD
           <Familia sobrenome="Ferreira">
           <FamiliaMembro nome="Thiago" />
            <FamiliaMembro nome="Thiago" />
            <FamiliaMembro nome="Thiago" />
            </Familia>
=======
           <Familia sobrenome="Henriques">
           <FamiliaMembro nome="Thiago" />
           
           <FamiliaMembro nome="Ana"  /> 
           <FamiliaMembro nome="Gustavo" /> 
           </Familia> 
>>>>>>> c968b67d1aca0538d369fa2cb5345b98fc6e6ce6
        </Card>


        <Card titulo="#04 Desafio aleatorio" color="#FA6900">
            <Aleatorio min={1} max={60}/>
        </Card>

        <Card titulo="#03 Fragmento" color="#E94C6F">
        <Fragmento />
        </Card>

        <Card titulo="#02 Com Parâmetro" color="#E8B71A">
       
        <ComParametro 
            titulo="Com Parâmetro" 
            aluno="Thiago Henrique!" 
            nota={9.2}/>
        </Card>

        <Card titulo="#01 Primeiro Componente" color="#588C73">
      
             <Primeiro></Primeiro> 
        </Card>

        
        </div>
        </div>

    )
}