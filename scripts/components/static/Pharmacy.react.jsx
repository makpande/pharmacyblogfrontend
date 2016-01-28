var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="medium-2 columns">
          <ul className="side-nav even-5">
            <li><a href="#">Refills</a></li>
            <li><a href="#">Prescription</a></li>
            <li><a href="#">Vitamins</a></li>
            <li><a href="#">Compounding</a></li>
            <li><a href="#">Delivery</a></li>
          </ul>
        </div>
        <div className="medium-10 columns">
          <ul data-orbit data-options="pause_on_hover:false; timer_speed:2500">
            <li> <img src={"http://www.chaindrugreview.com/wp-content/uploads/2015/01/pharmacy-4.jpg"} /> </li>
            <li> <img src={"http://www.howtobecomeapharmacytech.org/wp-content/uploads/2013/12/pharmacy-technician-job-description.jpg?0b516b"} /> </li>
            <li> <img src={"http://grahampharmacy.com/Images/Pharmacy-2.jpg"} /> </li>
          </ul>
          <div className="row">
            <div className="large-4 columns">
              <a className="th">
                <img src={"https://www.weismarkets.com/wordpress/wp-content/uploads/2012/03/pharmacy-careers.jpg"}/>
                <p>Take a tour of our pharmacy. Serving since 1898</p>
              </a>
            </div>
            <div className="large-4 columns">
              <a className="th">
                <img src={"http://www.somersetpharmacy.ca/wp-content/uploads/2011/05/friendly.jpg"}/>
                <p>Most Trusted Profession</p>
                <p>Delivery on time</p>
              </a>
            </div>
            <div className="large-4 columns">
              <a className="th">
                <img src={"http://bestaidpharmacyrx.com/wp-content/uploads/2013/02/pharmacy_services.jpg"}/>
                <p>Pharmacy is open 7 days a week</p>
                <p>Quick Service, Friendly Staff</p>
              </a>
            </div>
          </div>
        </div>
      </div>

    )
  }
});
