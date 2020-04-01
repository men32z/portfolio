import React from 'react';

function Footer(){
  return (
    <footer className="container max-1000" id="contactSection">
      <div className="row">
        <div className="section-title">
          <h2>Contact me!</h2>
        </div>
      </div>
      <nav className="row">
        <div className="col-sm-12 d-flex justify-content-center">
          <ul className="menu-right f-menu">
            <li>
              <a href="mailto:preza.luis@gmail.com">preza.luis@gmail.com</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/men32z/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/men32z">github</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row">
        <div className="col-sm-12 f-copy">
          Made by Luis Preza © 2019
        </div>

      </div>
    </footer>
  );
}

export default Footer;
