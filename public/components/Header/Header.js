var Header = React.createClass({
  render: function() {
    return (

      <header className="main-header">
        {/* Logo */}
        <a href="index.html" className="logo">
          {/* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini"><b>A</b>LT</span>
          {/* logo for regular state and mobile devices */}
          <span className="logo-lg"><b>Admin</b>LTE</span>
        </a>
        <Navigation />
      </header>
    );
  }
  
});

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);