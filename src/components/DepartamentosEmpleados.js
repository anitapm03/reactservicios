import React, {Component} from "react";
import axios from 'axios';
import Global from "../Global";

class DepartamentosEmpleados extends Component{
    urlDeptos = Global.urlDeptos;
    urlEmpleados = Global.urlEmpleados;

    selectDepto = React.createRef();

    state = {
        departamentos: [],
        empleados: [],
        statusDept: false,
        statusEmp: false
    }

    componentDidMount = () =>{
        this.loadDeptos();
    }

    buscarEmpleados = (e) => {
        if (e != null){
            e.preventDefault();
        }

        var deptno = this.selectDepto.current.value;

        var request ="api/Empleados/EmpleadosDepartamento/" + deptno;
        
        axios.get(this.urlEmpleados + request).then(response =>{

            this.setState({
                empleados: response.data,
                statusEmp: true
            })
        })
        
    }

    loadDeptos = () => {

        var request = "api/departamentos"

        axios.get(this.urlDeptos + request).then(response =>{

            this.setState({
                departamentos: response.data,
                statusDept: true
            })
        })

    }

    render(){
        return(<div>
            <h1>Deptos y empleados</h1>

            <form>
                <label>Seleccione un departamento</label>
                <select ref={this.selectDepto}>

                    {
                        this.state.statusDept == true &&
                        (
                            this.state.departamentos.map((dept, index) => {
                                return(<option key={index} value={dept.Numero}>{dept.Nombre}</option>)
                            })
                        )
                    }
                </select>
                <button onClick={this.buscarEmpleados}>Mostrar empleados!</button>
            </form>

            <ul>
                {
                    this.state.statusEmp == true && 
                    (
                        this.state.empleados.map((emp, index) => {
                            return(<li key={index}>{emp.apellido}</li>)
                        })
                    )
                }


            </ul>


        </div>)
    }


}

export default DepartamentosEmpleados;