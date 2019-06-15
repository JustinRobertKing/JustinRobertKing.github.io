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
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

// import pewPewREADME from '../assets/readmes/pewPewREADME.md'
// import beerSavorREADME from '../assets/readmes/beerSavorREADME.md'
// import cutColorREADME from '../assets/readmes/cutColorREADME.md'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

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

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    // componentWillMount() {
    //     fetch(pewPewREADME).then((response) => response.text()).then((text) => {
    //         console.log('pew', text)
    //         this.setState({ pew: text })
    //     })
    //     fetch(beerSavorREADME).then((response) => response.text()).then((text) => {
    //         console.log('beer', text)
    //         this.setState({ beer: text })
    //     })
    //     fetch(cutColorREADME).then((response) => response.text()).then((text) => {
    //         console.log('cut', text)
    //         this.setState({ cut: text })
    //     })
    // }
    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

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
{/*                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>*/}
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
                                    <p>I am a solutions-driven software developer with a sharp, analytical mind who is highly motivated by challenge. My aptitude for digesting and implementing new technologies makes me both efficient when given a clear task, and exceptionally versatile when faced with ambiguity or road blocks.</p>
                                </Card.Body>
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
                                    <p>I am a solutions-driven software developer with a sharp, analytical mind who is highly motivated by challenge. My aptitude for digesting and implementing new technologies makes me both efficient when given a clear task, and exceptionally versatile when faced with ambiguity or road blocks.</p>
                                </Card.Body>
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
                                    <p>I am a solutions-driven software developer with a sharp, analytical mind who is highly motivated by challenge. My aptitude for digesting and implementing new technologies makes me both efficient when given a clear task, and exceptionally versatile when faced with ambiguity or road blocks.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                        </Accordion>

{/*                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>*/}
                    </section>

                    <section id="three"> 
                        <h2>Hard Skills</h2>
                        <div className="row">
                            <div className="3u 6u$(small)">
                                <h4 style={{borderBottom: '1px solid b2b2b2'}}></h4>
                                <ul className="labeled-icons">
                                    <li>
                                        JavaScript<br />
                                        React<br />
                                        Node.js<br />
                                        Gatsby.js
                                        Express<br />
                                        Python<br />
                                        JQuery<br />
                                    </li>
                                </ul>
                            </div>
                            <div className="3u 6u$(small)">
                                <h4 style={{borderBottom: '1px solid b2b2b2'}}></h4>
                                <ul className="labeled-icons">
                                    <li>
                                        CSS<br />
                                        HTML<br />
                                        Redux<br />
                                        EJS<br />
                                        ES6<br />
                                        JSX<br />
                                    </li>            
                                </ul>
                            </div>
                            <div className="3u 6u$(small)">
                                <h4 style={{borderBottom: '1px solid b2b2b2'}}></h4>
                                <ul className="labeled-icons">
                                    <li>
                                        AJAX<br />
                                        Axios<br />
                                        Fetch<br />
                                        Phaser.io<br />
                                        Bootstrap<br />
                                        Materialize<br />
                                    </li>
                                </ul>
                            </div>
                            <div className="3u 6u$(small)">
                                <h4 style={{borderBottom: '1px solid b2b2b2'}}></h4>
                                <ul className="labeled-icons">
                                    <li>
                                        SQL<br />
                                        PostgreSQL<br />
                                        Sequelize (ORM)<br />
                                        MongoDB<br />
                                        Mongoose (ORM)<br />
                                        Django<br />
                                    </li>
                                </ul>
                            </div>
                        </div>
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
                                        <a href="https://justinrobertking.github.io/resume/">
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