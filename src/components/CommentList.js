import axios from "axios";
import React from "react";
//import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Comment from "./Comment";

function CommentList() {
  //const comments = useSelector((store) => store.comment);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/comments`).then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  }, [data]);

  return data.map((comment) => <Comment comment={comment} key={comment.id} />);
}

export default CommentList;
