import shortid from "shortid";
import React, { Component } from "react";
import ContactList from "./ContactList/ContactList";
import Input from "./Input/Input";
import Filter from "./Filter/Filter";
import localStorage from "../utils/localStorage";

const filterTasks = (contacts, filter) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default class App extends Component {
  componentDidMount() {
    const contactsFromLS = localStorage.load("contacts");

    if (contactsFromLS) {
      this.setState({
        contacts: contactsFromLS,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.save("contacts", this.state.contacts);
    }
  }

  state = {
    contacts: [],
    filter: "",
  };

  changeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const contactToAdd = { name, number, id: shortid.generate() };

    this.setState((state) => ({
      contacts: [...contacts, contactToAdd],
    }));
  };

  deleteContact = (e) => {
    const { contacts } = this.state;
    const targetId = e.target.id;
    const contactsAfterDel = contacts.filter(({ id }) => id !== targetId);
    this.setState({ contacts: contactsAfterDel });
  };
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterTasks(contacts, filter);
    return (
      <div style={{ paddingLeft: "50px" }}>
        <h1>Phonebook</h1>
        <Input onClickButton={this.addContact} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChangeFilter={this.changeFilter}
          allContacts={contacts}
          contacts={filteredContacts}
        />
        <ContactList
          contacts={filteredContacts}
          handleDelete={this.deleteContact}
        />
      </div>
    );
  }
}
