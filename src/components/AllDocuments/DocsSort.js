import React from "react";
import "./DocsSort.css";

const DocsSortBy = (props) => {
  const nameSortHandler = () => {
    props.onChangeSortByName();
  };
  const dateSortHandler = (event) => {
    props.onChangeSortByDate(event.target.value);
  };

  return (
    <div className="docs-filter">
      <div className="docs-filter__control">
        <div>Sort by:</div>
        <div>
          <button onClick={nameSortHandler}>Name</button>
          <button onClick={dateSortHandler}>Date</button>
          <button>Size</button>
        </div>
      </div>
    </div>
  );
};

export default DocsSortBy;
