import React from 'react';
import { Icon } from 'semantic-ui-react';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://stackoverflow.com/users/4374566/boy-with-silver-wings" target="_blank" rel="noopener noreferrer">
        <Icon name='stack overflow' inverted bordered circular link size='large' />
      </a>
      <a href="https://medium.com/@agney/" target="_blank" rel="noopener noreferrer">
        <Icon name='medium' inverted bordered circular link size='large' />
      </a>
      <a href="https://codepen.io/BoyWithSilverWings" target="_blank" rel="noopener noreferrer">
        <Icon name='codepen' inverted bordered circular link size='large' />
      </a>
      <a href="https://github.com/BoyWithSilverWings" target="_blank" rel="noopener noreferrer">
        <Icon name='github' inverted bordered circular link size='large' />
      </a>
      <a href="https://www.linkedin.com/in/agney-menon/" target="_blank" rel="noopener noreferrer">
        <Icon name='linkedin' inverted bordered circular link size='large' />
      </a>
    </footer>
  );
}

export default Footer;

