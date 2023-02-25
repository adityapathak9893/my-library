import { useDispatch, useSelector } from "react-redux";
import { getBooksDetailsData } from "../actions";
import { AppDispatch, RootState } from "../reducers/store";

export const useStateSelector = () => ({
  BooksDetails: useSelector((state: RootState) => state.bookDetails),
  loadingIndicator: useSelector((state: RootState) => state.loadingIndicator),
});

export const useActionDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return {
    getBooksDetailsData: (searchString: string) =>
      dispatch(getBooksDetailsData(searchString)),
  };
};
