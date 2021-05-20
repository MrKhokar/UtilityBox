import React, { Component } from "react";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = { quotes: [], shifts: [], click: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    const { data } = await axios.get(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const quotes = [...data.quotes];
    this.setState({ quotes });
    const words = this.state.quotes;
    const click = this.state.click;
    const shifts = words[click];
    this.setState({ shifts });
  }
  handleClick() {
    let click = this.state.click;
    const ill = this.state.quotes;

    click += 1;
    this.setState({ click });
    this.setState({ shifts: ill[click] });
    console.log(this.state.click);
  }

  render() {
    const { shifts } = this.state;
    console.log(shifts);
    return (
      <div className=" m-5 justify-content-center">
        <h1>Quotes</h1>
        <div id="q.box" className="bg-transparent p-3 ">
          <div className="p-3">
            <h3>
              <i
                className="fa fa-quote-left fa-2x "
                aria-hidden="true"
              />
              {"      "}
              {shifts.quote}
              {"   "}
              <i
                className="fa fa-quote-right "
                aria-hidden="true"
              />
            </h3>
          </div>
          <br />
          <div className="text-end ">
            <h4 className="text-end">
              <i class="fa fa-pencil" aria-hidden="true" />
              {" " + " "}
              {shifts.author}
            </h4>
          </div>
          <br />
          <div className="row ">
            <div className="col">
              <i
                type="button"
                to="http://www.google.com"
                className="fa fa-tumblr btn  btn-outline-warning"
                aria-hidden="true"
              />
            </div>
            <div className="col">
              <i
                type="button"
                className="fa fa-twitter btn  btn-outline-warning"
                aria-hidden="true"
              />
            </div>
            <div className="col">
              <i
                type="button"
                className="fa fa-facebook btn  btn-outline-warning"
                aria-hidden="true"
              />
            </div>

            <div className="col">
              <i
                type="button"
                className="fa fa-arrow-right btn  btn-outline-warning"
                aria-hidden="true"
                onClick={this.handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quotes;
