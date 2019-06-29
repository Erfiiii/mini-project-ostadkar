import React, { Component } from "react";
import Output from './Components/Output/Output';
import Input from "./Components/Input/Input";
import "./App.css";

class App extends Component {
  state = {
    inputs: [
      {
        name: "XL",
        value: 4,
        count: 0
      },
      {
        name: "L",
        value: 2,
        count: 0
      },
      {
        name: "SM",
        value: 1,
        count: 0
      }
    ],
    totalValue: 0,
    inputStrings: ""
  };

  handleCHange = e => {

    // FOR NOT MUTATING THE STATE

    let selectedValueIndex = this.state.inputs.findIndex(
      val => val.name === e.target.value
    );

    let selectedValue = {
      ...this.state.inputs[selectedValueIndex]
    };

    selectedValue.count++;

    let totalVal = this.state.totalValue;

    totalVal = totalVal + selectedValue.value;

    if (totalVal > 8) {
      return;
    }

    let copiedValues = [...this.state.inputs];

    copiedValues[selectedValueIndex] = selectedValue;

    let inputStrings = copiedValues
      .reduce( (acc, cur)=> {
        return cur.count > 0 ? `${acc}/${cur.count}${cur.name}` : acc
      },"")

    this.setState({
      inputs: copiedValues,
      totalValue: totalVal,
      inputStrings
    });

  };


  resetLayout = ()=> {
    return window.location.reload()
  }

  render() {
    return (
      <div className="App">
        <div className="input">Inputs: {this.state.inputStrings}</div>
        <Input onSelectChange={this.handleCHange}></Input>
        <div className="output">
          {this.state.inputs.map((val, index) => {
            let vals = [];
            for (let i = 0; i < val.count; i++) {
              vals.push(
                <Output item={val} i={i}></Output>
              );
            }
            return vals;
          })}
        </div>
        <button onClick={this.resetLayout} className="button">Reset</button>
      </div>
    );
  }
}

export default App;
