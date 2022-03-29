const getPersistedState = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  return {
    currentUser,
  };
};

export default getPersistedState;
