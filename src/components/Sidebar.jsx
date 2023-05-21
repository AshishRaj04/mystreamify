import { useState } from "react";
import { Stack, Button } from "@mui/material";

import { sidebarIcons } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        scrollbarWidth: 'none', 
            msOverflowStyle: 'none', 
            '&::-webkit-scrollbar': {
              display: 'none' 
            }
      }}
    >
      {sidebarIcons.map((item) => (
        <Button
          key={item.name}
          variant="contained"
          startIcon={item.icon}
          color="success"
          size="small"
          sx={{
            background: item.name === selectedCategory && "#588960",
            color: "#fff",
            my: { sx: "2px", md: "5px" },
            
          }}
          onClick={() => {
            setSelectedCategory(item.name);
          }}
        >
          {item.name}
        </Button>
      ))}
    </Stack>
  );
};

export default Sidebar;
