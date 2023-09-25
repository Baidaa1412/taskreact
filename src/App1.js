import React, { useState } from 'react';

function App1() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    if (field === 'input1') {
      setInput1(value);
    } else if (field === 'input2') {
      setInput2(value);
    }
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const calculateResult = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Invalid input');
      return;
    }

    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        if (num2 === 0) {
          setResult('Division by zero');
        } else {
          setResult(num1 / num2);
        }
        break;
      default:
        setResult('Invalid operator');
    }
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <input
        type="number"
        placeholder="Enter number 1"
        value={input1}
        onChange={(e) => handleInputChange(e, 'input1')}
      />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        placeholder="Enter number 2"
        value={input2}
        onChange={(e) => handleInputChange(e, 'input2')}
      />
      <button onClick={calculateResult}>Calculate</button>
      <div>Result: {result}</div>
    </div>
  );
}

export default App1;
