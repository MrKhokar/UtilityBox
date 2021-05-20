import React from "react";
import "./calculator.css";
var numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

var operations = [
  {
    name: "multiply",
    symbol: "*",
  },
  {
    name: "subtract",
    symbol: "-",
  },
  {
    name: "add",
    symbol: "+",
  },
  {
    name: "divide",
    symbol: "/",
  },
  {
    name: "decimal",
    symbol: ".",
  },
];

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: "",
      result: 0,
      solvecode: 0,
    };
  }

  numberEntry = (number) => {
    return () => {
      this.setState({
        entry:
          this.state.solvecode === 1
            ? "" + number
            : this.state.entry + number,
        // eslint-disable-next-line
        result:
          parseFloat(this.state.result) !==
            this.state.result ||
          this.state.result === "0" ||
          this.state.solvecode === 1
            ? "" + number
            : this.state.result + "" + number,
        solvecode: 0,
      });
    };
  };

  operation = (op) => {
    return () => {
      var lastOp = 0;
      var lastDot = 0;
      for (var i = 0; i < this.state.entry.length; i++) {
        if (!this.state.entry[i].match(/\d/)) {
          lastOp = i;
        }
        if (this.state.entry[i] === ".") {
          lastDot = i;
        }
      }

      if (
        lastOp !== 0 &&
        lastDot === lastOp &&
        op === "."
      ) {
        return;
      }

      if (
        this.state.entry.length !== 0 &&
        this.state.solvecode !== 1
      ) {
        if (this.state.entry.slice(-1).match(/\d/)) {
          this.setState({
            entry:
              this.state.solvecode === 1
                ? op
                : this.state.entry + op,
            // eslint-disable-next-line
            result:
              op !== "." || this.state.solvecode === 1
                ? op
                : this.state.result + op,
            solvecode: 0,
          });
        } else {
          if (this.state.entry.slice(-1) !== "-") {
            if (op !== "-") {
              this.setState({
                entry: this.state.entry.slice(0, -1) + op,
                result:
                  op !== "." ? op : this.state.result + op,
              });
            } else {
              this.setState({
                entry: this.state.entry + op,
                // eslint-disable-next-line
                result:
                  op !== "." ? op : this.state.result + op,
              });
            }
          } else {
            var lastNum = 0;
            for (
              let i = 0;
              i < this.state.entry.length;
              i++
            ) {
              if (this.state.entry[i].match(/\d/)) {
                lastNum = i;
              }
            }
            this.setState({
              entry:
                this.state.entry.slice(0, lastNum + 1) + op,
              result:
                op !== "." ? op : this.state.result + op,
            });
          }
        }
      } else if (
        this.state.solvecode === 1 &&
        op !== "-" &&
        op !== "."
      ) {
        this.setState({
          entry: this.state.result + op,
          result: op,
          solvecode: 0,
        });
      }
    };
  };

  solve = () => {
    return () => {
      this.setState({
        // eslint-disable-next-line
        entry:
          this.state.entry + "=" + eval(this.state.entry),
        // eslint-disable-next-line
        //eslint no-eval: "error"
        //eslint-env node
        result: eval(this.state.entry),
        solvecode: 1,
      });
    };
  };

  clear = () => {
    return () => {
      this.setState({
        entry: "",
        result: "0",
      });
    };
  };

  render() {
    return (
      <div id="content">
        <h3>JavaScript Calculator</h3>
        <div id="view">
          <div id="entry">{this.state.entry}</div>
          <div id="display">{this.state.result}</div>
        </div>
        <div id="numbersGrid">
          {operations.map((i) => (
            <button
              className="operations"
              id={i.name}
              onClick={this.operation(i.symbol)}>
              {i.symbol}
            </button>
          ))}
          {numbers.map((i) => (
            <button
              className="numbers"
              id={i}
              onClick={this.numberEntry(
                numbers.indexOf(i)
              )}>
              {numbers.indexOf(i)}
            </button>
          ))}
          <button id="clear" onClick={this.clear()}>
            AC
          </button>
          <button id="equals" onClick={this.solve()}>
            =
          </button>
        </div>
      </div>
    );
  }
}
export default Calculator;
