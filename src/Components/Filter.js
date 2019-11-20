import React from "react";

const Filter = props => {
  const { filter, setFilter } = props;
  return (
    <select
      className="custom-select"
      value={filter}
      onChange={event => setFilter(event.target.value)}
    >
      <option value="all">All</option>
      <option value="done">Done</option>
      <option value="pending">Pending</option>
    </select>
  );
};
export default Filter;
