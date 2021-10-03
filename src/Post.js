import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOptions from "./InputOptions";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SendIcon from "@mui/icons-material/Send";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ShareIcon from "@mui/icons-material/Share";

import "./Post.css";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {

  
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]} </Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__button">
        <InputOptions Icon={ThumbUpIcon} title="Like" color="gray"/>
        <InputOptions Icon={AddCommentIcon} title="Comment" color="gray" />
        <InputOptions Icon={ShareIcon} title="Share" color="gray" />
        <InputOptions Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
