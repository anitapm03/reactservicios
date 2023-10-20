import React, { Component} from 'react';
//importamos la librería axios para trabajar con la api
import axios from 'axios';
import Global from '../Global';

class ServicioCustomer extends Component {

    //necesitamos la url de acceso al servicio api
    //urlApiCustomers = "https://northwind.netcore.io/customers.json";
    //tenemos la variable en global asi que la traemos
    urlApiCustomers = Global.urlApiCustomers;

    //necesitamos almacenar en state un conjunto de objetos customers
    state = {
        customers: []
    }


    //metodo para cargar todos los clientes del servicio
    loadCustomers = () => {
        console.log("loading customers...");

        //enviamos la request ya que solo tenemos el enlace principal en global
        var request = "customers.json";

        //LLAMADA A LA API
        axios.get(this.urlApiCustomers+request).then(response => {
            //console.log(response.data);

            this.setState({
                customers: response.data.results
            })
        })
    }

    //tendremos un metodo de ciclo de vida para cargar 
    //los clientes unicamente al cargar la primera vez
    componentDidMount = () => {
        console.log("Creando component");
        this.loadCustomers();
    }

    render() {
        return (<div>

            <h1>Accediendo a servicios</h1>

            

            {
                this.state.customers.map((cliente, index)=>{
                    return(<h2 style={{color:"blue"}} key={index}>{cliente.contactName}</h2>)
                })
            }

            

        </div>);
    }
}


export default ServicioCustomer;