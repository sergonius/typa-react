import React from 'react';

import Typa from '@sergonius/typa-react';
import './index.css';

export default class App extends React.PureComponent {
  render() {
    return (
      <Typa strings={['do', 'your', 'thing']} speed={85} delay={1200} loop>
        {string => (
          <React.Fragment>
            <span>{string}</span>
            <span className="cursor" />
          </React.Fragment>
        )}
      </Typa>
    );
  }
}
