import React, { Component } from "react";
import Output from './Components/Output/Output';
import Input from "./Components/Input/Input";
import "./App.css";

const inputType = [
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
];


const checkAllCount = (inputs)=> {
  let sum = 0
  for(let item of inputs) {
    sum = item.value* item.count + sum;
  }
  return sum <= 8;
}



const layout= [];
const layoutGenerator = (inputs = inputType, i=0)=> {
  if(!checkAllCount(inputs) || i>2)  {
    return;
  }

  if (i === 2) {
    layout.push(inputs)
  }

  layoutGenerator([...inputs],i+1)

  let copiedInputs = [...inputs];

  let copied = {...copiedInputs[i]};
  copied.count++;
  copiedInputs[i] = copied;

  layoutGenerator(copiedInputs,i)
  
}




const layoutUpdated = new Map()
const generateStringLayout = () => {
  layout.map(item=> {
    let stringVal = item.reduce( (acc, cur)=> {
      return cur.count > 0 ? `${acc}/${cur.count}${cur.name}` : acc
    },"").substr(1);
    layoutUpdated.set(stringVal, item)
  })
}

class App extends Component {
  state = {
    inputs: inputType,
    inputStrings: ""
  };

  componentWillMount() {
    layoutGenerator()
    generateStringLayout()

  }

  handleCHange = e => {

    let val = e.target.value

    this.setState({
      inputs: layoutUpdated.get(val),
      inputStrings: val
    });

  };


  resetLayout = ()=> {
    return window.location.reload()
  }

  render() {
    return (
      <div className="App">
        <div className="input">Inputs: {this.state.inputStrings}</div>
        <Input onSelectChange={this.handleCHange} layout={layoutUpdated}></Input>
        <div className="output">
          {this.state.inputs.map((val, index) => {
            let vals = [];
            for (let i = 0; i < val.count; i++) {
              vals.push(
                <Output item={val} i={i+index}></Output>
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
