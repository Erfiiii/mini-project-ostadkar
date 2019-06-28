import React, { Component } from "react";
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

  render() {
    return (
      <div className="App">
        <div className="input">Inputs: {this.state.inputStrings}</div>
        <div className="custom-select">
          <select onChange={this.handleCHange} value="" placeholder="select">
            <option></option>
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="SM">SM</option>
          </select>
        </div>
        <div className="output">
          {this.state.inputs.map((val, index) => {
            let vals = [];
            for (let i = 0; i < val.count; i++) {
              vals.push(
                <div className={"item-" + val.name} key={i}>
                  {val.name + (i + 1)}
                </div>
              );
            }
            return vals;
          })}
        </div>
      </div>
    );
  }
}

export default App;
