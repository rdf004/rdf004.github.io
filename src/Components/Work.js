import React from 'react';
import Header from './Header';

import '../Style/style.css';

class Work extends React.Component {
    

    render() {
        return (
            <div className="grid-holder">

            <div className="grid-container">
                <Header className="header"/>
                <p className="page-content">
                <b><u>Work & Product</u> - </b>&nbsp;
                Two years ago, I taught jazz piano at the Boys & Girls Club of Watts-Willowbrook in Los Angeles, CA. I wanted to help build out their music instrument program, but needed credibility to fundraise. So, I went to the library and found a Nolo’s do-it-yourself law book on how to start nonprofits. I started a 501(c)(3) nonprofit called Jazz Helping Hands and was able to kickstart a great piano program at the Boys & Girls Club. We also started a music program at an orphanage in Tanzania, Africa.<br/><br/>
                From Jazz Helping Hands, I fell in love with business, product strategy, and executing visions with extremely limited resources.<br/><br/>
                When I came to college, I found a great group of friends (Ian, Cyrus, and Surya) during Week 0 and we competed in hackathons together. We placed at SD Hacks and SB Hacks and won at Design 4 San Diego and HackTech, Caltech’s premier hackathon.<br/><br/>
                After my freshman year, I interned at Goldman Sachs. Besides some finance work, I built a few enterprise applications for my team. One automated updating our client list by integrating with existing applications, and another used a Bayesian Classifier to automatically assign clients and investment reports to the best-fit member on our team. Together, they save the team about 35 hours per month.<br/><br/>
                I loved Goldman, but I missed the product strategy and analysis from running Jazz Helping Hands, so I sought more product  positions. So, this past summer, I interned as a PM at Microsoft on the Azure enterprise security team, where I helped launch a new policy-driven remote attestation service for Microsoft SQL Server and helped design a new service for Windows developers to port legacy Win32 applications onto a sandbox, so compromised apps can’t access the whole OS. I received an offer from PlayFab (acq. by Microsoft in Jan. 2018) and will likely go back. I'm pretty sure James Gwertzman will be my skip manager, so pretty sweet gig.<br/><br/>
                Now, I’m looking for product roles and software engineering roles at startups. Thanks for reading, and if you have anything interesting, please reach out!<br/><br/>
                </p>
            </div>
            
            </div>
        )
    }

}

export default Work;