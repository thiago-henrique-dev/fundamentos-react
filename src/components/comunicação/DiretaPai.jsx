import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Junior 1" idade ={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Gabriel 2" idade ={17} nerd={false}></DiretaFilho>

        </div>
    )
}