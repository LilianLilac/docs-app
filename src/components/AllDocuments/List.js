import { useState } from "react";
import ListItem from "./ListItem";
import "./List.css";
import DocsFilter from "./DocsFilter";
import DocsSortBy from "./DocsSort";
import { getFilteredDocument, sortByName } from "../../utils/myFunctions";
import { data } from "../../utils/data";

const List = (props) => {
  const [filteredName, setFilteredName] = useState("");
  const filterChangeHandler = (selectedName) => {
    setFilteredName(selectedName);
  };

  const [sortedByName, setSortedByName] = useState(false);
  const sortByNameHandler = () => {
    setSortedByName(true);
    sortByName(data);
  };

  const filteredDocuments = getFilteredDocument(props.items, filteredName);

  let documentsContent = props.items.map((document) => (
    <ListItem
      key={document.title}
      title={document.title}
      date={document.date}
      files={document.files}
    />
  ));

  if (filteredDocuments.length > 0) {
    documentsContent = filteredDocuments.map((document) => (
      <ListItem
        key={document.title}
        title={document.title}
        date={document.date}
        files={document.files}
      />
    ));
  }

  return (
    <div>
      <div className={"container"}>
        <h1 className={"title"}>My documents</h1>
        <DocsFilter
          selected={filteredName}
          onChangeFilter={filterChangeHandler}
        />
        <DocsSortBy onChangeSortByName={sortByNameHandler} />
        {documentsContent}
      </div>
    </div>
  );
};

export default List;
