import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import axios from "axios";

const Categories = ({ selectedCategory, setSelectedCategory }) => {

  const [cat, setCat] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/categories');
        setCat(response.data.data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
  }, []);

  console.log(cat);
  if (!Array.isArray(cat) || cat.length === 0) {
    return null; // Return null or a loading state if categories are not available yet
  }

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        bgcolor: "white"
      }}
    >
      {cat.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.attributes.eventName)}
          style={{
            background: category.attributes.eventName === selectedCategory && "#FC1503",
            color: "rgba(0,0,0,0.6)",
          }}
          key={category.attributes.eventName}
        >
          <span style={{ opacity: category.attributes.eventName === selectedCategory ? "1" : "0.8" }}>
            {category.attributes.eventName}
          </span>
        </button>
      ))}
    </Stack>
  );
}



export default Categories;
