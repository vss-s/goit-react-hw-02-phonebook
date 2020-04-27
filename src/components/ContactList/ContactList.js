import React from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";

const ContactList = ({ contacts, handleDelete }) =>
  contacts.length > 0 ? (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onClick={handleDelete}
        />
      ))}
    </ul>
  ) : (
    <h3>you don`t have any contacts</h3>
  );

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
