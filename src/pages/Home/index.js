import { Box, Grid, Tab, Tabs, Item } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const json = `{
  "posts":[
     {
        "id":1,
        "title":"Beach",
        "img":"https://images.unsplash.com/photo-1674560435460-c266654fdc56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjIzMjE2Mw&ixlib=rb-4.0.3&q=80&w=1080",
        "tag":"travel",
        "description": "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim.", 
        "comments":"[]"
     },
     {
        "id":2,
        "title":"lorem insum",
        "description": "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim.", 
        "img":"https://images.unsplash.com/photo-1674560435460-c266654fdc56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjIzMjE2Mw&ixlib=rb-4.0.3&q=80&w=1080",
        "tag":"lifestyle",
        "comments":[
           
        ]
     },
     {
        "id":3,
        "title":"Post 3",
        "description": "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim.", 
        "img":"https://images.unsplash.com/photo-1674560435460-c266654fdc56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjIzMjE2Mw&ixlib=rb-4.0.3&q=80&w=1080",
        "tag":"work",
        "comments":[
           
        ]
     },
     {
      "id":4,
      "title":"Post 4",
      "description": "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim.", 
      "img":"https://images.unsplash.com/photo-1674560435460-c266654fdc56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjIzMjE2Mw&ixlib=rb-4.0.3&q=80&w=1080",
      "tag":"work",
      "comments":[
         
      ]
   }
  ]
}`;

const Home = () => {
  const [filter, setFilter] = useState("all");
  const [posts, setPosts] = useState(JSON.parse(json).posts);
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
      <section className="postsGrid">
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
                    <div className="post__comments">{`${post.comments.lenght} Comments`}</div>
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
