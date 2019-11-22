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
import cpp from '../pics/cpp.png';
import groups from '../pics/groups.png';
import GroupsAlt from '../pics/GroupsAlt.png';
import events from '../pics/events.png';
import altevents from '../pics/altevents.png';
import iteration1 from '../pics/iteration1.png';
import beforeafter from '../pics/before_after.png';

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
                    <p>My teammates Edward and Prabhav and I collaborated on all work. Each of us had a hand in design, user interviews, and writing. I was responsible for all writing in the case. In addition, I conducted initial interviews, created the paper prototypes, designed and created the user workflows, and designed the high-fidelity LinkedIn app list screen prototypes.</p>
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
                    <p>LinkedIn’s mission is simple enough: connect the world’s professionals to make them more productive and successful. A feature like this would spearhead new opportunities for users to grow their network, and even reignite old connections in the offline, real world. </p>
                    <p>Imagine that you’re attending a professional conference like Grace Hopper, and you find out that Erika, your roommate freshman year, and Jess, your office-mate from your first job out of college, are also attending. You haven’t seen them in years, so naturally, you want to meet up with them and make the most of this event, together.
We’re empowering users to do just that. Introducing, Events Check-In: a new LinkedIn feature to bring you closer to your connections during shared experiences, such as professional conferences and networking events.</p>
                    <p>Through LinkedIn, attendees of an event can check into the event, and discover other people, including their connections, who are also attending the event. This helps attendees in a few ways:</p>
                    <p>- Empower them to engage with friends and connections, thus rekindling old bonds and enforcing existing ones through shared experience<br/>
                    - Interact with new people at the event. Discover and make new connections with similar goals for the event, thus further enriching the event experience.<br/>
                    - Those listing as attending are verified. There’s no awkward guesswork of who’s actually coming, like with Facebook events.
                    </p>
                    <p>Our feature would help attendees prepare meetings before the event even starts, and enhance the experience during the event. LinkedIn currently has messaging and Bluetooth connect features, and we plan to leverage them to help attendees make group chats and share questions, concerns, and plans for the event.</p>
                    <h2>Interviews</h2>
                    <p>We conducted two one-on-one interviews. The first was with Faby Zuñiga, a university recruiter at Microsoft, who attends several conferences per year as a recruiter representing Microsoft. The second was with Jennifer Zheng, a software engineer at LinkedIn who also attends several conferences per year, both to represent LinkedIn and to learn more about the technology industry community.</p>
                    <img className="big-img" src={interviewees} alt="interviewees" />
                    <img className="big-img" src={cpp} alt="findings" />
                    <h2>User Flows and Paper Prototypes</h2>
                    <img className="big-img" src={flow1} alt="flow1" />
                    <img className="big-img" src={flow2} alt="flow2" />
                    <p>Our goal is to extend the extend the LinkedIn Events feature in a way that encourages in-person interaction at conferences and professional events. To achieve this goal, people must know who is attending the event and interact with them. After designing our User Workflows, we decided to center our functionality to specifically the features that would encourage interaction in real life. Therefore, we took the idea of verified and unverified check-ins from the original user goals, because people can only physically meet up with others who are actually at the event. We also took the design idea of listing all attendees, and offering a way to connect or interact with them from the list of all attendees.</p>
                    <p>To explore and test our initial workflows, we designed <b>Flow A</b>, which focuses on groups that the attendee or recruiter can create, and the flow from viewing a conference or event to creating a group.</p>
                    <img className="big-img" src={flowa} alt="flowa" />
                    <h2>Design Iterations</h2>
                    <img className="big-img-designitr" src={iteration1} alt="Design Iteration 1" />
                    <p>Our prototype implements a combination of the Recruiter and Attendee Workflows. We selected the functionality of creating groups of attendees within events and interacting with those groups, but allowed all attendees the ability to do that. In addition, we added functionality to select certain events that you will be attending. Initially, we aimed to drive in-person interaction from our application. Creating groups and interacting with groups makes contacting recruits easy for recruiters, but also facilitates large-scale interaction for all attendees. Therefore, we decided to expand that functionality from just recruiters to all attendees. </p>
                    <h3>Alternate View Groups Designs</h3>
                    <div className="alt-div">
                        <img className="alt" src={groups} alt="Design Iteration 1" />
                        <img className="alt" src={GroupsAlt} alt="Design Iteration 1" />
                    </div>
                    <p>We created an alternate version of the screen in which users can see the groups created within an event. The alternate version takes a more graphic approach and organizes information in tiles rather than rows. The large images allow for quick and easy identification of groups and adds color to the page, making it more aesthetic. However, users may find it unintuitive because the layout varies from LinkedIn’s traditional row organization, which users will recognize from their list of connections for example. From future testing, we hope to understand whether users understand tile layouts not present in the original app. In addition, we hope to establish whether they value visual cues over verbal descriptions and whether the graphic layout detracts from the LinkedIn app’s “professional” ambience.</p>
                    <h3>Alternate Events List Designs</h3>
                    <div className="alt-div">
                        <img className="alt" src={events} alt="Design Iteration 1" />
                        <img className="alt" src={altevents} alt="Design Iteration 1" />
                    </div>
                    <p>We also created an alternate version of the screen showing events. In this version, we take a more graphical approach and include a large picture for the event, but users must scroll through events one-by-one. It will take users longer to scroll through screens, and we plan to test whether the speed frustrates users. The success of this version also depends on whether the event creators upload quality pictures. If users recognize events from the image, events may have better recognition on news feeds. </p>
                    <h2>Design Testing</h2>
                    <p>After iterating on our initial designs, we wanted to see how users interacted with our flow. In particular, we wanted to analyze whether group creation was seamless and whether users could find all the functionality they were expecting. We were able to gather this information by timing how long it took for them to achieve certain steps and by having them express confusion verbally.</p>
                    <p>We interviewed the following three people.</p>
                    <p><b>Caroline Sih</b> - previous software engineering intern at Intuit; has attended multiple professional conferences in the past</p>
                    <p><b>Chris Maytom</b> - chapter technology chair Tau Beta Pi, a national engineering organization; has attended conferences for Tau Beta Pi</p>
                    <p><b>Miranda Go</b> - 2x software engineering intern at Google; attends four conferences per year</p>
                    <p>Caroline, Chris, and Miranda all praised the aesthetic and colorful design of our feature. With the buttons and icons that we designed, they felt as though they were using the real LinkedIn app. Furthermore, they easily interacted with the group (setting filters and messaging group members). All three liked the tile layout of both alternate screens better, and found it more eye-catching and simple to use.</p>
                    <p>Caroline, Chris, and Miranda all stated that the navigation was confusing. Specifically, they found the flow for adding attendees to a group unintuitive. They weren’t sure how to select people for a group and how the message icon helped to add people to a group. Additionally, the congratulatory message prevented them from seeing the group that they just created; they were expecting to see the new group immediately after creating it.</p>
                    <p>We found feedback about navigation being difficult particularly meaningful. Further questions revealed the navigation was difficult for two reasons. First, the user wasn’t being led to the screens they were expecting to be led to after certain actions. For example, after creating the group, they were expecting to see the group. Second, they couldn’t find icons that they needed. They searched for obvious icons to create the new group view the new group. While the other feedback was useful, many problems stemmed from difficulty navigating the feature. For this reason, we decided to focus on the screens that facilitate the two main experiences. The first was the screen to initialize the group. The second was the screen transitioning from creating the group to the new group. Our TAs expressed similar thoughts, and stated that they did not fully grasp how the screens fit together. This was another reason that we decided to update the two screens that transition between fundamental states of our feature: attendees and groups.</p>
                    <img className="xbig-img" src={beforeafter} alt="final designs" />
                    <h2>Final Design</h2>
                    <p>Our team took feedback from design testing into account, and created a final design for the LinkedIn Event Groups feature. We focused on streamlining navigation and making it clear what a user's next steps were. In addition, we focused more on visual prompts. For example, we opted for images, graphics, and tiles over words and lists.</p>
                    <img className="xbig-img" src={finaldesigns} alt="final designs" />
                    <h2>Reflection</h2>
                    <p>This project was my introduction to design. Prior to this project, I had never used Figma and was blissfully unaware of the rigorous design process for launching a feature. I had previously worked as a Product (Program) Manager Intern at Microsoft, but I was on an enterprise security team that did little front-end design and had little customer interaction. First, I was surprised by the rigor of the design process. Each step required several interviews and feedback sessions, and the process was very data-driven. Little was left to speculation or assumptions. I was also surprised by how easy it was for us to replicate the actual LinkedIn app. Figma allowed us to design custom iconography and match sizes and colors precisely.</p>
                    <p>Our feature facilitates discovery of attendees and large scale interaction with other attendees of events posted on LinkedIn. LinkedIn users can view the list of event attendees, create groups of especially relevant fellow attendees, and interact with them as a group on a large scale. A single event attendee or recruiter doesn’t find all other attendees relevant. Currently, LinkedIn only allows users to interact with all other attendees, of whom there may be thousands. Our Group feature allows a single event attendee to filter the other attendees and create groups of the most relevant attendees centered around single characteristics. Not only that this encourage users to actually view the list of attendees, but users are more likely to interact with the group because they have some trait in common. Therefore, our redesign and feature extension of the LinkedIn Events feature encourage more discovery of and mingling with other attendees, better achieving LinkedIn’s mission to connect the world’s professionals.</p>
                    <p>For future work, we plan to improve our feature in two ways. First, we will extend functionality for recruiters. Our initial goal was to also empower recruiters at events to view and interact with attendees. To better achieve this goal, we will allow more fine-grained filtering of attendees and offer ways for recruiters to send job applications and recruiting materials to groups. Second, we will offer new ways of interacting with groups users create. Currently, users can organize groups and send group messages. In the future, we will offer features to plan group meetups and share groups publicly.</p>
                    <p>I would also like to continue exploring how we can utilize mobile applications to encourage human interaction in real life. Within the last few years, the ubiquity of technology has expanded far beyond personal phones. With Apple AirPods, many people have a peripheral device to interact with instantly.  It’s easier than ever to call up a friend or send a text or picture. Still, virtual communication lacks many virtues of in-person communication. As such, I want to continue designing features that connect people digitally, but otherwise encourage long-lasting off-screen personal interactions.</p>
                    <p></p>
                </p>
            </div>
            
            </div>
        )
    }

}

export default Case1;