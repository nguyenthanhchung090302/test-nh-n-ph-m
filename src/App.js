import React, { Component } from "react";
import CharactersContainer from "./components/CharactersContainer";
import "./App.css";

class App extends Component {
  state = {
    profilefigure: [],
    name: "",
    nickname: "",
    birthday: "",
    portrayed:"",
  };
  componentDidMount = (e) => {
    fetch("https://breakingbadapi.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          profilefigure: data,
        });
      });
  };
  render() {
    return (
      <div>
        <CharactersContainer
          profilefigure={this.state.profilefigure}
          name={this.state.name}
          nickName={this.state.nickname}
          birthday={this.state.birthday}
          portrayed={this.state.portrayed}
        />
      </div>
    );
  }
}

export default App;
