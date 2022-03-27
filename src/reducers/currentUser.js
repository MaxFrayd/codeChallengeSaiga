const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'login': {
      const { userEmail, allUsers } = action.payload;
      console.log(allUsers);
      const selectedUser = allUsers.find((user) => user.email === userEmail);
      if (selectedUser) {
        return {
          ...state,
          currentUser: selectedUser,
        };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};

export default currentUser;
