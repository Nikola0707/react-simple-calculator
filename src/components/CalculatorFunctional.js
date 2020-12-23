import React, { useState } from "react";

const CalculatorFunctional = (props) => {
  const [initialResult, setInitialResult] = useState(0);
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [mathOperation, setMathOperation] = useState("");

  const inputOne = (event) => {
    const numOneValue = event.target.value;
    setNumOne(numOneValue);
  };
  const inputTwo = (event) => {
    const numTwoValue = event.target.value;
    setNumTwo(numTwoValue);
  };
  const inputOperation = (event) => {
    const operation = event.target.value;
    setMathOperation(operation);
  };

  const calculate = () => {
    const numberOne = numOne;
    const numberTwo = numTwo;
    const operation = mathOperation.toLowerCase();
    let result = 0;

    if (operation === "+" || operation === "plus") {
      result = Number(numberOne) + Number(numberTwo);
    } else if (operation === "-" || operation === "minus") {
      result = numberOne - numberTwo;
    } else if (operation === "*" || operation === "multiplay") {
      result = numberOne * numberTwo;
    } else {
      result = numberOne / numberTwo;
    }
    setInitialResult(result);
  };

  return (
    <div>
      <div>
        <input placeholder="First number" onChange={inputOne} />
      </div>

      <div>
        <input placeholder="Operation" onChange={inputOperation} />
      </div>

      <div>
        <input placeholder="Second number" onChange={inputTwo} />
      </div>

      <div>
        <button onClick={calculate}>Calculate!</button>
      </div>

      <div>
        Result=<span>{initialResult}</span>
      </div>
    </div>
  );
};

export default CalculatorFunctional;
