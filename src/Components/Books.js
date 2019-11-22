import React from 'react';
import Header from './Header';

import '../Style/style.css';

class Books extends React.Component {

    about = "Hi, I’m Roshan. \n\n I’ve competed at a few hackathons with my friends Cyrus, Ian, and Surya. We won at HackTech (Caltech’s premier hackathon) and D4SD (where we won $2,000 and 3 months in an accelerator), and we placed at SD Hacks and SB Hacks.\n The past two summers, I’ve interned at Goldman Sachs and Microsoft. You can read about them, as well as why I chose product, here. \n Outside of classes, I’m a venture partner at Contrary Capital, a university-focused venture capital firm backed by the founders of Tesla, Facebook, etc. and the President of Product Space @ UCSD, a club for product, tech strategy, and startups. \n I’m also an undergraduate researcher in Professor Tajana Rosing’s System Energy and Efficiency lab, where I research Hyperdimensional Computing. \n My favorite non-school project thus far is BitFlix, so feel free to take a look! I created all software and worked with someone else to create the hardware. \n My interests include product, math, startups, machine learning, finance, biology, philosophy, leadership, and software. \n Also, I’m always down to meet people who are open-minded, ambitious, kind, and creative, so feel free to reach out at rdf004@ucsd.edu!"
    
    newText = this.about.split ('\n').map ((item, i) => <p key={i}>{item}</p>);

    render() {
        return (
            <div className="grid-holder">

            <div className="grid-container">
                <Header className="header"/>
                <p className="page-content">
                <b><u>My Favorite Books</u></b><br/><br/>
                Siddhartha - Herman Hesse<br/><br/>
                Heart of Darkness - Joseph Conrad<br/><br/>
                The Autobiography of Malcolm X - Malcolm X, Alex Haley<br/><br/>
                How to Get Rich - Felix Dennis<br/><br/>
                Principles - Ray Dalio<br/><br/>
                The Like Switch - Jack Schafer, Marvin Karlins<br/><br/>
                Never Split the Difference - Christopher Voss<br/><br/>
                Indistractable - Nir Eyal<br/><br/>
                Hooked - Nir Eyal<br/><br/>
                Bonus: Algorithms - CLRS<br/><br/>
                </p>
            </div>
            
            </div>
        )
    }

}

export default Books;