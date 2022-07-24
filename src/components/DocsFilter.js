import React from "react";
import { data } from "../utils/data";
import "./DocsFilter.css";

const DocsFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  const items = data;
  return (
    <div className="docs-filter">
      <div className="docs-filter__control">
        <label>Filter by name</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="Show all">Show all</option>
          {items.map((item) => {
            return (
              <option key={item.title} value={item.title}>
                {item.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default DocsFilter;
