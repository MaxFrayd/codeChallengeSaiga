const setCurrentUser = (currentUser) => {
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
};

export default setCurrentUser;
