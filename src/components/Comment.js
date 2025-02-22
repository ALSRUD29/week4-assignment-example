import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteComment, updateComment } from "../store/comment";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const [updateMode, setUpdateMode] = useState(false);
  const [newContentInput, setNewContentInput] = useState(comment.content);
  return (
    <StyledComment>
      <img src={comment.profile_url} alt="" />
      {comment.author}
      <CreatedAt>{comment.createdAt}</CreatedAt>
      <Content>
        {updateMode ? (
          <input
            defaultValue={newContentInput}
            onChange={(e) => setNewContentInput(e.target.value)}
          />
        ) : (
          comment.content
        )}
      </Content>

      <Button>
        {updateMode ? (
          <span
            onClick={() => {
              //업데이트 진행
              dispatch(updateComment(comment.id, newContentInput));
              setUpdateMode(false);
            }}
          >
            확인
          </span>
        ) : (
          <span
            onClick={() => {
              setUpdateMode(true);
            }}
          >
            수정
          </span>
        )}
        <span
          onClick={() => {
            dispatch(deleteComment(comment.id));
          }}
        >
          삭제
        </span>
      </Button>

      <hr />
    </StyledComment>
  );
};

export default Comment;

const StyledComment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > span {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
