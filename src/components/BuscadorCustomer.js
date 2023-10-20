import React, {Component} from "react";
import axios from 'axios'
import Global from "../Global";

class BuscadorCustomer extends Component{

    //traemos la variable global
    urlApi = Global.urlApiCustomers;

    //creamos la referencia al imput
    cajaId = React.createRef();

    //el dibujo va a ser dinamico asi que declaramos state
    //con un customer
    state = {
        customer: [],
        status: false
    }

    //metodo para buscar el customer
    //como se manda desde un form hay que hacer el preventDefault
    buscarCustomer = (e) => {
        e.preventDefault();

        //recogemos el id de la caja
        var idCustomer = this.cajaId.current.value;

        //IMPORTANTE repasar la api para buscar el acceso correspondiente
        var request ="customers/"+idCustomer+".json";

        //hacemos la llamada
        axios.get(this.urlApi+request).then(response => {
            //cambiamos el state
            this.setState({
                customer: response.data.customer,
                status: true
            })
        })

    }

    componentDidMount = () => {
        console.log("Creando component...");
        //this.buscarCustomer();
    }

    render(){
        return(<div>

            <h1>Buscador por id</h1>

            <form onSubmit={this.buscarCustomer}>
                <label>Introduzca el id: </label>
                <input type="text" ref={this.cajaId}/>
                <button>Buscar!</button>
            </form>

            {
                this.state.status == true &&

                (<div>

                    <h2 style={{color: "green"}}>Cliente: {this.state.customer.contactName}</h2>
                    <h3 style={{color: "green"}}>Empresa: {this.state.customer.companyName}</h3>
                    <h3 style={{color: "green"}}>Ciudad: {this.state.customer.city}</h3>
                    <h3 style={{color: "green"}}>Cargo: {this.state.customer.contactTitle}</h3>
        
                </div>)

                
            }

            

            
        </div>)
    }
}

export default BuscadorCustomer;