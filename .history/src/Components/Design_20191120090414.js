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
                    <b>(2019) LinkedIn Events Group</b> - La la<br/><br/>
                </p>
            </div>
            
            </div>
        )
    }

}

export default Design;