var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Constants = require('../constants/Constants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = Constants.ActionTypes;

module.exports = {

  loadPosts: function() {
      AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_POSTS
    });
    WebAPIUtils.loadPosts();
  }
};
