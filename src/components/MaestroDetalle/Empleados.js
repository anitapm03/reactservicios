import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios';


export default class Empleados extends Component {

    urlEmp = Global.urlEmpleados;

    state ={
        empleados: [],
        status: false
    }

    loadEmpleados = () => {
        console.log("hola")

        var idDepto = this.props.iddepto;
        var request = "api/empleados/empleadosdepartamento/" + idDepto;

        axios.get(this.urlEmp + request).then(response => {

            this.setState({
                empleados: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleados();
    }

    componentDidUpdate = (oldProps) => {

        //dentro del oldprops tenemos el anterior props antes del render
        console.log("old props "+ oldProps.iddepto);
        console.log("actual props "+ this.props.iddepto);

        //solamente cargamos los datos si props ha cambiado
        if ( oldProps.iddepto != this.props.iddepto){
            this.loadEmpleados();
        }
    }

  render() {
    return (
      <div>
        <h2 style={{color: "blue"}}>Empleados del dept. {this.props.iddepto}</h2>
        

        <table border="1">
            <thead>
                <tr>
                <th>Id</th>
                <th>Apellido</th>
                <th>Oficio</th>
                <th>Salario</th>
                <th>Departamento</th>
                </tr>
            </thead>
            <tbody>
            {
                this.state.status == true &&
                (this.state.empleados.map((emp, index) => {
                    return(<tr key={index}>
                        <td>{emp.idEmpleado}</td>
                        <td>{emp.apellido}</td>
                        <td>{emp.oficio}</td>
                        <td>{emp.salario}</td>
                        <td>{emp.departamento}</td>
                    </tr>)
                }))
            }

            </tbody>
        </table>
        
        </div>
    )
  }
}
