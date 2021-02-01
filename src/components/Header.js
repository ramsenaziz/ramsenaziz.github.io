import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  avatar: {
    marginTop: 20,
    width: 140,
    height: 140,
  },
});

const Header = ({ children, classes }) => {
  return (
    <section>
      <div className="header flex column flex-start">
        <div className="flex space-between align-center">
          <div className="flex column">
            <Avatar
              src="https://avatars.githubusercontent.com/u/22614779?s=460&u=ce9beac7f8c45aca4dfa33866eca1819b3d3785d&v=4"
              className={classes.avatar}
            />
            <h1 id="title">Ramsen Aziz</h1>
            <div className="badge-container">
              <span className="badge-content">Frontend Developer</span>
            </div>
            <a className="mail" href="mailto:ramsenaziz@me.com" target="_top">
              E-mail me
            </a>
            <>{children}</>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(Header);
