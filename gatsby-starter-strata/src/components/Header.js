import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    super(props);
    this.state = {
        modal: false,
        backdrop: true
    }

    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am Justin</strong>, a musician <br />
                    turned software developer who <br />
                    loves a good challenge</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
