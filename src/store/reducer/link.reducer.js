import {
  GET_LINKS,
  DELETE_LINK,
  ADD_LINK,
  GET_LINK,
  UPDATE_LINK,
} from '../actions/link.types';

const initialState = {
  links: [],
  link: {},
};

export const linkReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LINKS:
      return {
        ...state,
        links: action.payload,
      };
    case GET_LINK:
      return {
        ...state,
        link: action.payload,
      };
    case DELETE_LINK:
      return {
        ...state,
        links: state.links.filter((link) => link.id !== action.payload),
      };
    case ADD_LINK:
      return {
        ...state,
        links: [action.payload, ...state.links],
      };
    case UPDATE_LINK:
      return {
        ...state,
        links: state.links.map((link) => {
          return link.id === action.payload.id ? action.payload : link;
        }),
      };
    default:
      return state;
  }
};
