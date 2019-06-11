import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="wrapper">
      <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li class="sidebar-brand">
                <a href="#"><img src="images/my-img.png" alt="" /></a>
            </li>
            <li class="active">
                <a class="menu-item page-scroll" href="#home">Home</a>
            </li>
            <li>
                <a class="menu-item page-scroll" href="#about">About</a>
            </li>
            <li>
                <a class="menu-item page-scroll" href="#contact">Contact</a>
            </li>
            <li>
                <a class="menu-item page-scroll" target="_blank" href="https://drive.google.com/open?id=1FMYE6Frl-E4hhIHLquW0YnZcdaO6OPag">Resume</a>
            </li>
        </ul>
    </div>
      <div id="page-content-wrapper" class="header">
        <div class="container-fluid">
            <div id="top" data-toggle="top"></div>
            <a href="#menu-toggle" id="menu-toggle"><i class="lnr lnr-menu"></i></a>
            <header id="home">
                <div class="header-content">
                    <h2>Hello<span class="text-primary">.</span> I am <span class="text-primary">Jedidiah Jeyaraj</span></h2>
                    <h5>Web Designer / Web Developer / Software Developer</h5>
                    <p> <br />
                        <h4 style={{"color": "#0082d6"}}>
                        </h4>
                        I am a web developer with knowledge in many different front end and back end languages, responsive frameworks, databases, MVC architecture and best code practices. My Objective is to be the best developer that I can be and to contribute to the industry all that I can do. I am dedicated to learning from experienced developers and being a fast learner continuously learning all that i can do for development.
                    </p>
                </div>
            </header>
            <section id="about">
                <div class="container">
                    <div class="page-header space-left">
                        <h3>About<span class="text-primary">.</span></h3>
                    </div>
                    <div class="row">
                        <div class="col-md-4 feature-left space-bottom">
                            <div class="feature block">
                                <div class="feature-icon">
                                    <i class="lnr lnr-user"></i>
                                </div>
                                <h5>Full Name</h5>
                            </div>
                            <p>Jedidiah Jeyaraj</p>
                          </div>

                          <div class="col-md-4 feature-left space-bottom">
                            <div class="feature block">
                                <div class="feature-icon">
                                    <i class="lnr lnr-calendar-full"></i>
                                </div>
                                <h5>Birthdate</h5>
                            </div>
                            <p>Aug. 06, 1996</p>
                          </div>

                          <div class="col-md-4 feature-left space-bottom">
                            <div class="feature block">
                                <div class="feature-icon">
                                    <i class="lnr lnr-map-marker"></i>
                                </div>
                                <h5>Address</h5>
                            </div>
                            <p>Bangalore</p>
                          </div>

                    </div>
                    <div id="facts">
                        <div class="page-header space-left">
                            <h3>Facts<span class="text-primary">.</span></h3>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <i class="fact-icon lnr lnr-rocket"></i>
                                <h3 class="timer" id="websites" data-to="6" data-speed="1000">6</h3>
                                <h5 class="fact-title">Websites Launched</h5>
                            </div>
                            <div class="col-md-6">
                                <i class="fact-icon lnr lnr-pencil"></i>
                                <h3 class="timer" id="logos" data-to="57" data-speed="1000">57</h3>
                                <h5 class="fact-title">Photos Published</h5>
                            </div>
                        </div>
                    </div>
                    <div id="skills">
                        <div class="page-header space-left">
                            <h3>Skills<span class="text-primary">.</span></h3>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <h6 class="progress-title">JavaScript</h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary animated fadeInLeft" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{"width": "80%"}}>
                                    </div>
                                </div>

                                <h6 class="progress-title">CSS3</h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary animated fadeInLeft" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{"width": "70%"}}>
                                    </div>
                                </div>

                                <h6 class="progress-title">C++</h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary animated fadeInLeft" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{"width": "75%"}}>
                                    </div>
                                </div>

                                <h6 class="progress-title">C#</h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary animated fadeInLeft" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{"width": "70%"}}>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <h6 class="progress-title">HTML5</h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary animated fadeInLeft" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{"width": "80%"}}>
                                    </div>
                                </div>

                                <h6 class="progress-title">PHP</h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary animated fadeInLeft" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{"width": "90%"}}>
                                    </div>
                                </div>

                                <h6 class="progress-title">Node.js</h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary animated fadeInLeft" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{"width": "80%"}}>
                                    </div>
                                </div>

                                <h6 class="progress-title">MySql</h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary animated fadeInLeft" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{"width": "85%"}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div class="container">
                    <div class="page-header space-left">
                        <h3>Contact<span class="text-primary">.</span></h3>
                    </div>
                    <div class="row">
                        <div class="col-md-6 space-bottom">
                            <div class="contact-description">
                                <h5>Contact Description</h5>
                                <p>For Any website or application development regarding you can contact me in here or leave me a mail. I'll respond as soon as possible.</p>
                            </div>
                            <div class="space-25">&nbsp;</div>

                            <div class="row">
                                <div class="col-sm-6 feature-left space-top">
                                    <div class="feature block">
                                        <div class="feature-icon">
                                            <i class="lnr lnr-phone"></i>
                                        </div>
                                        <h5>Telephone</h5>
                                        <a href="tel:+917418975940">+91 7418 975 940</a>
                                    </div>
                                </div>

                                <div class="col-sm-6 feature-left space-top">
                                    <div class="feature block">
                                        <div class="feature-icon">
                                            <i class="lnr lnr-envelope"></i>
                                        </div>
                                        <h5>Email</h5>
                                        <a href="mailto:jedidiahjeyaraj@gmail.com" class="contact-info-text">jedidiahjeyaraj@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 feature-left space-top">
                                    <div class="feature block">
                                        <div class="feature-icon">
                                            <i class="lnr lnr-home"></i>
                                        </div>
                                        <h5>Home Address</h5>
                                        <p>Bangalore</p>
                                    </div>
                                </div>
                            </div>
                    
                        </div>
                        <div class="col-md-6">
                            <div id="contact-form-1">
                                <form id="contactForm" data-toggle="validator">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="name" placeholder="Full Name" required />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" placeholder="Email" required />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="form-group">
                                    <textarea id="message" class="form-control" rows="5" placeholder="Message" required></textarea>
                                    <div class="help-block with-errors"></div>
                                    </div>
                                    <button type="submit" id="form-submit" class="btn btn-md btn-primary-filled btn-form-submit">Send Message</button>
                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                    <div class="clearfix"></div>  
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div class="container">
                    <p class="footer-info">© 2018 - <strong>Jedidiah Jeyaraj</strong>
                        <span class="social pull-right">
                            <a href="https://www.facebook.com/jedidiah.jeyaraj"><i class="fa fa-facebook"></i></a>
                            <a href="https://twitter.com/jedidiahjeyaraj"><i class="fa fa-twitter"></i></a>
                            <a href="https://plus.google.com/+JedidiahJeyaraj"><i class="fa fa-google-plus"></i></a>
                            <a href="https://www.linkedin.com/in/jedidiahjeyaraj/"><i class="fa fa-linkedin"></i></a>
                        </span>
                    </p>
                </div>
            </footer>

            <a href="#top" class="scroll-to-top page-scroll is-hidden" data-nav-status="toggle"><i class="fa fa-angle-up"></i></a>

        </div>
    </div>
    </div>
  );
}

export default App;
