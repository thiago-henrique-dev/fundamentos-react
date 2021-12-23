import './index.css'
import ReactDom from "react-dom";
import React from "react";

import Primeiro from './components/basicos/Primeiro'


ReactDom.render(
    <div>
        <Primeiro></Primeiro>
        <Primeiro></Primeiro>
    </div>,
        document.getElementById('root')
);