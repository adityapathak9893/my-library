import { BooksDetails } from "../models/interfaces";

export const getBooksDetailsCall = async (
  searchString: string
): Promise<BooksDetails | "REJECTED"> => {
  return new Promise((resolve, reject) => {
    fetch(`https://openlibrary.org/search.json?q=${searchString}`)
      .then((responseData) => resolve(responseData.json()))
      .catch((err) => reject("REJECTED"));
  });
};
