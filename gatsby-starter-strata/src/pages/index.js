import React from 'react'
import Helmet from 'react-helmet'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Background1 from './Background1.jpg'
import Background2 from './Background2.jpg'
import pew from './pew.png'
import landing from './landing.png'
import client from './client.png'
import cutcolorclip from './cutcolorclip.gif'
import beerlanding from './beerlanding.png'
import beermap from './beermap.png'
import beersavorui from './beersavorui.gif'
import ReactMarkdown from 'react-markdown'

import Layout from '../components/layout'


class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
            pew: null,
            beer: null,
            cut: null        
        };

    }

    render() {
        const siteTitle = "J/K || Portfolio"
        const siteDescription = "Justin King's Dev Portfolio"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Full-Stack Developer </h2>
                        </header>
                        <p>I am a solutions-driven software developer with a sharp, analytical mind who is highly motivated by challenge. My aptitude for digesting and implementing new technologies makes me both efficient when given a clear task, and exceptionally versatile when faced with ambiguity or road blocks.</p>
                    </section>

                    <section id="two">
                        <h2>Recent Work <small>(click for details)</small></h2>
                        <Accordion>
                            <Card style={{padding: '15px 0 0 0', margin: '15px 0 0 0', borderTop: '1px solid #b2b2b2'}}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} style={{outline: 'none', textDecoration: 'none'}} variant="link" eventKey="2">
                                    <img src={landing} style={{width: '32%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} />
                                    <img src={client} style={{margin: '0 2%', width: '32%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} />
                                    <img src={cutcolorclip} style={{width: '32%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} />
                                    <br />
                                    <h1 style={{position: 'relative ', top: '50%', left: '50%', transform: 'translate(-50%, 0%)', margin: 0}} >CUT / COLOR</h1>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body><ReactMarkdown source={this.state.cut} />
                                    <p style={{color: '#b2b2b2'}}>Cut / Color is a full-service consultation and scheduling solution designed for salon professionals and is built on the MERN stack</p>
                                    <p style={{color: '#b2b2b2'}}>TECH: React.js | Express | JSX | Axios | MongoDB | Mongoose | JavaScript | Token Authentication | HTML | CSS | Bootstrap</p>
                                    <p><a style={{color: '#b2b2b2'}} href="https://cut-color.herokuapp.com">Live Link</a><br />
                                        <a style={{color: '#b2b2b2'}} href="https://github.com/JustinRobertKing/salon-server">Github Repository (server)</a><br />
                                        <a style={{color: '#b2b2b2'}} href="https://github.com/JustinRobertKing/salon-client">Github Repository (client)</a>
                                    </p>                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <Card style={{padding: '15px 0 0 0', margin: '15px 0 0 0', borderTop: '1px solid #b2b2b2'}}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} style={{outline: 'none', textDecoration: 'none'}} variant="link" eventKey="1">    
                                    <img src={beerlanding} style={{width: '32%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} />
                                    <img src={beermap} style={{margin: '0 2%', width: '32%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} />
                                    <img src={beersavorui} style={{width: '32%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} />
                                    <br />
                                    <h1 style={{position: 'relative ', top: '50%', left: '50%', transform: 'translate(-50%, 0%)', margin: 0}} >BEER SAVOR</h1>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body><ReactMarkdown source={this.state.beer} />
                                    <p style={{color: '#b2b2b2'}}>Beer Savor is an exploratory brewery finding app built in Node.js </p>
                                    <p style={{color: '#b2b2b2'}}>TECH: Node.js | Express | JavaScript | EJS | SQL | PostgreSQL | Sequelize | AJAX | Web APIs | OAuth | JQuery | HTML | CSS | Materialize | MapBox</p>
                                    <p><a style={{color: '#b2b2b2'}} href="https://beer-savor.herokuapp.com/">Live Link</a><br />
                                        <a style={{color: '#b2b2b2'}} href="https://github.com/JustinRobertKing/project2">Github Repository</a>
                                    </p>                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <Card style={{padding: '15px 0 0 0', margin: '15px 0 0 0', borderTop: '1px solid #b2b2b2'}}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} style={{outline: 'none', textDecoration: 'none'}} variant="link" eventKey="0">
                                    <img src={pew} style={{width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} />
                                    <h1 style={{position: 'relative ', top: '50%', left: '50%', transform: 'translate(-50%, 0%)', margin: 0}} >PEW PEW</h1>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body><ReactMarkdown source={this.state.pew} />
                                    <p style={{color: '#b2b2b2'}}>Pew Pew is a space-shooter game built in the Phaser framework for HTML5 canvas</p>
                                    <p style={{color: '#b2b2b2'}}>TECH: Phaser.io | JavaScript | HTML | CSS</p>
                                    <p><a style={{color: '#b2b2b2'}} href="https://justinrobertking.github.io/space-game/game/">Live Link</a><br />
                                        <a style={{color: '#b2b2b2'}} href="https://github.com/JustinRobertKing/space-game">Github Repository</a>
                                    </p>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </section>

                    <section id="three"> 
                        <h2>Hard Skills</h2>
                        <div className="row">
                            <div className="3u 6u$(small)">
                                <div className="labeled-icons">
                                        JavaScript<br />
                                        React<br />
                                        Node.js<br />
                                        Gatsby.js<br />
                                        Express<br />
                                        Python<br />
                                        JQuery<br />
                                </div>
                            </div>
                            <div className="3u 6u$(small)">
                                <div className="labeled-icons">
                                        CSS<br />
                                        HTML<br />
                                        Redux<br />
                                        EJS<br />
                                        ES6<br />
                                        JSX<br />
                                        Git<br />
                                </div>
                            </div>
                            <div className="3u 6u$(small)">
                                <div className="labeled-icons">
                                        AJAX<br />
                                        Axios<br />
                                        Fetch<br />
                                        Phaser.io<br />
                                        Bootstrap<br />
                                        Materialize<br />
                                        Heroku<br />
                                </div>
                            </div>
                            <div className="3u 6u$(small)">
                                <div className="labeled-icons">
                                        SQL<br />
                                        PostgreSQL<br />
                                        Sequelize<br />
                                        MongoDB<br />
                                        Mongoose<br />
                                        Django<br />
                                        Flask<br />
                                </div>
                            </div>
                        </div>
                        <br />
                        <h2>Methodologies</h2>
                            Agile / Scrum | 
                            Object Oriented Programming | 
                            MVC Pattern | 
                            Test-Driven Development | 
                            Responsive Design | 
                            Authentication (OAuth/Sesssions/Tokens) | 
                            CRUD Operations | 
                            RESTful Routing

                    </section>

                    <section id="four">
                        <h2>Get In Touch</h2>
                        <p>Please don't hesitate to reach out. I love connecting with other folks who are passionate about tech.</p>
                        <div className="row">
                            <div className="3u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <a href="https://www.linkedin.com/in/justinrobertking/">
                                        <h3 className="icon fa-linkedin"><span className="label">Address</span></h3>
                                        Linked In</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="3u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <a href="https://github.com/JustinRobertKing">
                                        <h3 className="icon fa-github"><span className="label">Address</span></h3>
                                        Github</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="3u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <a href="mailto:kingj4@spu.edu">
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        kingj4@spu.edu</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="3u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <a href="https://justinrobertking.github.io/resume/resume.pdf">
                                        <h3 className="icon fa-file"><span className="label">Resume</span></h3>                  
                                        Resume</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex