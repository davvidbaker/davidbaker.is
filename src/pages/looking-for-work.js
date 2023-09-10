import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '../components/layout'

const Div = styled.div`
  main {
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  .left {
    max-width: 50rem;
    margin-right: 30px;
    width: 60%;
  }

  .right {
    max-width: 40rem;
    width: 35%;
    padding-left: 10px;
    border-left: 1px solid #f5f5f5;
  }

  .name {
    font-size: 4rem;
    margin: 0 auto;
    text-align: center;
  }

  .subtitle {
    position: absolute;
    top: 20px;
    right: 40px;
    text-align: right;
    font-size: small;
    color: #888;
  }

  h2 {
    margin: 1.2rem 0 0.5rem 0;
    border-bottom: 1px solid #eee;
  }

  h3 {
    margin-bottom: 0.75rem;
  }

  h3 span {
    font-size: 0.9rem;
    margin-left: 5px;
    color: #888;
    font-weight: normal;
  }

  ul {
    list-style: disc;
    padding-left: 2rem;
  }

  p {
    color: #444;
    line-height: 1.5rem;
  }

  li p {
    margin: 0.25rem 0;
  }

  .annotations {
    margin-top: 3rem;
  }

  .annotations ul {
    list-style: none;
    padding-left: 0;
  }

  .annotations p {
    font-size: small;
    color: #aaa;
    line-height: 1rem;
    margin-bottom: 0.75rem;
  }

  #printer-icon {
    display: unset;
  }

  .print-show {
    display: none;
  }

  #printer-icon {
    content: '';
    top: 30px;
    right: 20px;
    position: absolute;
    width: 40px;
    height: 16px;
    border-radius: 5px 5px 0 0;
    background: #bbb;
    background-image: radial-gradient(circle at 90% 25%, white 3%, #bbb 3.1%);
    perspective: 60px;
    cursor: pointer;
  }

  #printer-icon::before {
    content: '';
    position: absolute;
    width: 75%;
    height: 80%;
    border: 2px solid #999;
    border-bottom-width: 0;
    background: white;
    top: calc(-80%);
    left: 10%;
    transition: 0.3s;
    transform-origin: center bottom;
  }

  #printer-icon::after {
    content: 'PRINT ALL THE THINGS';
    color: white;
    font-size: 4px;
    box-sizing: border-box;
    text-align: center;
    position: absolute;
    width: 90%;
    height: 100%;
    bottom: -20%;
    left: 3%;
    border: 2px solid #999;
    background: white;
    border-top: 0;
    z-index: 10;
    transform: rotateX(70deg);
    transition: transform 0.3s, color 0.1s;
  }

  #printer-icon:hover::after {
    transform: translatez(10px) rotatex(60deg) scalex(0.9);
    color: black;
  }

  #printer-icon:hover::before {
    transform: scaley(0.5);
  }

  @media (max-width: 800px) {
    main {
      flex-direction: column;
    }

    .left {
      width: unset;
      margin-right: unset;
    }

    .right {
      max-width: unset;
      width: unset;
      padding-left: unset;
      border-left: unset;
    }

    #skills {
      display: block;
    }

    #skills div {
      max-width: unset;
    }
  }

  @media (max-width: 400px) {
    #printer-icon {
      display: none;
    }
  }

  @media print {

    body {
      width: 6in;
    }
    
    .name {
      text-align: left !important;
      margin: 0;
      left: 40px !important;
    }

    .print-hide,
    .print-hide::before,
    .print-hide::after {
      display: none !important;
    }

    .print-show {
      display: block !important;
    }

    #skills {
      display: flex;
      justify-content: space-between;
    }

    #skills p {
      font-size: 10px !important;
    }

    #skills ul {
      list-style-type: none;
      padding-left: 0;
      display: block;
    }

    #skills li {
      display: inline;
    }

    #skills li p {
      display: inline;
      padding-right: 3px;
    }


    #skills div {
      min-width: 20% !important;
      max-width: 30% !important;
    }

    main {
      overflow: visible;
    }

    h2 {
      margin: 0.25rem 0 0.25rem 0;
      border-bottom: 1px solid #eee;
      font-size: 14px;
    }
  
    h3 {
      margin-left: 8px;
      margin-bottom: 0.25rem;
      font-size: 12px;
    }
    h3 span {
      font-size: 10px;
    }

    ul { margin: 0; list-style: none; }

    li::before {
      content: "• ";
      color: lightgray;
      display: inline;
      font-size: 10px;
    }

    li p {
      display: inline;
    }
    
    p { 
      font-size: 11px;
      line-height: 12px;
    }

    p a {color: inherit;}



    .left {
      max-width: unset;
      margin-right: unset;
      width: unset;
    }
    
  }
`;
const ResumeIndex = ({ location }) => (
  <Layout location={location}><Div>
    <Helmet title="David Baker - Résumé" />
    <div
      style={{
        margin: '0 auto',
        padding: '0 20px',
      }}
    >
      <header>
        <h1 className="name">David Baker</h1>
        <p className="subtitle print-show">
          davidbaker.is/looking-for-work<br /><br />david_baker@mines.edu
        </p>
        <button
          className="print-hide"
          id="printer-icon"
          onClick={() => window.print()}
        />
      </header>
      <main>
        <div className="left">
          <section>
            <h2>Objective</h2>
          <p>Experienced software engineer seeking electrical engineering internship in distributed energy resource field.
            Passionate about modernizing the grid and renewable energy sources.
          </p>
          </section>

          <section>
            <h2>Education</h2>
            <h3><a href="https://www.mines.edu/">Colorado School of Mines</a>
              <span>[2023 - graduating December 2024]</span></h3>
            <ul><li><p>Masters of Science in Advanced Energy Systems</p></li></ul>
            <h3>
              <a href="https://www.upenn.edu">University of Pennsylvania</a>
              <span>[2011 - 2015]</span>
            </h3>
            <ul>
              <li>
                <p>
                  Bachelor of Science in Engineering, Systems Science and
                  Engineering, <em>magna cum laude</em>
                </p>
              </li>
              <li>
                <p>
                  <a title="transcript" href="/unofficial-transcript.png">
                    Cumulative GPA: 3.78/4.00
                  </a>
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2>Work Experience</h2>
            <h3>
              <a href="https://www.workday.com/">Workday</a> - Software Engineer 3, 4 <span>[September 2019 - July 2023]</span>
            </h3>
            <ul>
              <li>
                <p>Worked within and across (mostly) client-centric teams focused on collaborative productivity-driving applications,
                  ie a data visualization/charting library, a text editor used across the platform, a WYSIWYG email designer.
                </p>
              </li>
            </ul>
            <h3>
              <a href="https://elasticsuite.com">Elastic Suite</a> - Full Stack
              Software Engineer <span>[January 2018 - present]</span>
            </h3>
            <ul className="print-hide">
              <li>
                <p>
                  Have been mostly working on modernizing a legacy dojo single
                  page app, porting existing functionality and building new
                  features with React.
                </p>
              </li>
              <li>
                <p>
                  Lots of writing tests. Unit tests. Functional component tests.
                  End to end tests. I make sure <strong>everything</strong> I am
                  writing has tests.
                </p>
              </li>
              <li>
                <p>
                  Occasionally have worked on our backend which is basically a
                  Ruby on Rails API that hooks up with Mongo.
                </p>
              </li>
            </ul>
            <h3>
              <a href="http://click3x.com/">Click 3X</a> ― Senior Developer
              <span>[June 2016 - December 2017]</span>
            </h3>
            <ul className='print-hide'>
              <li>
                <p>
                  Worked on a really wide variety of client projects varying
                  from your classic web stack to cross-platform game
                  development, VR dev for Oculus Rift, and Three.js and WebGL
                  experiences.
                  <em>
                    {' '}
                    See <Link to="/hacking">projects</Link> page for specifics.
                  </em>
                </p>
              </li>

              <li>
                <p>
                  Built stuff using all the latest web development tools―React,
                  Redux, webpack, Babel, Sass, etc.
                </p>
              </li>

              <li>
                <p>Lots of JavaScript, including Node for backend stuff.</p>
              </li>

              <li>
                <p>Tinkered with a few WordPress sites.</p>
              </li>
            </ul>

            <h3>
              <a href="http://xlab.upenn.edu/">xLAB</a> ― Embedded Systems
              Engineer
              <span>[Summer 2015]</span>
            </h3>
            <ul>
              <li>
                <p>
                  Researched electroacoustics and developed a{' '}
                  <Link to="/bombarded-by-sound">
                    home entertainment surround sound system
                  </Link>
                  , using parametric arrays and reflections to deliver highly
                  directed sound.
                </p>
              </li>
              <li>
                <p>
                  Experimented with different crossover configurations for
                  traditional loudspeakers to supplement the limited bandwidth
                  of piezoelectric transducers.
                </p>
              </li>
            </ul>

            <h3>
              <a href="http://www.danisbassett.com/">Complex Systems Group</a> ―
              Research Assistant
              <span>[Oct 2013 - May 2015]</span>
            </h3>
            <ul>
              <li>
                <p>
                  Analyzed the structure, function, and controllability of the
                  human musculoskeletal system from a network science
                  perspective.
                </p>
              </li>
              <li>
                <p>
                  Research dynamics and community structure in brain networks.
                </p>
              </li>
            </ul>

            <h3>
              <a href="https://www.alcoa.com/global/en/home.asp">Alcoa</a> ―
              Metallurgical & Quality Systems Intern
              <span>[Summer 2013]</span>
            </h3>
            <ul className='print-hide'>
              <li>
                <p>
                  Implemented process management system for anodizing alloys of
                  aluminum.
                </p>
              </li>
              <li>
                <p>Conducted capability analysis for new rectifier.</p>
              </li>
              <li>
                <p>
                  Created conditional reaction plans for complex operations.
                </p>
              </li>
            </ul>

            <h3>
              <a
                href="http://www.upenn.edu/fisher/summer-mt"
                title="Management & Technology Summer Institute"
              >
                M&TSI
              </a>{' '}
              ― Teaching Assistant<span>[Summer 2015]</span>
            </h3>
            <ul className='print-hide'>
              <li>
                <p>
                  Provided guidance for 55 high school students in engineering
                  labs and throughout the development of their own closed loop
                  mechatronic prototypes.
                </p>
              </li>
            </ul>

            <h3>
              <a
                href="https://esap.seas.upenn.edu/"
                title="Summer Academy in Applied Science and Technology"
              >
                SAAST
              </a>
              <span className='print-hide'>*</span> ― Residential Teaching Assistant
              <span>[Summer 2014]</span>
            </h3>
            <ul className='print-hide'>
              <li>
                <p>
                  Served as educator, mentor, and group leader of 20 high school
                  students in the Engineering Complex Networks program.
                </p>
              </li>
              <li>
                <p>
                  Fostered a tight-knit community through daily social
                  activities and weekend excursions.
                </p>
              </li>
            </ul>
          </section>
        </div>

        <div className="right">
          <section className="print-hide">
            <h2>Contact Info</h2>
            <ul>
              <li>
                <p>
                  Website:{' '}
                  <a href="https://davidbaker.is/online">
                    davidbaker.is/online
                  </a>
                </p>
              </li>
              <li>
                <p>
                  Email:{' '}
                  <a href="mailto:david_baker@mines.edu">
                    david_baker@mines.edu
                  </a>
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2>Honors</h2>

            <h3>
              Frederick Ketterer Memorial Award for Outstanding Creativity in
              Engineering Design
              <span>[2015]</span>
            </h3>
            <ul>
              <li>
                <p>
                  For senior design project{' '}
                  <Link to="/a-haptics-engineer">ForceField</Link>
                </p>
              </li>
            </ul>

            <h3>
              Dean's List<span>[2011 - 12, 2013 - 14, 2014 - 15]</span>
            </h3>
            <h3>
              Glenbrook North High School Distinguished Boy Award
              <span>[2011]</span>
            </h3>
            <ul>
              <li>
                <p>
                  Highest honor awarded by school, voted on by staff and
                  students
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2>Skills</h2>
            <div id="skills">
              <div>
                <h3 className='print-hide'>Software</h3>
                <ul>
                  <li><p>Matlab, Simulink</p></li>
                  <li>
                    <p>JavaScript, HTML, CSS</p>
                  </li>
                  <li>
                    <p>Node.js</p>
                  </li>
                  <li>
                    <p>Elixir and Phoenix</p>
                  </li>
                  <li>
                    <p>Postgres</p>
                  </li>
                  <li className='print-hide'>
                    <p>C# (for Unity)</p>
                  </li>
                  <li>
                    <p>MongoDB</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className='print-hide'>Hardware/Electronics</h3>
                <ul>
                  <li>
                    <p>Breadboarding, PCB Design, SPICE</p>
                  </li>
                  <li>
                    <p>Arduino & Raspberry Pi</p>
                  </li>
                  <li>
                    <p>Laser Cutting & 3D Printing</p>
                  </li>
                  <li>
                    <p>SolidWorks</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className='print-hide'>Other</h3>
                <ul>
                  <li>
                    <p>
                      Illustrator, Photoshop, After Effects, Character Animator,
                      Blender, Figma
                    </p>
                  </li>
                  <li>
                    <p>Spanish, Japanese, Mandarin</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className='print-hide'>
            <h2>Organizations</h2>
            <h3>
              <a href="http://2015s.pennapps.com/">PennApps</a> Design Team
              <span>[2014 - 2015]</span>
            </h3>
            <h3>
              Penn Engineers Without Borders<span>[2011 - 2014]</span>
            </h3>
          </section>
        </div>
      </main>

      <section className="annotations print-hide">
        <ul>
          <li>
            <p>
              * I think the name has since changed to Engineering Summer Academy
              at Penn.
            </p>
          </li>
        </ul>
      </section>
    </div>
  </Div>
  </Layout>
);

export default ResumeIndex;
