import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./index";

const Videos = ({ videos , direction}) => {

  if(!videos?.length) return 'Loading...';
 // console.log(videos);
 
  return (
    <Stack direction={ direction || "row"} flexWrap="wrap" justifyContent="center" gap={2}>
      {videos.map((content, index) => {
        return (
          <Box key={index}>
            {content.id.videoId && <VideoCard  video={content} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
