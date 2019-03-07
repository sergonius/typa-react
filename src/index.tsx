import * as React from 'react';

interface Props {
  strings: Array<string>;
  speed: number;
  delay: number;
  loop: boolean;
  children: any;
}

interface State {
  string: string;
}

export default class Typa extends React.PureComponent<Props, State> {
  state = {
    string: '',
  };

  currentLetter = 0;
  currentWord = 0;
  reverse = false;

  componentDidMount(): void {
    this.typing();
  }

  typing(): void {
    const { strings, speed, delay, loop } = this.props;
    let ms = speed;

    if (!this.reverse) {
      if (strings[this.currentWord]) {
        if (this.currentLetter < strings[this.currentWord].length) {
          this.setState(state => ({
            ...state,
            string: strings[this.currentWord].substring(
              0,
              this.currentLetter + 1,
            ),
          }));
          this.currentLetter += 1;
        } else {
          this.reverse = true;
          ms = delay;
        }
      } else {
        this.currentWord = 0;
        ms = 0;
      }
    } else {
      if (this.currentLetter > 0) {
        if (loop) {
          this.setState(state => ({
            ...state,
            string: strings[this.currentWord].substring(
              0,
              this.currentLetter - 1,
            ),
          }));
          this.currentLetter -= 1;
          this.reverse = true;
        } else {
          if (strings.length - 1 !== this.currentWord) {
            this.setState(state => ({
              ...state,
              string: strings[this.currentWord].substring(
                0,
                this.currentLetter - 1,
              ),
            }));
            this.currentLetter -= 1;
            this.reverse = true;
          }
        }
      } else {
        this.currentWord += 1;
        this.reverse = false;
      }
    }
    setTimeout(() => {
      this.typing();
    }, ms);
  }

  render(): React.ReactNode {
    return this.props.children(this.state.string);
  }
}
