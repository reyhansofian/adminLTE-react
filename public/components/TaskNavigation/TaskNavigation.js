var TaskNavigation = React.createClass({
  render: function() {
    return (

        <li className="dropdown tasks-menu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-flag-o" />
            <span className="label label-danger">9</span>
          </a>
          <ul className="dropdown-menu">
            <li className="header">You have 9 tasks</li>
            <li>
              {/* inner menu: contains the actual data */}
              <ul className="menu">
                <li>{/* Task item */}
                  <a href="#">
                    <h3>
                      Design some buttons
                      <small className="pull-right">20%</small>
                    </h3>
                    <div className="progress xs">
                      <div className="progress-bar progress-bar-aqua" style={{width: '20%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                        <span className="sr-only">20% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>
                {/* end task item */}
                <li>{/* Task item */}
                  <a href="#">
                    <h3>
                      Create a nice theme
                      <small className="pull-right">40%</small>
                    </h3>
                    <div className="progress xs">
                      <div className="progress-bar progress-bar-green" style={{width: '40%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                        <span className="sr-only">40% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>
                {/* end task item */}
                <li>{/* Task item */}
                  <a href="#">
                    <h3>
                      Some task I need to do
                      <small className="pull-right">60%</small>
                    </h3>
                    <div className="progress xs">
                      <div className="progress-bar progress-bar-red" style={{width: '60%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>
                {/* end task item */}
                <li>{/* Task item */}
                  <a href="#">
                    <h3>
                      Make beautiful transitions
                      <small className="pull-right">80%</small>
                    </h3>
                    <div className="progress xs">
                      <div className="progress-bar progress-bar-yellow" style={{width: '80%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                        <span className="sr-only">80% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>
                {/* end task item */}
              </ul>
            </li>
            <li className="footer">
              <a href="#">View all tasks</a>
            </li>
          </ul>
        </li>
    );
  }
});