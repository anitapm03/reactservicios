import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class EmpleadosOficios extends Component {

    urlEmpleados = Global.urlEmpleados;
    selectOficios = React.createRef();

    state = {
        oficios: [],
        statusOficios: false,
        empleados: [],
        statusEmpleados: false
    }

    componentDidMount = () => {
        this.loadOficios();
    }

    loadOficios = (e) => {
        if(e != null){
            e.preventDefault();
        }

        var request = "api/Empleados/oficios";

        axios.get(this.urlEmpleados + request).then(response => {

            this.setState({
                oficios: response.data,
                statusOficios: true
            })

        })
    }

    cargarEmpleados = (e) => {

        if(e != null){
            e.preventDefault();
        }

        var oficioSeleccionado = this.selectOficios.current.value;

        var request = "api/Empleados/EmpleadosOficio/"+oficioSeleccionado;

        axios.get(this.urlEmpleados + request).then(response => {

            this.setState({
                empleados: response.data,
                statusEmpleados: true
            })
        })
    }

  render() {
    return (
      <div>
        <h1>Empleados y oficios</h1>

        <form>
            <label>Seleccione un oficio: </label>
            <select ref={this.selectOficios}>

                {
                    this.state.statusOficios == true &&
                    (
                        this.state.oficios.map((oficio, index)=>{
                            return(<option key={index} value={oficio}>{oficio}</option>)
                        })
                    )
                }
            </select>
            <button onClick={this.cargarEmpleados}>Buscar!</button>
        </form>
        <hr></hr>

        <table border="1">
            <thead>
                <th>Id</th>
                <th>Apellido</th>
                <th>Oficio</th>
                <th>Salario</th>
                <th>Departamento</th>
            </thead>

            <tbody>
                {
                    this.state.statusEmpleados == true &&
                    (
                        this.state.empleados.map((emp, index)=>{
                            return(<tr key={index}>

                                <td>{emp.idEmpleado}</td>
                                <td>{emp.apellido}</td>
                                <td>{emp.oficio}</td>
                                <td>{emp.salario}</td>
                                <td>{emp.departamento}</td>

                            </tr>)
                        })
                    )
                }
            </tbody>
        </table>
      </div>
    )
  }
}
