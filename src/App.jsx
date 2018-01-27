/* eslint-disable */
import React, { Component } from "react";
import {API_URL} from './constants';
import Header from './Header';
import "whatwg-fetch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch(API_URL)
      .then((res)=>res.json())
      .then(res=>console.log(res));
  }
  render() {
    return (
      <div>
        <Header />
        
      </div>
    );
  }
}
export default App;
