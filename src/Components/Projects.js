import React from 'react';
import Header from './Header';

import '../Style/style.css';

class Projects extends React.Component {

    render() {
        return (
            <div className="grid-holder">

            <div className="grid-container">
                <Header className="header"/>
                <p className="page-content">
                    <b><u>Projects</u></b><br/><br/>
                    <b>(2019) BitFlix</b> - A term popularized by Microsoft, the ‘broadband divide’ refers to the lack of opportunities available to businesses and people in rural areas who don’t have access to broadband internet. Hence, I created an app and an IoT device that essentially uses a collection of weak networks as as single strong network. People in a community can vote for movies/videos they want to see, and the top-voted videos will be split and a single segment will be downloaded onto each of their IoT devices. The video is then combined locally (not using the Internet) so that each person has a copy of the video. BitFlix is on GitHub <a className="p-a" href="https://github.com/rdf004/Bitflix">here</a>.<br/><br/>

                    <b>(2018) Ark</b> - At HackTech 2018, my team created an AI chatbot to help students read research papers. As students read a research paper, if they had a question about the paper or about the topic, they could ask Ark, our chatbot. Ark used AllenAI to parse the research paper and Wikipedia for answers to their question. Ark won at HackTech 2018, and you can see it <a className="p-a" href="https://devpost.com/software/ark-s8t51q">here</a>. It's also on GitHub <a className="p-a" href="https://github.com/IanCarrasco/ark">here</a>.<br/><br/>

                    <b>(2018) SentAI</b> - At SB Hacks 2018, my team created a web app that generated movie ratings. We scraped Facebook, Reddit, and Twitter for posts and tweets about movies and used sentiment analysis and natural language processing to generate five-star ratings as well as categorize the most positive and negative reviews, all on a beautiful ReactJS frontend. SentAI received honorable mentions at SB Hacks. SentAI is on GitHub 
                    &nbsp;<a className="p-a" href="https://github.com/IanCarrasco/SentAI">here</a>. Fun fact: we capitalized AI because Sentai reminded us too much of “Hentai.<br/><br/>

                    <b>(2017) Navier</b> - At the D4SD hackathon, we designed and implemented a lane-based navigation system for autonomous vehicles. Our system/implementation created a flow of cars towards exits, and would reduce lane changes, accidents, and traffic. <a className="p-a" href="https://scalesdblog.wordpress.com/2017/09/28/designing-the-future-of-transportation-in-san-diego/">Naiver won at D4SD</a> and we were awarded $2000 (split amongst Ian and myself) and 3 months in the ScaleSD smart city accelerator. Fun Fact: Ian and I won this before our first day of college; we were the youngest team there.<br/><br/>

                    <b>(2017) Using Machine Learning Techniques to Predict the Stock Market</b> - At the end of high school, I led an independent research project under the mentorship of a local professor. I used machine learning techniques to predict whether the stock prices of big-box companies would increase or decrease over a variety of time series. It was an amateur project, but was published in a journal for outstanding high school research. It also served as an introduction to CS and finance, which would lead me to Goldman Sachs and Microsoft. Some of it is on GitHub <a className="p-a" href="https://github.com/rdf004/Using-Machine-Learning-Techniques-to-Predict-Stock-Prices">here</a>.<br/><br/>.
                </p>
            </div>
            
            </div>
        )
    }

}

export default Projects;