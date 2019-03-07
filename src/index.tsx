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
  currentWord: number;
  currentLetter: number;
  reverse: boolean;
}

export default class Typa extends React.PureComponent<
  Props,
  State
> {
  state = {
    string: '',
    currentWord: 0,
    currentLetter: 0,
    reverse: false,
  };

  componentDidMount(): void {
    const { speed, delay, loop } = this.props;
    const { currentLetter, currentWord } = this.state;

    this.typing(currentLetter, currentWord, speed, delay, loop, false);
  }

  typing(
    currentLetter: number,
    currentWord: number,
    speed: number,
    delay: number,
    loop: boolean,
    reverse?: boolean,
  ): void {
    const { strings } = this.props;
    if (!reverse) {
      if (strings[currentWord]) {
        if (currentLetter < strings[currentWord].length) {
          this.setState(state => ({
            ...state,
            string: strings[currentWord].substring(0, currentLetter + 1),
          }));
          currentLetter += 1;

          setTimeout(() => {
            this.typing(currentLetter, currentWord, speed, delay, loop);
          }, speed);
        } else {
          setTimeout(() => {
            this.typing(currentLetter, currentWord, speed, delay, loop, true);
          }, delay);
        }
      } else {
        currentWord = 0;

        this.typing(currentLetter, currentWord, speed, delay, loop);
      }
    } else {
      if (currentLetter > 0) {
        if (loop) {
          this.setState(state => ({
            ...state,
            string: strings[currentWord].substring(0, currentLetter - 1),
          }));
          currentLetter -= 1;

          setTimeout(() => {
            this.typing(
              currentLetter,
              currentWord,
              speed,
              delay,
              loop,
              reverse,
            );
          }, speed);
        } else {
          if (strings.length - 1 !== currentWord) {
            this.setState(state => ({
              ...state,
              string: strings[currentWord].substring(0, currentLetter - 1),
            }));
            currentLetter -= 1;

            setTimeout(() => {
              this.typing(
                currentLetter,
                currentWord,
                speed,
                delay,
                loop,
                reverse,
              );
            }, speed);
          }
        }
      } else {
        currentWord += 1;

        setTimeout(() => {
          this.typing(currentLetter, currentWord, speed, delay, loop);
        }, speed);
      }
    }
  }

  render(): React.ReactNode {
    return this.props.children(this.state.string);
  }
}
