import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handelChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      className=" px-2 shadow-none mx-5"
    >
      <input
        className="outline-none"
        placeholder="Search ..."
        value={searchTerm}
        onChange={handelChange}
      />
      <IconButton type="submit" color="success">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
