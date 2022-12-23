import React from 'react';
import { ThemeContext } from './themes';

class ThemedButton extends React.Component {
  render() {
    const { background, fontColor } = this.context;
    const stylesForButton = {
      backgroundColor: background,
      color: fontColor
    };

    return (
      <button
        {...this.props}
        className="btn"
        style={stylesForButton}
      >
        {this.props.children}
      </button>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;