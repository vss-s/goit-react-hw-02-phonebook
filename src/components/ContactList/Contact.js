import React from "react";
import PropTypes from "prop-types";

const Contact = ({ id, name, number, onClick }) => (
  <li style={{ marginBottom: "5px" }}>
    <span>
      {name}: {number}
    </span>
    <button type="button" id={id} onClick={onClick}>
      delete
    </button>
  </li>
);

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
