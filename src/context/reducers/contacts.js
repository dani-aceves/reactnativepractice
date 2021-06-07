const contacts = (state, action) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return {};
    default:
      return state;
  }
};

export default contacts;
