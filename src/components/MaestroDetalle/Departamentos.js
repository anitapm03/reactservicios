import React, { Component } from 'react';
import Global from '../../Global';
import axios from 'axios';
import Empleados from './Empleados';

export default class Departamentos extends Component {

    selectDeptos = React.createRef();
    urlDeptos = Global.urlDeptos;

    state = {
        idDepto: -1,
        departamentos: [],
        status: false
    }

    loadDepartamentos = () => {

        var request = "api/departamentos";

        axios.get(this.urlDeptos + request).then(response => {

            this.setState({
                departamentos: response.data,
                status: true
            })

        })
    }

    buscarEmpleados = (e) => {

        if (e != null){
            e.preventDefault();
        }

        //recuperamos el id del select
        var id = this.selectDeptos.current.value;

        this.setState({
            idDepto: id
        })

    }

    componentDidMount = () => {
        console.log("iniciando component deptos...");
        this.loadDepartamentos();
    }


  render() {
    return (
      <div>
        <h1>Departamentos</h1>
        
        <form>
            <label>Seleccione un departamento</label>
            <select ref={this.selectDeptos}>
                {
                    this.state.status == true &&
                    (this.state.departamentos.map((depto, index)=>{
                        return(<option key={index} value={depto.Numero}>{depto.Nombre}</option>)
                    }))
                }
            </select>
            <button onClick={this.buscarEmpleados}>Mostrar empleados!</button>
            <h2>Depertamento seleccionado: {this.state.idDepto}</h2>
        </form>
        {
            this.state.idDepto != -1 &&
            (<Empleados iddepto={this.state.idDepto}/>)
        }
      
      
      </div>
    )
  }
}
