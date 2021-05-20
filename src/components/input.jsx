import React, { Component } from "react";
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messagebox: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const input = e.target.value;
    this.setState({ input });
    console.log(this.state.input);
  }
  handleSubmit() {
    const input = this.state.input;

    const messagebox = [...this.state.messagebox, input];
    this.setState({ messagebox, input: "" });
    console.log(this.state.messagebox);
  }
  render() {
    const items = this.state.messagebox;
    return (
      <div>
        <div>
          <input
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Write here to add"
          />
          <button
            className="btn-success m-2"
            onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
        <div>
          <ul>
            {items.map((item) => (
              <li className="well" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Input;
