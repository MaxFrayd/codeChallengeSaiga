const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'login': {
      const { userEmail, allUsers } = action.payload;
      const selectedUser = allUsers.find((user) => user.email === userEmail);
      if (selectedUser) {
        return selectedUser;
      } else {
        return state;
      }
    }
    case 'logout': {
      return null;
    }
    default:
      return state;
  }
};

export default currentUser;
