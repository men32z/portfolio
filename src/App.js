import React from 'react';
import Footer from './components/Footer';

function App() {
  return (
    <main className="container max-1000">
      <nav className="row">
        <div className="col-sm-12 d-flex justify-content-center justify-content-sm-end">
          <ul className="menu-right">
            <li>
              <a href="#projectsSection">Projects</a>
            </li>
            <li>
              <a href="#contactSection">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="row header">
        <div className="col-sm-12">
          <h1>Luis Preza<span>&nbsp;</span></h1>

          <p>
            I'm a Full-Stack Developer with a preference for front-end development.<br/>
            Check out my <a target="_BLANK" href="https://github.com/men32z">GitHub profile</a>.
          </p>
        </div>
      </section>
      <section className="row" id="terminalSection">
        <div className="terminal">
          <div className="terminal-header">
            <div className="t-button red"></div>
            <div className="t-button yellow"></div>
            <div className="t-button green"></div>
          </div>
          <div className="terminal-window">
            <div className="t-statement">
              <div className="t-input">
                Luis.currentLocation
              </div>
              <div className="t-response">
                "Guadalajara, Jalisco, México"
              </div>
            </div>


            <div className="t-statement">
              <div className="t-input">
                Luis.contactInfo
              </div>
              <div className="t-response">
                ["<a target="_BLANK" href="mailto:preza.luis@gmail.com">preza.luis@gmail.com</a>", "<a target="_BLANK" href="https://www.linkedin.com/in/men32z/">LinkedIn</a>", "<a target="_BLANK" href="https://github.com/men32z">GitHub</a>"]
              </div>
            </div>


            <div className="t-statement">
              <div className="t-input">
                Luis.resume
              </div>
              <div className="t-response">
                "<a target="_BLANK" href="/LuisPreza.pdf">LuisPreza.pdf</a>"
              </div>
            </div>


            <div className="t-statement">
              <div className="t-input">
                Luis.interests
              </div>
              <div className="t-response">
                ["coding", "music", "cooking", "video games", "travel"]
              </div>
            </div>


            <div className="t-statement">
              <div className="t-input">
                Luis.education
              </div>
              <div className="t-response">
                "B.Sc. IT - University of Guadalajara, Guadalajara, Jalisco, Mexico"
              </div>
            </div>


            <div className="t-statement">
              <div className="t-input">
                Luis.skills.backend
              </div>
              <div className="t-response">
                ["Php", "Ruby", "Rails", "Laravel", "Java", "NodeJS", "MySql"]
              </div>
            </div>

            <div className="t-statement">
              <div className="t-input">
                Luis.skills.frontend
              </div>
              <div className="t-response">
                ["JavaScript", "React", "Redux", "Vue", "Vuex", "SASS", "SCSS", "HTML5/CSS"]
              </div>
            </div>

            <div className="t-statement">
              <div className="t-input">
                <span>&nbsp;</span>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="row" id="projectsSection">
        <div className="section-title">
          <h2>Projects</h2>
        </div>

        <div className="project">
          <img className="d-none d-md-block" src="https://raw.githubusercontent.com/men32z/newsweek-clone/feature-branch/images/screenshots/desktop_2.png" alt="" />
          <div className="project-background d-none d-md-block"></div>
          <div className="project-content">
            <h3>NewsWeek Clone</h3>
            <p>A replica of the news site Newsweek.com, built using Javascript and the Bootstrap framework.</p>
            <div className="skills">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Bootstrap</span>
              <span>JavaScript</span>
              <span>JavaQuery</span>
              <span>Flexbox</span>
            </div>
            <div className="project-links">
              <a target="_BLANK" href="https://men32z.github.io/newsweek-clone/">
                Live Demo
                <img src="/images/link.svg" alt="" />
              </a>
              <a target="_BLANK" href="https://github.com/men32z/newsweek-clone" className="secondary">
                <img src="/images/github.svg" alt="" />
                View Source
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <img className="d-none d-md-block" src="https://raw.githubusercontent.com/men32z/grid-css-framework/grid-branch/assets/images/mobile.png" alt="" />
          <div className="project-background d-none d-md-block"></div>
          <div className="project-content">
            <h3>Design Your Own Grid-based Framework</h3>
            <p>A grid-based framework (similar to bootstrap) that includes the basic functionality necessary to build a website.</p>
            <div className="skills">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>SASS</span>
              <span>Flexbox</span>
            </div>
            <div className="project-links">
              <a target="_BLANK" href="https://men32z.github.io/grid-css-framework/">
                Live Demo
                <img src="/images/link.svg" alt="" />
              </a>
              <a target="_BLANK" href="https://github.com/men32z/grid-css-framework" className="secondary">
                <img src="/images/github.svg" alt="" />
                View Source
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>

  );
}

export default App;