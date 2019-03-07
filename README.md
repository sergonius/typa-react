# typa-react

> Make words type themselves

[![NPM](https://img.shields.io/npm/v/@sergonius/typa-react.svg)](https://www.npmjs.com/package/@sergonius/typa-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @sergonius/typa-react
# or
yarn add @sergonius/typa-react
```

## Usage

It's a render prop, so you can use it however you want to.

```tsx
import React from 'react';
import Typa from '@sergonius/typa-react';

class Example extends React.PureComponent {
  render() {
    return (
      <Typa
        strings={['do', 'your', 'thing']} // The strings to alternate between
        speed={85} // The wait time after each letter has been typed
        delay={1200} // How long to pause for after a string is complete
        loop={true} // Whether to start over after the last word in the string array
      >
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
```

## License

MIT © [sergonius](https://github.com/sergonius)
