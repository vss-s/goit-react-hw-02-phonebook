import React, { Component } from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";
import css from "./Input.module.css";

class Input extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onClickButton: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  nameValidation = (addedName, contacts) => {
    const findedName = contacts.find(({ name }) => name === addedName);

    if (findedName) {
      alert(`${addedName} is already in contacts.`);
    }

    return findedName;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { number, name } = this.state;

    if (this.nameValidation(name, this.props.contacts)) return;
    this.props.onClickButton(name, number);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} action="submit" onSubmit={this.onSubmit}>
        <InputField
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <InputField
          label="Number"
          type="number"
          name="number"
          value={number}
          onChange={this.handleChange}
        />

        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Input;
