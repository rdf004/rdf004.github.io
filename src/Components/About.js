import React from 'react';
import Header from './Header';

import '../Style/style.css';

class About extends React.Component {

    render() {
        return (
            <div className="grid-holder">
            <div className="grid-container">
                <Header className="header"/>
                <p className="page-content">
                    Hi, I'm Roshan! <br/><br/> I've competed at a few hackathons with
                    my friends Cyrus, Ian, and Surya. We won at HackTech (Caltech's premier hackathon)
                    and D4SD (where we won $2,000 and 3 months in an accelerator), and we placed at SD Hacks
                    and SB Hacks. <br/><br/> I've also interned at &nbsp;<a className="p-a" href="https://www.goldmansachs.com/">Goldman Sachs</a> (Ops/Software Intern on Asset Management) 
                    and &nbsp;<a className="p-a" href="https://www.microsoft.com/en-us/">Microsoft</a> (Product Manager Intern on Azure enterprise security). You can read more about my
                    experiences, as well as why I chose product <a className="p-a" href="">here</a>.<br/><br/>Outside
                    of classes, I'm a venture partner for &nbsp;<a className="p-a" href="https://contrarycap.com/">Contrary Capital</a>, a university-focused venture capital
                    firm backed by the founders of Tesla, Facebook, etc. and the President of
                    &nbsp;<a className="p-a" href="">Product Space @ UCSD</a>, a club for product, tech strategy, and startups. <br/><br/>
                    I'm also an undergraduate researcher in Professor Tajana Rosing's System Energy and Efficiency
                    lab, where I research &nbsp;<a className="p-a" href="">Hyperdimensional Computing</a>. <br/><br/>
                    My favorite non-class project is &nbsp;<a className="p-a" href="">BitFlix</a>.<br/><br/>
                    My interests include product, math, startups, machine learning, finance, biology, philosophy,
                    leadership, and software.<br/><br/>I'm always down to meet people who are
                    open-minded, ambitious, kind, and creative, so feel free to reach out at <a className="p-a" href="">rdf004@ucsd.edu</a>.
                </p>
            </div>
            
            </div>
        )
    }

}

export default About;