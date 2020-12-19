import React from "react";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      initialResult: 0,
      numOne: "",
      numTwo: "",
      mathOperation: "",
    };
  }

  inputOne = (event) => {
    const numOneValue = event.target.value;
    this.setState({ numOne: numOneValue });
  };
  inputTwo = (event) => {
    const numTwoValue = event.target.value;
    this.setState({ numTwo: numTwoValue });
  };
  inputOperation = (event) => {
    const operation = event.target.value;
    this.setState({ mathOperation: operation });
  };
  calculate = () => {
    const numberOne = this.state.numOne;
    const numberTwo = this.state.numTwo;
    const operation = this.state.mathOperation.toLowerCase();
    let result = 0

    if (operation === "+" || operation === 'plus') {
      result = Number(numberOne) + Number(numberTwo);
    } else if (operation === "-" || operation === 'minus') {
      result = numberOne - numberTwo;
    } else if (operation === "*" || operation === 'multiplay') {
      result = numberOne * numberTwo;
    } else {
      result = numberOne / numberTwo;
    }
    this.setState({initialResult: result})
  };

  render() {
    return (
      <div>
        <div>
          <input placeholder="First number" onChange={this.inputOne} />
        </div>

        <div>
          <input placeholder="Operation" onChange={this.inputOperation} />
        </div>

        <div>
          <input placeholder="Second number" onChange={this.inputTwo} />
        </div>

        <div>
          <button onClick={this.calculate}>Calculate!</button>
        </div>

        <div>
          Result=<span>{this.state.initialResult}</span>
        </div>
      </div>
    );
  }
}

export { Calculator };
