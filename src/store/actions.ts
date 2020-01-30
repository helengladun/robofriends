import { SearchTypes } from "./types";

export const setSearchField = (text: string) => ({
  type: SearchTypes.CHANGE_SEARCH_FIELD,
  payload: text
});

