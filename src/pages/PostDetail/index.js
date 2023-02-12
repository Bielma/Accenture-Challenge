import { Button, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../services/api/posts";
import "./PostDetail.css";
const PostDetail = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [post, setPost] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const goBack = () => {
    navigate(-1);
  };
  const getData = async () => {
    const res = await getPost(id);
    console.log(res);
    if (res) {
      setPost(res);
    }
  };
  return (
    <div className="container">
      {post ? (
        <div className="post">
          <img
            className="post__img"
            src={post.img}
            loading="lazy"
            alt="post cover"
          />
          <div className="post--info">
            <div className="post__title">{post.title}</div>
            <div className="post__comments">{`${post.comments?.length} Comments`}</div>
            <div className="post__description">{post?.description || ""}</div>
            <div className="post__tag">{post.tag}</div>
          </div>
        </div>
      ) : (
        <Skeleton className="post" variant="rectangular" />
      )}
      <div>
        <Button onClick={goBack} variant="text">
          &larr; Go Back
        </Button>
      </div>
    </div>
  );
};

export default PostDetail;
