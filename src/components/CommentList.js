import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";

function CommentList() {
  const comments = useSelector((store) => store.comment);

  return comments.comments.map((comment, key) => (
    <Comment comment={comment} key={key} />
  ));
}

export default CommentList;
