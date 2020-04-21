import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/booksReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {

/*Usereducer An alternative to useState. Accepts a reducer of 
type (state, action) => newState, and returns the current state paired with a 
dispatch method.  */

// for the book context provider instead of a series of function
// we are using a reducer. 
// https://reactjs.org/docs/hooks-reference.html#usereducer
// takes the booksReducer as a parameter, an empty array, a annoymous function that
// retreives data from localStorage
// see const [state, dispatch] = useReducer(reducer, initialArg, init);
//  ie useReducer, takes a reducer argument,  an initial argument and an init function
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
