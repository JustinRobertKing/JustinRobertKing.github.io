import React from 'react'
import Helmet from 'react-helmet'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Background1 from './Background1.jpg'
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

import pewPewREADME from '../assets/readmes/pewPewREADME.md'
import beerSavorREADME from '../assets/readmes/beerSavorREADME.md'
import cutColorREADME from '../assets/readmes/cutColorREADME.md'

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
            cut: null        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    componentWillMount() {
        fetch(pewPewREADME).then((response) => response.text()).then((text) => {
            console.log('pew', text)
            this.setState({ pew: text })
        })
        fetch(beerSavorREADME).then((response) => response.text()).then((text) => {
            console.log('beer', text)
            this.setState({ beer: text })
        })
        fetch(cutColorREADME).then((response) => response.text()).then((text) => {
            console.log('cut', text)
            this.setState({ cut: text })
        })
    }
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
                        <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
{/*                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>*/}
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>
                        <Accordion>
                            <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} style={{outline: 'none', textDecoration: 'none'}} variant="link" eventKey="0">
                                    <h2 style={{textAlign: 'left'}} >PEW PEW</h2>
                                    <img src={Background1} style={{width: '100%', height: 'auto', borderRadius: '5px'}} />
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body><ReactMarkdown source={this.state.pew} /></Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} style={{outline: 'none', textDecoration: 'none'}} variant="link" eventKey="1">
                                    <h2 style={{textAlign: 'left'}} >BEER SAVOR</h2>
                                    <img src={Background1} style={{width: '100%', height: 'auto', borderRadius: '5px'}} />
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body><ReactMarkdown source={this.state.beer} /></Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} style={{outline: 'none', textDecoration: 'none'}} variant="link" eventKey="2">
                                    <h2 style={{textAlign: 'left'}} >CUT / COLOR</h2>
                                    <img src={Background1} style={{width: '100%', height: 'auto', borderRadius: '5px'}} />
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body><ReactMarkdown source={this.state.cut} /></Card.Body>
                            </Accordion.Collapse>
                            </Card>
                        </Accordion>

{/*                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>*/}
                    </section>

                    <section id="three"> 
                        <h2>Hard Skills</h2>
                        <div className="4u 12u$(small)">
                            <ul className="labeled-icons">
                                <li>
                                    JavaScript<br />
                                    React<br />
                                    Node.js<br />
                                    Express<br />
                                    Python<br />
                                    JQuery<br />
                                    CSS<br />
                                    HTML<br />
                                    Redux<br />
                                    EJS<br />
                                    ES6<br />
                                    JSX<br />
                                    AJAX<br />
                                    Axios<br />
                                    Phaser.io<br />
                                    Bootstrap<br />
                                    Materialize<br />
                                    APIs<br />
                                    RESTful Routing<br />
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section id="four">
                        <h2>Get In Touch</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        12711 NE 120th St #A4<br />
                                        Kirkland, WA 98034<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        (425) 210-0362
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:kingj4@spu.edu">kingj4@spu.edu</a>
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