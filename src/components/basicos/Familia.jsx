import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {


    return (
        <div>
            <FamiliaMembro nome="Thiago" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Ana" {...props} /> 
            <FamiliaMembro nome="Gustavo" sobrenome="Silva" />
         
         

        </div>
    )


}