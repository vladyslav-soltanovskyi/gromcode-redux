import { TOGGLE_OPTION } from "./options.actions";
import { optionsData } from "./options";

const initialState = {
  optionsList: optionsData,
  selected: []
}

export const optionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_OPTION: {
      const { optionId } = action.payload;
      const newSelected = state.selected.includes(optionId)
        ? state.selected.filter(id => id !== optionId)
        : [...state.selected, optionId];

      return {
        ...state,
        selected: newSelected,
      };
    }
    default: 
      return state;
  }
}