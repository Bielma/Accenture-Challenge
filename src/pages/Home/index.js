import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [filter, setFilter] = useState("all");

  const handleChangeFilter = (e) => {
    setFilter(e.target.name);
  };

  return (
    <div>
      <div className="header">
        <h5>
          <span>[</span> Making your Life Easier <span>]</span>{" "}
        </h5>
        <h1>Discovering the wold</h1>
      </div>
      <div className="filters row">
        <button
          name="all"
          className={filter === "all" && "selected"}
          onClick={handleChangeFilter}
        >
          All
        </button>
        <button
          name="travel"
          className={filter === "travel" && "selected"}
          onClick={handleChangeFilter}
        >
          Travel
        </button>
        <button
          name="lifestyle"
          className={filter === "lifestyle" && "selected"}
          onClick={handleChangeFilter}
        >
          Lifestyle
        </button>
        <button
          name="business"
          className={filter === "business" && "selected"}
          onClick={handleChangeFilter}
        >
          Business
        </button>
        <button
          name="food"
          className={filter === "food" && "selected"}
          onClick={handleChangeFilter}
        >
          Food
        </button>
        <button
          name="work"
          className={filter === "work" && "selected"}
          onClick={handleChangeFilter}
        >
          Work
        </button>{" "}
      </div>
    </div>
  );
};

export default Home;
