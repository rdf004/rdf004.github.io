import React from 'react';
import Header from './Header';

import '../Style/style.css';

class Design extends React.Component {

    render() {
        return (
            <div className="grid-holder">

            <div className="grid-container">
                <Header className="header"/>
                <p className="page-content">
                    <b><u>Projects</u></b><br/><br/>
                    <b>(2019) LinkedIn Events Group</b> - The LinkedIn Events feature is underutilized for professional networking events and professional conferences, such as Grace Hopper and F8. We created a new feature called LinkedIn Event Groups, which allows event attendees to see all other event attendees and create groups based on certain traits or attributes.<br/><br/>
                </p>
            </div>
            
            </div>
        )
    }

}

export default Design;