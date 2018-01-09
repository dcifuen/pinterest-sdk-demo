const PDK = window.PDK;

PDK.init({
  appId: process.env.REACT_APP_PINTEREST_APP_ID,
  cookie: true
});

/*
 *  Wrapper for all Pinterest SDK actions
 */
const Pinterest = {
  /*
   *  Use the SDK to login to Pinterest
   *  @param {Function} callback - function fired on completion
   */
  login: function (callback) {
    PDK.login({scope: 'read_public, write_public'}, callback);
  },
  /*
   *  Use the SDK to logout of Pinterest
   */
  logout: function () {
    PDK.logout();
  },

  loggedIn: function () {
    return !!PDK.getSession();
  },
  profile: function (callback) {
    PDK.me(null, {fields: 'username,image'}, callback);
  },
};

export default Pinterest;

