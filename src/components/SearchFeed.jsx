import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchAPI";

const SearchFeed = () => {
  
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

 //Fetching data
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then(
      (data) => {
        setVideos(data.items);
      },
      (err) => {
        console.log(`Error occured : ${err}`);
      }
    );
  }, []);



  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Typography variant="h4" className=" text-slate-50 mb-2 font-bold">
        Search Results for :
        <span className="text-lime-400 font-light mb-2 ">{searchTerm}</span>videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
