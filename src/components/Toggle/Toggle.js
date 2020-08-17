import React from "react";
import PropTypes from "prop-types";
import styles from "./Toggle.css";

const Toggle = ({ toggle, value }) => (
  <section className={styles.Toggle}>
    <input
      className="toggle-input"
      id="toggle"
      type="checkbox"
      checked={value}
      onChange={toggle}
    />
    <label className="toggle-label" htmlFor="toggle"></label>
  </section>
);

Toggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};
export default Toggle;
