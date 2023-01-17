import axios from "axios";
import React from "react";
//import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import Pagination from "./Pagination";

function CommentList() {
  //const comments = useSelector((store) => store.comment);

  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/comments`).then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  }, [data]);

  return (
    <>
      {data.slice(offset, offset + limit).map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}

      <Pagination
        total={data.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default CommentList;
