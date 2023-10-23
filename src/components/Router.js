import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './RutasParametros/Home';
import NotFound from './RutasParametros/NotFound';
import TablaMultiplicar from './RutasParametros/TablaMultiplicar';
import { useParams } from 'react-router-dom';
import Collatz from './RutasParametros/Collatz';
import MenuRutas from './RutasParametros/MenuRutas';

export default class Router extends Component {
  render() {

    function TablaMultiplicarElement() {
        //esta funcion permite capturar los parametros
        //de la ruta de forma dinamica 
        var { minumero } = useParams();

        //devolvemos la etiqueta <tablamultiplicar> con su prop
        return <TablaMultiplicar numero={minumero}/>
    }

    function CollatzElement(){
      var { numero } = useParams();

      return <Collatz numero={numero}/>
    }

    //el * en path es para cuando no encuentra una ruta
    return (
      <BrowserRouter>
        {/*aqui incluimos los dibujos estáticos para el menú de rutas */}
        <h1 style={{color:"blue"}}>Menú en el router</h1>
        <MenuRutas />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/tabla/:minumero" element={<TablaMultiplicarElement />} />
            <Route path="/collatz/:numero" element={<CollatzElement />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
