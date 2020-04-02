import React from 'react';
import Footer from './components/Footer';
import Projects from './components/Projects';

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
            Check out my <a target="_BLANK" href="https://github.com/men32z" rel="noopener noreferrer">GitHub profile</a>.
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
                [
                  "<a target="_BLANK" href="mailto:preza.luis@gmail.com" rel="noopener noreferrer">preza.luis@gmail.com</a>",
                  "<a target="_BLANK" href="https://www.linkedin.com/in/men32z/" rel="noopener noreferrer">LinkedIn</a>",
                  "<a target="_BLANK" href="https://github.com/men32z" rel="noopener noreferrer">GitHub</a>",
                  "<a target="_BLANK" href="https://stackoverflow.com/users/9371472/men32z" rel="noopener noreferrer">StackOverflow</a>",
                  "<a target="_BLANK" href="https://angel.co/u/luis-preza" rel="noopener noreferrer">Angel List</a>",
                  "<a target="_BLANK" href="https://medium.com/@men32z" rel="noopener noreferrer">Medium</a>"
                ]
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
      <Projects />
      <Footer />
    </main>

  );
}

export default App;
