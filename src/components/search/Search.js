import { React, useState } from "react";
import './Search.scss'
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    let navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(' ')
        navigate(`/searched/${searchTerm}`)
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
