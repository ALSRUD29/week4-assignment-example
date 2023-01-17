import axios from "axios";
import React from "react";
//import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import Pagination from "./Pagination";

function CommentList() {
  //const comments = useSelector((store) => store.comment);

  const limit = 4;
  const [page, setPage] = useState(1);

  const [data, setData] = useState([]);
  const [length, setLength] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/comments?_page=${page}&_limit=${limit}&_order=desc&_sort=id`
      )
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      });
  }, [data, limit, page]);

  useEffect(() => {
    axios.get(`http://localhost:4000/comments`).then((res) => {
      // console.log(res.data);
      setLength(res.data.length);
    });
  }, []);

  return (
    <>
      {data.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}

      <Pagination length={length} limit={limit} page={page} setPage={setPage} />
    </>
  );
}

export default CommentList;
