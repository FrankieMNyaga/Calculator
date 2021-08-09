import './App.css';
import React from "react";

let isNegative = false;
class calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentValue: "", prevValue: "",operation: ""};
    this.HandleOperation = this.HandleOperation.bind(this);
  }
  NegativeInput() {
    if ((isNegative === false)) {
      this.setState({currentValue: "-".concat(this.state.currentValue)});
      isNegative = true;
    }
    else if ((isNegative === true)) {
      this.setState({currentValue: this.state.currentValue.slice(1, this.state.currentValue.length)});
      isNegative = false;
    }
  }
  HandleClr() {
    isNegative = false;
    this.setState({currentValue: ""})
    this.setState({prevValue: ""})
  }
  HandleOperation() {
    this.setState({prevValue: this.state.currentValue})
    this.setState({currentValue: ""})
  }
  HandleArithmetic(operand) {
    this.HandleOperation()
    this.setState({operation: operand})
  }
  Calculation() {
    let result;
    switch (this.state.operation) {
      case "+": {
        result = Number(this.state.prevValue) + Number(this.state.currentValue);
        this.setState({prevValue: ""});
        this.setState({currentValue: ""});
        this.setState({prevValue: result});
        break;
      }
      case "-": {
        result = Number(this.state.prevValue) - Number(this.state.currentValue);
        this.setState({prevValue: ""});
        this.setState({currentValue: ""});
        this.setState({prevValue: result});
        break;
      }
      case "x": {
        result = Number(this.state.prevValue) * Number(this.state.currentValue);
        this.setState({prevValue: ""});
        this.setState({currentValue: ""});
        this.setState({prevValue: result});
        break;
      }
      case "/": {
        result = Number(this.state.prevValue) / Number(this.state.currentValue);
        this.setState({prevValue: ""});
        this.setState({currentValue: ""});
        this.setState({prevValue: result});
      }
    }
  }
  render() {
    return (
      <div className = "calculator">
          <table className = "table-body">
            <tbody>
              <div className = "outputs">
                <tr>
                  <td>
                    {this.state.prevValue}
                  </td>
                </tr>
                <tr>
                  <td>
                    {this.state.currentValue}
                  </td>
                </tr>
              </div>
              <div className = "table">
                <tr>
                  <td>
                    <button className = "btn" onClick = {() => this.HandleClr()}>
                      clr
                    </button>
                  </td>
                  <td>
                    <button className = "btn" onClick = {() => this.NegativeInput()}>
                      +/-
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className = "btn" onClick = {() => this.setState({currentValue: this.state.currentValue.concat(7)})}>
                      7
                    </button>
                  </td>
                  <td>
                    <button className = "btn" onClick = {() => this.setState({currentValue: this.state.currentValue.concat(8)})}>
                      8
                    </button>
                  </td>
                  <td>
                    <button className = "btn" onClick = {() => this.setState({currentValue: this.state.currentValue.concat(9)})}>
                      9
                    </button>
                  </td>
                  <td>
                    <button className = "btn" onClick = {() => this.HandleArithmetic("/")}>
                      /
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className = "btn" onClick = {() => this.setState({currentValue: this.state.currentValue.concat(4)})}>
                      4
                    </button>
                  </td>
                  <td>
                    <button className = "btn" onClick = {() => this.setState({currentValue: this.state.currentValue.concat(5)})}>
                      5
                    </button>
                  </td>
                  <td>
                    <button className = "btn" onClick = {() => this.setState({currentValue: this.state.currentValue.concat(6)})}>
                      6
                    </button>
                  </td>
                  <td>
                    <button className = "btn" onClick = {() => this.HandleArithmetic("x")}>
                      x
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className = "btn" onClick = {() => this.setState({currentValue: this.state.currentValue.concat(1)})}>
                      1
                    </button>
                  </td>
                  <td>
                    <button className = "btn" onClick = {() => this.setState({currentValue: this.state.currentValue.concat(2)})}>
                      2
                    </button>
                  </td>
                  <td>
                    <button className = "btn" onClick = {() => this.setState({currentValue: this.state.currentValue.concat(3)})}>
                      3
                    </button>
                  </td>
                  <td>
                    <button className = "btn" onClick = {() => this.HandleArithmetic("-")}>
                      -
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className = "btn" onClick = {() => this.setState({currentValue: this.state.currentValue.concat(0)})}>
                      0
                    </button>
                  </td>
                  <td>
                    <button className = "btn" onClick = {() => this.setState({currentValue: this.state.currentValue.concat(".")})}>
                      .
                    </button>
                  </td>
                  <td>
                    <button className = "btn" onClick = {() => this.Calculation()}>
                      =
                    </button>
                  </td>
                  <td>
                    <button className = "btn" onClick = {() => this.HandleArithmetic("+")}>
                      +
                    </button>
                  </td>
                </tr>
              </div>
            </tbody>
          </table>
      </div>
    );
  }
}

export default calculator;
