import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Logo1 , Logo2 } from "../utils/images";
import SearchBar from "./SearchBar";
function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      className="sticky top-0  flex justify-between mb-5"
    >
      <Link to="/" className="flex items-center">
        <img src={Logo2} alt="logo" className="w-[150px]" />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
