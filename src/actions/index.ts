import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooksDetailsCall } from "../data-services";
import { FETCH_BOOK_DETAILS } from "../models/constants";
import { initializedBookDetailsState } from "../models/initializations";
import { BooksDetails } from "../models/interfaces";

export const getBooksDetailsData = createAsyncThunk<
  {
    booksDetails: BooksDetails;
  },
  string
>(FETCH_BOOK_DETAILS, async (searchString: string) => {
  const responseData = await getBooksDetailsCall(searchString);
  if (responseData === "REJECTED") {
    return {
      booksDetails: initializedBookDetailsState,
    };
  } else {
    return {
      booksDetails: responseData,
    };
  }
});
