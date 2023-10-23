import React, { Component } from 'react';


export default class Collatz extends Component {

    state = {
        numeros: []

    }

    generarCollatz = () => {

        var aux = [];

        var numero = parseInt(this.props.numero);

        while (numero != 1){
            

            if (numero % 2 == 0){

                numero = numero / 2;

            } else {

                numero = numero * 3 + 1;
            }
            aux.push(numero);
        }

        this.setState({
            numeros: aux
        })


    }

    componentDidMount = () => {
        this.generarCollatz();
    }

    componentDidUpdate = (oldProps) => {

        if(oldProps.numero != this.props.numero){
            this.generarCollatz();
        }
        
    }

  render() {
    return (
      <div>
        <h1>Collatz</h1>

        <ul>
            {
                this.state.numeros.map((num, index) => {
                    return(<li key={index}>{num}</li>)
                })
            }

        </ul>
      </div>
    )
  }
}
