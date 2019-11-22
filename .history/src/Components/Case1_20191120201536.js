import React from 'react';
import Header from './Header';

import '../Style/style.css';

class Case1 extends React.Component {

    render() {
        return (
            <div className="grid-holder">

            <div className="grid-container">
                <Header className="header"/>
                <p className="page-content">
                    <b><u>Case 1</u></b><br/><br/>
                    <b><a className="list-item-a" href="google.com">(2019) LinkedIn Events Group</a></b> - The LinkedIn Events feature is underutilized for professional networking events and professional conferences, such as Grace Hopper and F8. We created a new feature called LinkedIn Event Groups, which allows event attendees to see all other event attendees and create groups based on certain traits or attributes.<br/><br/>
                </p>
            </div>
            
            </div>
        )
    }

}

export default Case1;