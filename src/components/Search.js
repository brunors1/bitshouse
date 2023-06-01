import React from 'react';

const Search = () => {
  return (
    <div id="Search">
      <form className="input-group" role="search">
        <input type="search" className="form-control" placeholder="Procurar" />
        <button className="btn btn-success" type="submit" id="search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
