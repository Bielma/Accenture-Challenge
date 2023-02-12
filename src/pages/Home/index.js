import { Box, Grid, Tab, Tabs, Item } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../../services/api/posts";
import "./Home.css";

const Home = () => {
  const [filter, setFilter] = useState("all");
  const [posts, setPosts] = useState([]);
  const handleChangeFilter = (e) => {
    setFilter(e.target.name);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getPosts();

    if (data.length) {
      setPosts(data);
    }
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
          className={filter === "all" ? "selected" : ""}
          onClick={handleChangeFilter}
        >
          All
        </button>
        <button
          name="travel"
          className={filter === "travel" ? "selected" : ""}
          onClick={handleChangeFilter}
        >
          Travel
        </button>
        <button
          name="lifestyle"
          className={filter === "lifestyle" ? "selected" : ""}
          onClick={handleChangeFilter}
        >
          Lifestyle
        </button>
        <button
          name="business"
          className={filter === "business" ? "selected" : ""}
          onClick={handleChangeFilter}
        >
          Business
        </button>
        <button
          name="food"
          className={filter === "food" ? "selected" : ""}
          onClick={handleChangeFilter}
        >
          Food
        </button>
        <button
          name="work"
          className={filter === "work" ? "selected" : ""}
          onClick={handleChangeFilter}
        >
          Work
        </button>{" "}
      </div>
      <section className="postsGrid mt-4">
        <Grid container spacing={0}>
          {posts?.map((post) => (
            <Grid item xs={12} sm={12} md={6} key={post.id}>
              <div className="post">
                <Link to={`post/${post.id}`}>
                  <img
                    className="post__img"
                    src={post.img}
                    loading="lazy"
                    alt="post cover"
                  />
                  <div className="post--info">
                    <div className="post__title">{post.title}</div>
                    <div className="post__comments">{`${post.comments.length} Comments`}</div>
                    <div className="post__description">
                      {post?.description || ""}
                    </div>
                    <div className="post__tag">{post.tag}</div>
                  </div>
                </Link>
              </div>
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
  );
};

export default Home;
