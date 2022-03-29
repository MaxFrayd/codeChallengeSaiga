const errors = (state = {}, action) => {
  switch (action.type) {
    case 'login': {
      const { userEmail, allUsers } = action.payload;
      const selectedUser = allUsers.find((user) => user.email === userEmail);

      if (!selectedUser) {
        return { ...state, login: 'wrong-credentials' };
      } else {
        return { ...state, login: null };
      }
    }

    default:
      return state;
  }
};

export default errors;
