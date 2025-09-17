import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "90%",
          value: "90"
        },
        { id: "Pytorch_skill", content: "Pytorch", porcentage: "90%", value: "90" },
        {
          id: "Machine Learning_skill",
          content: "Machine Learning",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "Training_skill",
          content: "Large Scale Model Training",
          porcentage: "80%",
          value: "80"
        },
        { id: "Java_skill", content: "Java", porcentage: "70%", value: "70" },
        { id: "C++_skill", content: "C++", porcentage: "70%", value: "70" },
        {
          id: "Tensorflow_skill",
          content: "Tensorflow",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "SQL_skill",
          content: "SQL",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "Spark_skill",
          content: "Spark",
          porcentage: "60%",
          value: "60"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "50%",
          value: "50"
        },
        {
          id: "SpringBoot_skill",
          content: "SpringBoot",
          porcentage: "50%",
          value: "50"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a Computer Science student in National University of Singapore graduated in 2023. The left hand side progress bar shows the skills that I know and my confidence level."
        },
        {
          id: "second-p-about",
          content:
            "I am enthusiastic about developing machine learning application in different domain. I have done several machine learning projects with respect to Human Activity Recognition, Image Classification and Planning using Reinforcement Learning.I also have background about developing full stack application and system testing for large scale system."
        },
        {
          id: "third-p-about",
          content:
            "I am interested in discussion about Machine Learning techniques and cutting edge application development technique."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
