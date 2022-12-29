import React from "react";
import propsTypes from "prop-types";

const Options = ({ title, options, moveOption }) => {
  return (
    <div className="options">
      <div className="options__title">{title}</div>
      <ul className="options__list">
        {options.map(({ id, name }) => (
          <li key={id}><button className="options__list-item" onClick={() => moveOption(id)}>{name}</button></li>
        ))}
      </ul>
    </div>
  );
}

Options.propTypes = {
  title: propsTypes.string.isRequired,
  options: propsTypes.arrayOf(
    propsTypes.shape({
      id: propsTypes.string,
      name: propsTypes.string
    }).isRequired
  ),
  moveOption: propsTypes.func.isRequired
}

export default Options;