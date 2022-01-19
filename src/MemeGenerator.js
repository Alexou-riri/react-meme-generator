import React, { Component } from 'react';
import './MemeGenerator.css';

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomMeme: '',
      allMeme: [],
    }; // initialize state to save the data text and meme
  }

  // making the API and fetch the data
  componentDidMount() {
    fetch('https://memegen.link/') // call the url
      .then((response) => response.json()) //turn into a js object
      .then((response) => {
        const { memes } = response.data; // pull meme array
        this.setState({ allMeme: memes });
        // console.log(memes[0]);
      });
  }

  render() {
    return (
      <div className="fun">
        <h1> Meme Generator</h1>
        <div>
          <form className="form">
            <button>Let's go</button>
          </form>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
