import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Input, Icon, Dropdown } from 'semantic-ui-react';
import Sort from './Filter/Sort';
import {LOCATIONS} from './constants';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(event,data) {
    this.setState({searchTerm: data.value});
    this.props.onChange('search', data.value);
  }
  render() {
    return (
      <Grid container className='filter-bar' verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Input icon placeholder='Search...' fluid transparent value={this.state.searchTerm} onChange={this.onSearch}>
              <input />
              <Icon name='search' />
            </Input>
          </Grid.Column>
          <Grid.Column width={2}>
            <Sort title='END' />
          </Grid.Column>
          <Grid.Column width={2}>
            <Sort title='PROGRESS' />
          </Grid.Column>
          <Grid.Column width={4}>
            <Dropdown placeholder='Location' fluid search selection options={LOCATIONS} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

FilterBar.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default FilterBar;