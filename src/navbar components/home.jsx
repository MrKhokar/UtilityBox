import React, { Component } from "react";
import Cards from "../components/cards";
import Intro from "../components/intro";
const data = [
  {
    id: 1,
    Name: "Random Quotes",
    api: "quotes",
    Details:
      "Random Quotes is a random quotes machine which has some beautiful Quates as well as Theme",
  },
  {
    id: 2,
    Name: "Calculator",
    api: "calculator",
    Details:
      "Calculator is an application for perform basic mathematical Operations",
  },
  {
    id: 3,
    Name: "Drum Pads",
    api: "drum",
    Details:
      "Drum Pads is a virtual clone application for the Music by which we can enjoy the virtual Drum ",
  },
  {
    id: 4,
    Name: "MarkMan Previewer",
    api: "previewer",
    Details:
      "MarkMan Previewer is an  application on the basic concept of code editor ",
  },
  {
    id: 5,
    Name: "To-Do",
    api: "todo",
    Details:
      "To-Do is an application for writing text to prepare the list of works ",
  },
];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }
  componentDidMount() {
    const cards = data;
    this.setState({ cards });
    console.log(this.state.cards);
  }

  render() {
    console.log("render");
    return (
      <div className="container">
        <h2 className="mt-5">
          Wellcome to Utility Manager Tool
        </h2>

        <Intro />
        <Cards cards={this.state.cards} />
      </div>
    );
  }
}

export default Home;
