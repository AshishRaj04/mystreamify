import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchAPI";

const Feed = () => {
  let year = new Date().getFullYear();

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
      (data) => {
        setVideos(data.items);
      },
      (err) => {
        console.log(`Error occured : ${err}`);
      }
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box className="md:h-[92vh] h-auto  border-r-2 border-slate-800 px-0 md:px-2">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="mt-4 text-slate-400 text-xs" variant="body2">
          Copyright {year} @ashihs_Raj04
        </Typography>
      </Box>
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
        className=" flex flex-col items-center"
      >
        <h2 className=" text-slate-50 relative top-[-1.2rem] text-6xl" sx={{fontFamily:"poppins , sans"}}>
          {selectedCategory}
          <span className="text-[#096a2e] bg-[#c9efc7] p-1">videos</span>
        </h2>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
