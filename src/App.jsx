/* eslint-disable */
import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import {API_URL} from './constants';
import Header from './Header';
import CardContainer from './CardContainer';
import FilterBar from './FilterBar';
import Footer from './Footer';
import applyFilters from './Filter/applyFilter';
import Storage from './Filter/LocalStorage';
import "whatwg-fetch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false
    };
    this.dataFromAPI = [];
    this.filters = {
      search: null,
      sort: null,
      filter: null
    };
    this.addToFilter = this.addToFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }
  componentDidMount() {
    this.setState({loading: true})
    fetch(API_URL)
      .then((res)=>res.json())
      .then(res=>{
        this.dataFromAPI = res;
        this.setState({data: res})
      })
      .catch(err=>this.setState({err: true}))
      .then(()=>this.setState({loading: false}));
  }
  addToFilter(key, value) {
    this.filters[key] = value;
    Storage.set(key, value);
    this.setState({
      data: applyFilters(this.dataFromAPI.slice(), this.filters)
    });
  }
  clearFilter() {
    this.filters = {
      search: null,
      sort: null,
      filter: null
    };
    Storage.clear();
    this.setState({
      data: this.dataFromAPI
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Container fluid>
          <FilterBar onChange={this.addToFilter} onClear={this.clearFilter} />
          <CardContainer loading={this.state.loading} data={this.state.data} />
        </Container>
        <Footer />
      </div>
    );
  }
}
export default App;
