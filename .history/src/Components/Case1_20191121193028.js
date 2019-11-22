import React from 'react';
import Header from './Header';

import '../Style/style.css';
import interviewees from '../pics/Group1.png';
import personas from '../pics/Personas.png';
import miranda from '../pics/Miranda.png';
import matt from '../pics/Matt.png';
import finaldesigns from '../pics/FinalDesigns.png';
import flow1 from '../pics/flow1.png';
import flow2 from '../pics/flow2.png';
import flowa from '../pics/flowa.png';
import cover from '../pics/copy.png';

class Case1 extends React.Component {

    render() {
        return (
            <div className="grid-holder">

            <div className="grid-container-x">
                <Header className="header"/>
                <p className="page-content-x">
                <img className="xbig-img" src={cover} alt="Cover photo" />
                    <h1>LinkedIn Events</h1>
                    <p>Over 630 million users have created CVs and professional brands on LinkedIn. Founded in 2002, LinkedIn has transformed into the premier social media site for professional networking, brand building, and job hunting.</p>
                    <p>LinkedIn recently launched an events feature which allows users to create events and advertise them on their news feeds, similar to Facebook events. However, the LinkedIn Events feature has struggled to gain traction, partially because the current feature fails to tie into LinkedIn’s mission of “connecting the world’s professionals”. Hence, my team and I decided to redesign the LinkedIn events feature in order to drive more interpersonal interaction and networking between professionals. To do this, we narrowed our scope to professionals at networking events and conferences because they provide prime opportunities for professionals to meet new connections.</p>
                    <p>My teammates Edward and Prabhav and I collaborated on all work. Each of us had a hand in design, user interviews, and writing. However, I focused more on writing and on the Figma LinkedIn app high-fidelity prototypes.</p>
                    <h2>The Problem</h2>
                    <p className="case-important" ><b><b>LinkedIn users at professional conferences and networking events should be able to rekindle old connections, strengthen existing connections, and discover new connections from other attendees.</b></b></p>
                    <p></p>
                    <h3>Target User</h3>
                    <p>We’ve decided to focus on attendees of <b>professional conferences</b>, <b>networking events</b>, and <b>recruiting events</b> as our target audience.</p>
                    <h3>User Goals</h3>
                    <p>Users (event attendees) should be able to:</p>
                    - check-in as attending a certain professional conference or networking event<br/>
                    - find out which connections or friends are also attending<br/>
                    - engage with and set up in-person meetings and hangouts at the event
                    <h3>Why This Idea?</h3>
                    <p>My friend was recently accepted as an attendee to the 2019 Grace Hopper Conference in Orlando, FL. She was ecstatic to attend and connect with world-famous computer scientists and learn more about her field, and within hours of finding out, she announced that she would be attending on LinkedIn.</p>
                    <p>As I scrolled through my LinkedIn news feed, I saw similar posts from members of my network, announcing that they too would be attending Grace Hopper. I quickly messaged them to meet up at the conference, and was excited to connect with many old friends who I hadn’t seen in years. But, I began to wonder. Who else did I know attending Grace Hopper, who didn’t post on Linkedin? How could I find out?</p>
                    <p>I wished these posts from GHC attendees could be aggregated into a single feature within the LinkedIn application. Through a location-verified check-in feature, what if any LinkedIn user could notify their network of attending a professional conference or networking event?</p>
                    <p>LinkedIn’s mission is simple enough: connect the world’s professionals to make them more productive and successful. A feature like this would spearhead new opportunities for users to grow their network, and even reignite old connections in the offline, real world. </p>
                    <p>Imagine that you’re attending a professional conference like Grace Hopper, and you find out that Erika, your roommate freshman year, and Jess, your office-mate from your first job out of college, are also attending. You haven’t seen them in years, so naturally, you want to meet up with them and make the most of this event, together.
We’re empowering users to do just that. Introducing, Events Check-In: a new LinkedIn feature to bring you closer to your connections during shared experiences, such as professional conferences and networking events.</p>
                    <p>Through LinkedIn, attendees of an event can check into the event, and discover other people, including their connections, who are also attending the event. This helps attendees in a few ways:</p>
                    <p>- Empower them to engage with friends and connections, thus rekindling old bonds and enforcing existing ones through shared experience<br/>
                    - Interact with new people at the event. Discover and make new connections with similar goals for the event, thus further enriching the event experience.<br/>
                    - Those listing as attending are verified. There’s no awkward guesswork of who’s actually coming, like with Facebook events.
                    </p>
                    <p>Our feature would help attendees prepare meetings before the event even starts, and enhance the experience during the event. LinkedIn currently has messaging and Bluetooth connect features, and we plan to leverage them to help attendees make group chats and share questions, concerns, and plans for the event.</p>
                    <h2>Interviews and Personas</h2>
                    <p>We conducted two one-on-one interviews. The first was with Faby Zuñiga, a university recruiter at Microsoft, who attends several conferences per year as a recruiter representing Microsoft. The second was with Jennifer Zheng, a software engineer at LinkedIn who also attends several conferences per year, both to represent LinkedIn and to learn more about the technology industry community.</p>
                    <img className="big-img" src={interviewees} alt="interviewees" />
                    <img className="big-img" src={personas} alt="personas" />
                    <h2>Storyboarding and User Flows</h2>
                    <img className="big-img" src={flow1} alt="flow1" />
                    <img className="big-img" src={flow2} alt="flow2" />
                    <img className="big-img" src={flowa} alt="flowa" />
                    <h2>Design Iterations</h2>
                    <h2>Design Testing</h2>
                    <h2>Final Results</h2>
                    <img className="xbig-img" src={finaldesigns} alt="final designs" />

                </p>
            </div>
            
            </div>
        )
    }

}

export default Case1;