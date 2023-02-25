import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { getBooksDetailsData } from "../actions";
import { initializedAppState } from "../models/initializations";
import { AppState, BooksDetails } from "../models/interfaces";

const AppReducer = createReducer(initializedAppState, (app) => {
  app
    .addCase(
      getBooksDetailsData.pending,
      (state: AppState): AppState => ({
        ...state,
        loadingIndicator: true,
      })
    )
    .addCase(
      getBooksDetailsData.rejected,
      (state: AppState): AppState => ({
        ...state,
        loadingIndicator: false,
      })
    )
    .addCase(
      getBooksDetailsData.fulfilled,
      (
        state: AppState,
        {
          payload,
        }: PayloadAction<{
          booksDetails: BooksDetails;
        }>
      ): AppState => ({
        ...state,
        loadingIndicator: false,
        bookDetails: payload.booksDetails,
      })
    );
});

export default AppReducer;
