var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Constants = require('../constants/Constants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = Constants.ActionTypes;

module.exports = {

  loadStories: function() {
      AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_STORIES
    });
    WebAPIUtils.loadStories();
  },

  loadStory: function(storyId) {
      AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_STORY,
      storyId: storyId
    });
    WebAPIUtils.loadStory(storyId);
  },

  createStory: function(title, body) {
      AppDispatcher.handleViewAction({
      type: ActionTypes.CREATE_STORY,
      title: title,
      body: body
    });
    WebAPIUtils.createStory(title, body);
  }

};
