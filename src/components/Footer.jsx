import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer
        id="sticky-footer"
        className="py-4 bg-dark text-white-50 "
        style={{ marginTop: 30 }}
      >
        <div class="container text-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer>
    );
  }
}

export default Footer;
