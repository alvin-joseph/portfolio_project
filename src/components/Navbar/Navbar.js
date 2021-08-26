import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import { Link } from 'react-scroll'
import './Navbar.css'

class NavBar extends Component {
    state = {
        clicked: false,
        navbar: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    changeBackground = () => {
        if(window.scrollY >= 600) {
            this.setState({navbar: true})
        } else {
            this.setState({navbar: false})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.changeBackground)
    }

    render() {
        return(
            <nav className={this.state.navbar ? "NavbarItems active" : "NavbarItems"}>
                <div className="logo">
                    <h4>Alvin's Portfolio</h4>
                </div>
                <div className="burger" onClick={this.handleClick}>
                    <div className={this.state.clicked ? "cross1" : "line1"}></div>
                    <div className={this.state.clicked ? "cross2" : "line2"}></div>
                    <div className={this.state.clicked ? "cross3" : "line3"}></div>
                </div>
                <div className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <Link key={index}
                            className={item.cName}
                            activeClass="active"
                            to={item.id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={this.handleClick}
                            >
                                {item.title}
                            </Link>
                        )
                    })}
                </div>
            </nav>
        )
    }
}

export default NavBar