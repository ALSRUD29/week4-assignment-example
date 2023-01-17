//액션 타입 정의

//crud 필요
const CREATE_COMMENT = "comments/CREATE_COMMENT";

//액션 크리에이터 생성
let nextId = 1;
const createComment = (author, content, createdAt) => ({
  type: CREATE_COMMENT,
  comment: {
    id: nextId++,
    profile_url: "https://picsum.photos/id/1/50/50",
    author,
    content,
    createdAt,
  },
});

//초기상태 선언

const initialState = [
  {
    id: 1,
    profile_url: "https://picsum.photos/id/1/50/50",
    author: "예시",
    content: "예시",
    createdAt: "2022-03-01",
  },
];

// const initialState = getComments();

//리듀서 함수
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return state.concat(action.todo);
    default:
      return state;
  }
};

export { createComment };
export default commentReducer;
