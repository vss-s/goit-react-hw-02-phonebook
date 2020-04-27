import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, onChangeFilter, contacts, allContacts }) => (
  <>
    {contacts.length >= 2 || allContacts.length >= 2 ? (
      <input
        type="text"
        placeholder="find by name"
        value={value}
        onChange={onChangeFilter}
      />
    ) : null}
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onChangeFilter: PropTypes.func.isRequired,
};
export default Filter;
