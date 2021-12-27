import React from 'react'


export default props => {
    const cb = props.quandoClicar
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={ _ => cb('Thiago', "21", true)}               
            >Fornecer informações</button>
        </div>
    )
}