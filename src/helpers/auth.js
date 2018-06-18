const loggedIn = () => !!localStorage.adminPanelToken;
const getToken = () => localStorage.adminPanelToken;

const logOut = () => {
  localStorage.removeItem("adminPanelToken");
  localStorage.removeItem("adminPanelTokenemail");
};

export default {
  getToken,
  loggedIn,
  logOut
};

export { getToken, loggedIn, logOut };
