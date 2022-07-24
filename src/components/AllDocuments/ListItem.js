import React from "react";
import "./ListItem.css";
import FileDate from "./FileDate";

const ListItem = (props) => {
  return (
    <div className="document-item">
      <div className="document-item__description">
        <h2>{props.title}</h2>
        <div className="sub-files">
          {props.files &&
            props.files.map((file) => {
              return (
                <div className="sub-file" key={file.title}>
                  <div className="sub-file__description">{file.title}</div>
                  <div>{file.date && <FileDate date={file.date} />}</div>
                </div>
              );
            })}
        </div>
      </div>
      {props.date && <FileDate date={props.date} />}
    </div>
  );
};

export default ListItem;
