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
                    <h1>LinkedIn Events Redesign</h1>
                    <p>Over 630 million users have created CVs and professional brands on LinkedIn. Founded in 2002, LinkedIn has transformed into the premier social media site for professional networking, brand building, and job hunting.</p>
                    <p>LinkedIn recently launched an events feature which allows users to create events and advertise them on their news feeds, similar to Facebook events. However, the LinkedIn Events feature has struggled to gain traction, partially because the current feature fails to tie into LinkedIn’s mission of “connecting the world’s professionals”. Hence, my team and I decided to redesign the LinkedIn events feature in order to drive more interpersonal interaction and networking between professionals. To do this, we narrowed our scope to professionals at networking events and conferences because they provide prime opportunities for professionals to meet new connections.</p>
                    <p>My teammates Edward and Prabhav and I collaborated on all work. Each of us had a hand in design, user interviews, and writing. However, I focused more on writing and on the Figma LinkedIn app high-fidelity prototypes.</p>
                    <h2>Background Section</h2>
                    <h3><b>Design Prompt</b></h3>
                    <p><b>“Using a well-known social media app, extend or redesign a feature that helps encourage specific types of people in one’s surrounding area to get to gether in-person and physically interact in a meaningful way.”</b></p>
                    <h3>Project Objectives</h3>
                    <p>In designing a new feature for LinkedIn, we hope to help people rekindle old connections, strengthen existing connections, and discover new connections.</p>
                    <h3>Target User</h3>
                    <p>We’ve decided to focus on attendees of <b>professional conferences</b>, <b>networking events</b>, and <b>recruiting events</b> as our target audience.</p>
                    <h4>Large Target Market</h4>
                    <p>There are hundreds of large national professional conferences each year, including the Grace Hopper Conference, the National Society of Black Engineers Conference, and IEEE conferences. In addition, there are thousands of small- and medium-sized networking events daily, both internal to companies and across firms.</p>
                    <h4>Willingness to Pay</h4>
                    <p>Many people attend conferences and professional events to build connections that will support them in the future. For them, spending to develop connections is viewed as investing in their futures rather than as a net loss.</p>
                    <h4>Magnitude of User Need</h4>
                    <p>As attendees of conferences and young professionals, we struggle to maintain relationships with our LinkedIn connections. We don’t see them on a regular basis, leading to awkward re-introductions and “not sure if you remember me”s when we need to contact them again.</p>
                    <h3>User Goals</h3>
                    <p>Users (event attendees) should be able to:</p>
                    - check-in as attending a certain professional conference or networking event<br/>
                    - find out which connections or friends are also attending<br/>
                    - engage with and set up in-person meetings and hangouts at the event<br/>
                    <h3>Why This Idea?</h3>
                    <p>My friend was recently accepted as an attendee to the 2019 Grace Hopper Conference in Orlando, FL. She was ecstatic to attend and connect with world-famous computer scientists and learn more about her field, and within hours of finding out, she announced that she would be attending on LinkedIn.</p>
                    <p>As I scrolled through my LinkedIn news feed, I saw similar posts from members of my network, announcing that they too would be attending Grace Hopper. I quickly messaged them to meet up at the conference, and was excited to connect with many old friends who I hadn’t seen in years. But, I began to wonder. Who else did I know attending Grace Hopper, who didn’t post on Linkedin? How could I find out?</p>
                    <p>I wished these posts from GHC attendees could be aggregated into a single feature within the LinkedIn application. Through a location-verified check-in feature, what if any LinkedIn user could notify their network of attending a professional conference or networking event?</p>
                    <p>LinkedIn’s mission is simple enough: connect the world’s professionals to make them more productive and successful. A feature like this would spearhead new opportunities for users to grow their network, and even reignite old connections in the offline, real world. </p>
                </p>
            </div>
            
            </div>
        )
    }

}

export default Case1;