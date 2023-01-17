import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createComment } from "../store/comment/index";
// import axios from "axios";

function Form() {
  const [profileUrl, setProfileUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const dispatch = useDispatch();

  const onCreateComment = (e) => {
    e.preventDefault();
    const actionObj = createComment(profileUrl, author, content, createdAt);
    dispatch(actionObj);


    setProfileUrl("");
    setAuthor("");
    setContent("");
    setCreatedAt("");
  };

  return (
    <FormStyle>
      <form>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          onChange={(e) => {
            setProfileUrl(e.target.value);
          }}
          value={profileUrl}
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          value={author}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          required
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          required
          onChange={(e) => {
            setCreatedAt(e.target.value);
          }}
          value={createdAt}
        />
        <br />
        <button onClick={onCreateComment}>등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type="text"] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
