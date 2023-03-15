import React, { useState } from "react";
import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";

import "./AddCategory.css";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(categories => [inputValue, ...categories]);
      setInputValue("");
    }
  };

  return (
    <form className="add-category-style" onSubmit={ handleSubmit }>
      <input type="text" value={ inputValue } onChange={ handleInputChange } />
      <button type="submit">
        <BsArrowRight />
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};

export default AddCategory;
