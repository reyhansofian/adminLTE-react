var NotificationNavigation = React.createClass({
  render: function() {
    return (

        <li className="dropdown notifications-menu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-bell-o" />
            <span className="label label-warning">10</span>
          </a>
          <ul className="dropdown-menu">
            <li className="header">You have 10 notifications</li>
            <li>
              {/* inner menu: contains the actual data */}
              <ul className="menu">
                <li>
                  <a href="#">
                    <i className="fa fa-users text-aqua" /> 5 new members joined today
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-warning text-yellow" /> Very long description here that may not fit into the
                                                                page and may cause design problems
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-users text-red" /> 5 new members joined
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-shopping-cart text-green" /> 25 sales made
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-user text-red" /> You changed your username
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer"><a href="#">View all</a></li>
          </ul>
        </li>
    );
  }
});