import axios from "axios";
//액션 타입 정의

//crud 필요
const CREATE_COMMENT = "comments/CREATE_COMMENT";
const DELETE_COMMENT = "comments/DELETE_COMMENT";
const UPDATE_COMMENT = "comments/UPDATE_COMMENT";

//액션 크리에이터 생성
const createComment = (profile_url, author, content, createdAt) => ({
  type: CREATE_COMMENT,
  payload: {
    profile_url,
    author,
    content,
    createdAt,
  },
});

const deleteComment = (id) => ({ type: DELETE_COMMENT, payload: { id } });

const updateComment = (id, newContent) => ({
  type: UPDATE_COMMENT,
  payload: {
    id,
    content: newContent,
  },
});

//초기상태 선언

// const initialState = [
//   {
//     id: 1,
//     profile_url: "https://picsum.photos/id/1/50/50",
//     author: "예시작성자",
//     content: "예시내용",
//     createdAt: "예시날짜",
//   },
// ];

const initialState = {
  comments: [
    {
      id: 1,
      profile_url: "https://picsum.photos/id/1/50/50",
      author: "abc_1",
      content: "UI 테스트는 어떻게 진행하나요",
      createdAt: "2022-03-01",
    },
  ],
};

// const initialState = getComments();

//리듀서 함수
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return axios.post(`http://localhost:4000/comments`, {
        ...action.payload,
      });

    case DELETE_COMMENT:
      // return {
      //   ...state,
      //   comments: state.comments.filter(
      //     (comment) => comment.id !== action.payload.id
      //   ),
      // };
      return axios.delete(
        `http://localhost:4000/comments/${action.payload.id}`
      );

    case UPDATE_COMMENT:
      // return {
      //   ...state,
      //   comments: state.comments.map((item) =>
      //     item.id === action.payload.id
      //       ? { ...item, content: action.payload.content }
      //       : item
      //   ),
      // };
      return axios.patch(
        `http://localhost:4000/comments/${action.payload.id}`,
        {
          ...action.payload,
        }
      );
    default:
      return state;
  }
};

export { createComment, deleteComment, updateComment };
export default commentReducer;
