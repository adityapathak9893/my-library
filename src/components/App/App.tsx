import React, { FC } from "react";
import { SearchComponent, LoadingIndicator, BookDetailsTable } from "..";
import { useStateSelector } from "../../hooks";
import "./App.css";

export const App: FC = () => {
  const { BooksDetails, loadingIndicator } = useStateSelector();
  return (
    <div className="App">
      <SearchComponent />
      <div className="searchResultsWrapper">
        {!loadingIndicator ? (
          !!BooksDetails.docs.length ? (
            <BookDetailsTable />
          ) : (
            <div className="messageWrapper">
              Once you start searching, data will show-up here
            </div>
          )
        ) : (
          <LoadingIndicator />
        )}
      </div>
    </div>
  );
};
