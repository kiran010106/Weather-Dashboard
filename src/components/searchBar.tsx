import React from "react";
import '../style.css'
import search from '../assets/search 1.png'
const SearchBar: React.FC = () => {
  return (
      <nav>
        <div className="search-component">
          <form className="d-flex justify-content-center">
          <img className='search-icon' src={search} alt="search-icon" />
          <div className="search-input">
            <input
              className="form-control me-2 "
              type="search"
            //   placeholder="Search for your preffered city..."
              aria-label="Search"
            />
          </div>
          </form>
        </div>
      </nav>
    // </div>
  );
};

export default SearchBar;
