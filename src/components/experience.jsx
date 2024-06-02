import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import Image from 'react-image-resizer'
import nus from "../img/nus_logo.jpeg"
import paypal from "../img/paypal_logo.png"
import agoda from "../img/agoda_logo.jpeg"
import i2r from '../img/astar_i2r_horizontal-logo_rgb.png'
class Experience extends React.Component {
    constructor() {
        super();
        this.state = {
            experience: [
                {
                    id: 1,
                    company: "Institute for Infocomm Research, Agency of Science Technology & Research",
                    logo: i2r,
                    title: "Research Engineer",
                    Responsibility: ["Design System for Automatic Speech Evaluation demo website and implement it", 
                        "Develop training code using pytorch and transformers for Automatic Speech Evaluation (ASR) and Large Language Model (LLM) Training",
                        "Improve LLM's multilingual consistency through a simple but effective approach (CrossIn)",
                        "Adapt Whisper for Singlish and code switch",
                        "Training infrastructure setup on different compute cluster"
                    ], 
                    Date: "2023 May - Present"
                },
                {id: 2,
                company: "Agoda", 
                logo: agoda, 
                title: "Data Science and Machine Learning Intern", 
                Responsibility: ["Deisgn the system to support online reinforcement learning",
                                "Implement general Reinforcement Learning framework with different exploration algorithm", 
                                "Adapt different use cases with respect to the framework"], 
                Date:"2022 Aug - 2023 May"},
                {id: 3,
                    company: "NUS Ubicomp Lab",
                    logo: nus, 
                    title: "Research Intern", 
                    Responsibility: ["Develop Android Application to support data collection from Esense earbuds device (Accelerometer, gyroscope)",
                                    "Collect face touching activity data using earbuds sensor for 30 participants", 
                                    "Implement 1DCNN, LSTM model for activity recognition (classification)"], 
                    Date:"2020 Dec - 2022 May"},
                    {id: 4,
                        company: "PayPal", 
                        logo: paypal,
                        title: "Software Engineer Intern", 
                        Responsibility: ["Develop Internal Issue Tracker using ReactJS, Springboot and Mongo DB", 
                                        "Design API for website to fetch issue information from JIRA",
                                        "Support Auto email of the summary and analysis of issue",
                                        "Improve regression testing by creating java aspect to precreate data and fetch data directly during test time",
                                        "Reduce regression test time by 40%"], 
                        Date:"2021 Jan - 2021 July"}
            ]
        }
    }
    render() {
        return (
            // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
            <section id="experience" className="portfolio-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">Work Experience</h3>
                                <p className="subtitle-a">
                                    Professional Experience
                                </p>
                            </div>
                        </div>
                        {
                            this.state.experience.map(experience => {
                                return (
                                    <React.Fragment>
                                    <div className="col-sm-12">
                                    <div className="box-shadow-full" >
            
                                    <center><Image src={experience.logo} height={100} width={100} style={{ alignSelf: 'center' }}/></center>
                                    <div><b>Company:</b> {experience.company} </div>
                                    <div><b>Title:</b> {experience.title} </div>
                                    <div><b>Responsibility:</b></div>
                                        {
                                            experience.Responsibility.map(
                                                item => {
                                                    return (
                                                        <li key="{item}">{item}</li>
                                                    );
                                                }
                                            )
                                        }
                                    <div><b>Duration: </b>{experience.Date}</div>
                                    </div>
                                    </div>
                                    </React.Fragment>
                                );})
                        }
                    </div>                        
                </div>
            </section>
        );
    }
}

export default Experience;
