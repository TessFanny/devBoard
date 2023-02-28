import React, { Fragment } from "react";
import PropTypes from "prop-types";
import './CategorySelector.css'; 

const CategorySelector = ({ categories = [], onSelect = null, }) => {
    return (
        <div className="CategorySelector-root">
            {categories.map((category) => {
                return (
                    <Fragment key={category}>
                        <label htmlFor="category">{category}</label>
                        <input
                            id={category}
                            name="category"
                            onChange={() => onSelect(category)}
                            type="radio"
                            value={category}
                        />
                    </Fragment>
                );
            })}
        </div>
    );
};

CategorySelector.propTypes = propTypes;
export default CategorySelector;