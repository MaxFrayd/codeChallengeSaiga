const getPersistedState = () => {
  const currentUser = localStorage.getItem('currentUser');

  return ({
    currentUser
  });
};

export default getPersistedState;
