import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.mode
    }
    this.onClick = this.onClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.mode!==this.props.mode) {
      this.setState({
        mode: nextProps.mode
      });
    }
  }
  onClick(event) {
    event.preventDefault();
    this.setState((prevState, props)=>{
      const mode = prevState.mode;
      let newMode = mode==='asc'?'des':'asc';
      return {
        mode: newMode
      }
    }, () => this.props.onChange(this.props.title, this.state.mode));
  }
  render() {
    const {title} = this.props;
    return (
      <div className='sorter' onClick={this.onClick}>
        <span>{title}&nbsp;&nbsp;</span>
        {this.state.mode===null&&<Icon name='sort' color='grey' />}
        {this.state.mode==='asc'&&<Icon name='sort ascending' />}
        {this.state.mode === 'des'&&<Icon name='sort descending' />}
      </div>
    );
  }
}

Sort.defaultProps = {
  mode: null
}

Sort.propTypes = {
  mode: PropTypes.oneOf([null, 'asc', 'des']),
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Sort;

