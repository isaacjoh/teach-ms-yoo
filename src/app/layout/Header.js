import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <div className="header-section">
        <div className="header-title">
          <NavLink to="/" activeClassName="is-active">
            <h1>Hayoung Yoo</h1>
          </NavLink>
          <p>I am the greatest teacher ever! Yay!</p>
        </div>
        <nav className="navbar"
            aria-label="main navigation"
            style={{
                borderBottom: 'solid 1px #dddddd',
            }}>
            <div className="navbar-brand">
                <button className="button navbar-burger" onClick={this.toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
                <div className="navbar-start">
                    <NavLink className="navbar-item" to="/resume" activeClassName="is-active">
                        <span className="icon" style={{ marginRight: 5 }}>
                            <i className="far fa-file"></i>
                        </span>
                        Resume
                    </NavLink>
                    <NavLink className="navbar-item" to="/accomplishments" activeClassName="is-active">
                        <span className="icon" style={{ marginRight: 5 }}>
                            <i className="fas fa-trophy"></i>
                        </span>
                        Accomplishments
                    </NavLink>
                    <NavLink className="navbar-item" to="/recommendations" activeClassName="is-active">
                        <span className="icon" style={{ marginRight: 5 }}>
                            <i className="fas fa-thumbs-up"></i>
                        </span>
                        Recommendations
                    </NavLink>
                    <NavLink className="navbar-item" to="/blended-learning" activeClassName="is-active">
                        <span className="icon" style={{ marginRight: 5 }}>
                            <i className="fas fa-tablet-alt"></i>
                        </span>
                        Blended Learning
                    </NavLink>
                    <NavLink className="navbar-item" to="/workshop" activeClassName="is-active">
                        <span className="icon" style={{ marginRight: 5 }}>
                          <img className="pencil-icon" src="images/workshop.png" alt="workshop"/>
                        </span>
                        Reader's and Writer's Workshop
                    </NavLink>
                    <NavLink className="navbar-item" to="/cgi-math" activeClassName="is-active">
                        <span className="icon" style={{ marginRight: 5 }}>
                          <img src="images/cgi-math.png" alt="math"/>
                        </span>
                        <span>CGI Math</span>
                    </NavLink>
                    {/* <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" >
                            Projects
                        </a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                            Overview
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                            This Site
                            </a>
                            <a className="navbar-item" >
                            Angular The React Way
                            </a>
                        </div>
                    </div> */}
                </div>
                {/* <div className="navbar-end">
                    <a className="navbar-item" href="https://github.com/aaronklaser">
                    <span className="icon">
                        <i className="fab fa-lg fa-github"></i>
                    </span>
                    </a>
                    <a className="navbar-item" href="https://twitter.com/awklaser">
                    <span className="icon has-text-info" style={{ color: '#0084FF' }}>
                        <i className="fab fa-lg fa-twitter"></i>
                    </span>
                    </a>
                    <a className="navbar-item" href="http://resume.aaronklaser.com">
                    Resume
                    <span className="icon" style={{ color: '#0077B5', marginLeft: 5 }}>
                        <i className="fab fa-lg fa-linkedin"></i>
                    </span>
                    </a>
                </div> */}
            </div>
        </nav>
      </div>
    )
  }
}

export default Header