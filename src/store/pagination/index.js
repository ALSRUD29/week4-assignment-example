//액션 타입 정의
const CURRENT_PAGE = "current_page";

//액션 크리에이터 생성
const currentPage = (index) => ({
  type: CURRENT_PAGE,
  payload: { index },
});

//초기상태 선언
const initialState = 1;

//리듀서 함수
const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_PAGE:
      return action.payload + 1;
    default:
      return state;
  }
};

export { currentPage };
export default paginationReducer;
