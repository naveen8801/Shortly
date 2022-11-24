export const initialState = {
  user: null,
  shortenedLinks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LINKS':
      return {
        ...state,
        shortenedLinks: action.shortenedLinks,
      };
    case 'SET_USER':
      return {
        ...state,
        user: true,
      };
    case 'REMOVE_USER':
      return {
        ...state,
        user: false,
      };
    default:
      return state;
  }
};

export default reducer;
