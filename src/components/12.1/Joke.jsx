import React, { Component } from "react";
import axios from "axios";
import Button from "./Button";
import Search from "./Search";

export default class Joke extends Component {
  state = { jokes: "" };

  onButtonSubmit = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(response.data.value);
    this.setState({
      jokes: response.data.value,
    });
    console.log(this.state.jokes);
  };

  render() {
    return (
      <>
        <Button onClickFunction={this.onButtonSubmit} text="Click me" />
        <div>{this.state.jokes}</div>
        <Search />
      </>
    );
  }
}
