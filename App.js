import React, { Component } from 'react';

class Contador extends Component {
  constructor(props) {
    super(props);
    // Inicializando o estado com o valor 0
    this.state = {
      valor: 0
    };
  }

  // Função para adicionar 1 ao valor
  adicionar = () => {
    this.setState(prevState => ({
      valor: prevState.valor + 1
    }));
  };

  // Função para subtrair 1 ao valor
  subtrair = () => {
    this.setState(prevState => ({
      valor: prevState.valor - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Valor: {this.state.valor}</h1>
        <button onClick={this.adicionar}>Adicionar 1</button>
        <button onClick={this.subtrair}>Subtrair 1</button>
      </div>
    );
  }
}

export default Contador;
