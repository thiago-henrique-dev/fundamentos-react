import './App.css'
import React from 'react'
import Card from  './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'
import Familia from './components/basicos/Familia'
import ListaAlunos from './components/repetição/ListaAlunos'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import TabelaProdutos from './components/repetição/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicação/DiretaPai'
import IndiretaPai from './components/comunicação/IndiretaPai'
import Input from './components/formulario/Input'

export default () => {
    return (
        <div className="App">

        <h1>Fundamentos React</h1>

        <div className="Cards">

        <Card titulo="#11 Componente Controlado (Input) " color="#E45F56">
           <Input></Input>
       </Card>

        <Card titulo="#10 Comunicação indireta " color="#8BAD39">
           <IndiretaPai></IndiretaPai>
      
       </Card>


        <Card titulo="#9 Comunicação direta " color="#982395">
            <DiretaPai></DiretaPai>
      
       </Card>


        <Card titulo="#8 Renderização Condicional " color="#982395">
        <ParOuImpar numero={20}></ParOuImpar>
        <UsuarioInfo usuario={ { nome: 'Thiago' } } />
       {/* <UsuarioInfo usuario={ { {} } />
        <UsuarioInfo /> */}
       </Card>



        <Card titulo="#7 Desafio " color="#FF432E">
        <TabelaProdutos></TabelaProdutos>
      </Card>

        <Card titulo="#6 Repetição" color="#F4C65">
         
           <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#5 Familia Componente" color="#FA6900">
           <Familia sobrenome="Ferreira">
           <FamiliaMembro nome="Thiago" />
            <FamiliaMembro nome="Thiago" />
            <FamiliaMembro nome="Thiago" />
            </Familia>
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