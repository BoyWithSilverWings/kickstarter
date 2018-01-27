import React from 'react';
import { Grid, Input, Icon } from 'semantic-ui-react';

class FilterBar extends React.Component {
  render() {
    return (
      <Grid container className='filter-bar'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Input icon placeholder='Search...' fluid transparent>
              <input />
              <Icon name='search' />
            </Input>
          </Grid.Column>
          <Grid.Column>
            <p>Filter</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default FilterBar;