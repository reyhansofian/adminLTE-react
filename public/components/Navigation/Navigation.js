var Navigation = React.createClass({
  render: function() {
    return (

      <nav className="navbar navbar-static-top" role="navigation">
        {/* Sidebar toggle button*/}
        <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span className="sr-only">Toggle navigation</span>
        </a>
        <TopNavbar />
      </nav>
    );
  }
});