var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Constants = require('../constants/Constants.js');

var ActionTypes = Constants.ActionTypes;

module.exports = {

  receiveLogin: function(json, errors) {
      AppDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },

  receiveStories: function(json) {
      AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_STORIES,
      json: json
    });
  },

  receiveStory: function(json) {
      AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_STORY,
      json: json
    });
  },

  receiveCreatedStory: function(json, errors) {
      AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CREATED_STORY,
      json: json,
      errors: errors
    });
  }

};
