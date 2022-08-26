import { React, useState } from "react";
import './Search.scss'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <form className="form" onSubmit={handleSubmit}>
     
        <input
          type="text"
          placeholder="Search "
          value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='form--search'
        />
     
    </form>
  );
};

export default Search;
