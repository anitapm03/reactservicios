import React, {Component} from "react";
import axios from 'axios';
import Global from "../Global";

class BuscadorCoches extends Component{

    urlCoches = Global.urlApiCoches;

    cajaMarca = React.createRef();

    state = {
        coches: [],
        status: false,
        cochesAll: []
    }

    componentDidMount = () => {
        console.log("Creando component...");
        this.loadCoches();
    }

    loadCoches = () => {

        console.log("cargando coches...");

        var request = "webresources/coches"

        axios.get(this.urlCoches+request).then(response => {
            console.log(response.data);

            this.setState({
                coches: response.data,
                status: true,
                cochesAll: response.data
            })
        })

    }

    filtrarCoches = (e) => {
        e.preventDefault();

        var marcaCoche = this.cajaMarca.current.value.toLowerCase();
        var cars = this.state.cochesAll;
        var aux = [];

        //asi se hace con bucles
        /*for (var car of coches){

            if (car.marca.toLowerCase() == marcaCoche) {
                
                aux.push(coche);
            }
        }
        this.setState({
            coches: aux,
            status: true
        })*/
        
        //tambien podemos hacerlo con filter de la clase array
        aux = cars.filter(car => car.marca.toLowerCase().includes(marcaCoche));

        this.setState({
            coches: aux,
            status: true
        })
        
    }

    render(){

        return(<div>

            <h1>Buscador de coches</h1>

            <form onSubmit={this.filtrarCoches}>

                <label>Introduzca la marca: </label>
                <input type="text" ref={this.cajaMarca} />
                <button>Buscar!</button>

            </form>
            <hr></hr>

            


        <table border="1">
            <thead>
                <tr>
                    <th>Coche</th>
                    <th>Conductor</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.status === true &&
                    (
                        this.state.coches.map((coche, index) => {
                            return(
                            <tr key={index}>

                                <td>
                                    {coche.marca + " " + coche.modelo}
                                </td>

                                <td>
                                    {coche.conductor}
                                </td>

                                <td>
                                <img  src={coche.imagen} style={{width: "100px", height: "100px"}} />
                                </td>

                            </tr>)
                        })
                    )
                }

            </tbody>
        </table>

        </div>)
    }



}

export default BuscadorCoches;


