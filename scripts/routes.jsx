var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/App.react.jsx');
var LoginPage = require('./components/session/LoginPage.react.jsx');
var StoriesPage = require('./components/stories/StoriesPage.react.jsx');
var StoryPage = require('./components/stories/StoryPage.react.jsx');
var StoryNew = require('./components/stories/StoryNew.react.jsx');
var SignupPage = require('./components/session/SignupPage.react.jsx');
var HomePage = require('./components/static/HomePage.react.jsx');
var Pharmacy = require('./components/static/Pharmacy.react.jsx');
var AboutView = require('./components/static/AboutView.react.jsx');
var ContactView = require('./components/static/ContactView.react.jsx');

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={HomePage} />
    <Route name="login" path="/login" handler={LoginPage}/>
    <Route name="signup" path="/signup" handler={SignupPage}/>
    <Route name="stories" path="/stories" handler={StoriesPage}/>
    <Route name="homepage" path="/homepage" handler={HomePage}/>
    <Route name="story" path="/stories/:storyId" handler={StoryPage} />
    <Route name="new-story" path="/story/new" handler={StoryNew}/>
    <Route name="pharmacy" path="/pharmacy" handler={Pharmacy}/>
    <Route name="contact" path="/contact" handler={ContactView}/>
    <Route name="about" path="/about" handler={AboutView}/>
  </Route>
);
