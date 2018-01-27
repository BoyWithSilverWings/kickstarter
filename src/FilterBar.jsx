import React from 'react';
import { Grid, Input, Icon, Dropdown } from 'semantic-ui-react';
import Sort from './Filter/Sort';
import {LOCATIONS} from './constants';

class FilterBar extends React.Component {
  render() {
    return (
      <Grid container className='filter-bar' verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Input icon placeholder='Search...' fluid transparent>
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

export default FilterBar;