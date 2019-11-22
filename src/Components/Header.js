import React from 'react';
import '../Style/style.css';

class Header extends React.Component {

    render() {
        return (

            <div className="flex-container">
                <p className="name">Roshan Fernando</p>
                <ul className="header-li-elements">
                    <li><a className="list-item-a" href="/">About</a></li>
                    <li>|</li>
                    <li><a className="list-item-a" href="/work">Work</a></li>
                    <li>|</li>
                    <li><a className="list-item-a" href="/projects">Projects</a></li>
                    <li>|</li>
                    <li><a className="list-item-a" href="/design">Design</a></li>
                    <li>|</li>
                    <li><a className="list-item-a" href="/books">Books</a></li>
                    <li>|</li>
                    <li><a className="list-item-a" href="/resume">Resume</a></li>
                </ul>
                <p className="content">{this.about}</p>
            </div>
        )
    }
}

export default Header;