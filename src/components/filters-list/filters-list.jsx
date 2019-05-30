import React from 'react';
import PropTypes from 'prop-types';


export const FiltersList = (props) => {
  const {properties, activeItem, changeFilter} = props;
  const filters = [`All Genre`, ...properties];

  return (
    <ul className="catalog__genres-list">
      {filters.map((filter) => {
        const isActive = filter === activeItem;

        return (
          <li
            key={filter}
            className={`catalog__genres-item ${isActive ? `catalog__genres-item--active` : ``}`}
          >
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();

                if (!isActive) {
                  changeFilter(filter);
                }
              }}
            >
              {filter}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

FiltersList.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeItem: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
