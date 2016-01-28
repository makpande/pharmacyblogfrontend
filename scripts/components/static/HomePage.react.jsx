var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div id="home-view">
        <div className="row">
          <h3>Welcome to my Pharmacy Blog</h3>
          <h4>Please Sign in for Blog</h4>
          <p> To test emailid: test@example.com Pwd: 12341234</p>

          <img className="Pharmacy" src="https://flufflepotdotcom.files.wordpress.com/2011/12/brittany.png" alt="Pharmacy"/>
        </div>
    </div>
    );
  }
});
