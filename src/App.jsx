/* eslint-disable */
import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import {API_URL} from './constants';
import PageHeader from './Header';
import CardContainer from './CardContainer';
import FilterBar from './FilterBar';
import Footer from './Footer';
import applyFilters from './Filter/applyFilter';
import Storage from './Filter/LocalStorage';
import ModalContainer from './Filter/ModalContainer';
import "whatwg-fetch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filters: {},
      loading: false,
      openModal: false
    };
    this.dataFromAPI = [];
    this.filters = {
      search: null,
      sort: null,
      filter: null
    };
    this.addToFilter = this.addToFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.restoreSession = this.restoreSession.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillMount() {
    const filters = Storage.getAll();
    this.setState({
      filters,
      openModal: !!filters
    });
  }
  componentDidMount() {
    this.setState({
      loading: true
    });
    fetch(API_URL)
      .then((res)=>res.json())
      .then(res=>{
        this.dataFromAPI = res;
        this.setState({data: res})
      })
      .catch(err=>this.setState({err: true}))
      .then(()=>this.setState({loading: false}));
  }
  restoreSession(event) {
    event.preventDefault();
    this.setState({
      openModal: false
    });
  }
  closeModal(event) {
    event.preventDefault();
    this.setState({
      filters: {},
      openModal: false
    });
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
        <PageHeader />
        <Container fluid>
          <FilterBar filters={this.state.filters} onChange={this.addToFilter} onClear={this.clearFilter} />
          <CardContainer loading={this.state.loading} data={this.state.data} />
        </Container>
        <ModalContainer 
          open={this.state.openModal} 
          restoreSession={this.restoreSession} 
          closeModal={this.closeModal}
        />
        <Footer />
      </div>
    );
  }
}
export default App;
