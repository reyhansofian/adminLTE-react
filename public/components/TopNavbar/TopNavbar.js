var TopNavbar = React.createClass({
  render: function() {
    return (

      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <MessageNavigation />
          <NotificationNavigation />
          <TaskNavigation />
          <UserNavigation />
          
          {/* Control Sidebar Toggle Button */}
          <li>
            <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
          </li>
        </ul>
      </div>
    );
  }
});