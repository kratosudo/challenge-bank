import React from "react";

const Search =({searchTerm, onSearch}) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={(e)=>onSearch (e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
