import uuid from "uuid/v1";

// book reducer takes a state and action parameter
export const bookReducer = (state, action) => {
  // switch value of action.type
  switch (action.type) {
    case "ADD_BOOK": // add book function
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuid(),
        },
      ];
    case "REMOVE_BOOK": // remove book function
      return [
        ...state.filter(book => book.id !== action.book.id)  
      ];
    //   default return state
    default:
        return state
  }
};
