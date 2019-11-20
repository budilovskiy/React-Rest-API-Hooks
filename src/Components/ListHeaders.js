import React from "react";

const ListHeaders = props => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">Created At</div>
        <div className="col">Description</div>
        <div className="col-2 text-right">Updated At</div>
        <div className="col-2" />
      </div>
    </li>
  );
};
export default ListHeaders;
