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
                    <b><u>LinkedIn Events Feature</u></b><br/><br/>
                    <b>Run them racks up with my queen like London and Nip.</b><br/><br/>
                </p>
            </div>
            
            </div>
        )
    }

}

export default Case1;