import React from 'react';
import PropTypes from 'prop-types';
import {isEqual} from 'lodash';
import { Grid, Input, Icon, Dropdown, Button } from 'semantic-ui-react';
import Sort from './Filter/Sort';
import {LOCATIONS} from './constants';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      end: null,
      progress: null,
      location: ''
    }
    this.onSearch = this.onSearch.bind(this);
    this.setFilters = this.setFilters.bind(this);
    this.onSort = this.onSort.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }
  componentDidMount() {
    this.setFilters(this.props.filters);
  }
  componentWillReceiveProps(nextProps) {
    if(!isEqual(nextProps.filters, this.props.filters)) {
      this.setFilters(nextProps.filters);
    }
  }
  setFilters(filters) {
    filters = filters||{};
    const sortFilter = filters.sort || null;
    if (sortFilter) {
      const key = sortFilter.key;
      const otherOne = key === 'end' ? 'progress' : 'end';
      const value = sortFilter['value'];
      this.setState({
        searchTerm: filters.search || '',
        [key]: value,
        [otherOne]: null,
        location: filters.filter || ''
      });
    } else {
      this.setState({
        searchTerm: filters.search || '',
        end: null,
        progress: null,
        location: filters.filter || ''
      });
    }
  }
  onSearch(event,data) {
    this.setState({searchTerm: data.value});
    this.props.onChange('search', data.value);
  }
  onSort(key, value) {
    const otherOne = key==='end'?'progress':'end';
    this.setState({
      [key]: value,
      [otherOne]: null
    });
    this.props.onChange('sort', {key, value});
  }
  onFilter(event, data) {
    this.setState({
      location: data.value
    })
    this.props.onChange('filter', data.value);
  }
  onRemove() {
    this.setState({
      searchTerm: '',
      end: null,
      progress: null,
      location: ''
    });
    this.props.onClear();
  }
  render() {
    return (
      <Grid container className='filter-bar' verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={7}>
            <Input icon placeholder='Search...' fluid transparent value={this.state.searchTerm} onChange={this.onSearch} className='search-input'>
              <input />
              <Icon name='search' />
            </Input>
          </Grid.Column>
          <Grid.Column width={2}>
            <Sort title='end' mode={this.state.end} onChange={this.onSort} />
          </Grid.Column>
          <Grid.Column width={2}>
            <Sort title='progress' mode={this.state.progress} onChange={this.onSort} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Dropdown 
              placeholder='Location' 
              fluid 
              search 
              selection 
              options={LOCATIONS} 
              value={this.state.location}
              onChange={this.onFilter}
            />
          </Grid.Column>
          <Grid.Column width={1}>
            <Button icon labelPosition='right' color='teal' onClick={this.onRemove}>
              Clear
              <Icon name='close' />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

FilterBar.defaultProps = {
  filters: null
}

FilterBar.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
}

export default FilterBar;