const loggedIn = () => !!localStorage.adminPanelToken;
const getToken = () => localStorage.adminPanelToken;

export default {
  getToken,
  loggedIn
};

export { getToken, loggedIn };
