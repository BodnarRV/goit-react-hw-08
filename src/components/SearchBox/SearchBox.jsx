import React from "react";
import "./SearchBox.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <label className="search-label">
        Find contact by name
        <input
          className="search-input"
          type="text"
          value={value}
          onChange={handleSearch}
        ></input>
      </label>
    </>
  );
}
