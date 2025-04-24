import { TextField } from "@mui/material";
import React from "react";

interface SearchButtonProps {
  onChange: (text: string) => void;
}

const SearchButton = ({ onChange }: SearchButtonProps) => {
  console.log("Render Search");
  
  return (
    <TextField
      id="search"
      variant="outlined"
      placeholder="Search product name.."
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default React.memo(SearchButton);
