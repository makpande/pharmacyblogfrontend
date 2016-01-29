var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Constants = require('../constants/Constants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _posts = [];
var _errors = [];


var PostStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllPosts: function() {
    return _posts;
  },

  getErrors: function() {
    return _errors;
  }

});

PostStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.RECEIVE_POSTS:
      _posts = action.json.posts;
      PostStore.emitChange();
      break;
    
  }

  return true;
});

module.exports = PostStore;
