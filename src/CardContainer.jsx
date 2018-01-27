import React from 'react';
import PropTypes from 'prop-types';
import { Loader, Dimmer, Segment, Card, Icon, Statistic } from 'semantic-ui-react';
import {distanceInWordsToNow} from 'date-fns';

function CardContainer({loading, data}) {
  return (
    <Segment className='card-container' loading={loading}>
      {
        data.map(item=>
          (
            <Card key={item['s.no']} fluid href={`https://www.kickstarter.com/${item.url}`} className='project-card'>
              <Card.Content className='project-card-content'>
                <Card.Header>{item.title}</Card.Header>
                <Card.Meta>{item.by}</Card.Meta>
                <Card.Description>{item.blurb}</Card.Description>
                <div className='extra-items'>
                  <div className='location item'>
                    <Icon name='location arrow' />
                    <span>{item.location} {item.country}</span>
                  </div>
                  <div className='ending item' title={item['end.time']}>
                    <Icon name='time' />
                    <span>{distanceInWordsToNow(new Date(item['end.time']), { addSuffix: true })}</span>
                  </div>
                  <div className="item">
                    <Icon name='money' />
                    <span>{item['amt.pledged']} {item['currency']}</span>
                  </div>
                </div>
              </Card.Content>
              <Statistic size='tiny' floated='right' className='percentage-funded'>
                <Statistic.Value>{item['percentage.funded']}%</Statistic.Value>
                <Statistic.Label>funded</Statistic.Label>
                <Statistic.Label>{isNaN(item['num.backers']) ? '0' : item['num.backers']} BACKERS</Statistic.Label>
              </Statistic>
            </Card>
          )
        )
      }
    </Segment>
  );
}

CardContainer.defaultProps = {
  loading: false
}

CardContainer.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array.isRequired
}


export default CardContainer;