/* eslint-disable */
import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import {API_URL} from './constants';
import Header from './Header';
import CardContainer from './CardContainer';
import FilterBar from './FilterBar';
import "whatwg-fetch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false
    };
  }
  componentDidMount() {
    this.setState({loading: true})
    fetch(API_URL)
      .then((res)=>res.json())
      .then(res=>this.setState({data: res}))
      .catch(err=>this.setState({err: true}))
      .then(()=>this.setState({loading: false}));
  }
  render() {
    return (
      <div>
        <Header />
        <Container>
          <FilterBar />
          <CardContainer loading={this.state.loading} data={this.state.data} />
        </Container>
      </div>
    );
  }
}
export default App;
