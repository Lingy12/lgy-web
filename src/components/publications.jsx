import React from "react";

class Publications extends React.Component {
  constructor() {
    super();
    this.state = {
      publications: [
        {
          id: "meralion-audillm-2025",
          title: "MERaLiON-AudioLLM: Advancing Speech and Language Understanding for Singapore",
          authors: "Y He, Z Liu, Lin Geyu, S Sun, B Wang, W Zhang, X Zou, NF Chen, AT Aw",
          venue: "ACL 2025 - System Demonstrations",
          year: "2025",
          type: "conference"
        },
        {
          id: "audiobench-2025",
          title: "Audiobench: A universal benchmark for audio large language models",
          authors: "B Wang, X Zou, Lin Geyu, S Sun, Z Liu, W Zhang, Z Liu, AT Aw, NF Chen",
          venue: "NAACL 2025",
          year: "2025",
          type: "conference"
        },
        {
          id: "personality-aware-2024",
          title: "Personality-aware Student Simulation for Conversational Intelligent Tutoring Systems",
          authors: "Z Liu, SX Yin, Lin Geyu, NF Chen",
          venue: "EMNLP 2024 - Main",
          year: "2024",
          type: "conference"
        },
        {
          id: "resilience-llm-2024",
          title: "Resilience of Large Language Models for Noisy Instructions",
          authors: "B Wang, C Wei, Z Liu, Lin Geyu, NF Chen",
          venue: "EMNLP 2024 - Findings",
          year: "2024",
          type: "conference"
        },
        {
          id: "crossln-2025",
          title: "Crossln: An Efficient Instruction Tuning Approach for Cross-Lingual Knowledge Alignment",
          authors: "Lin Geyu, B Wang, Z Liu, NF Chen",
          venue: "SUMEval-2 at COLING 2025",
          year: "2025",
          type: "workshop"
        },
        {
          id: "craft-2024",
          title: "CRAFT: Extracting and Tuning Cultural Instructions from the Wild",
          authors: "B Wang, Lin Geyu, Z Liu, C Wei, NF Chen",
          venue: "C3NLP at ACL 2024",
          year: "2024",
          type: "workshop",
          award: "Best Paper Award"
        },
        {
          id: "mowe-audio-2025",
          title: "Mowe-audio: Multitask audioilms with mixture of weak encoders",
          authors: "W Zhang, S Sun, B Wang, X Zou, Z Liu, Y He, Lin Geyu, NF Chen, AT Aw",
          venue: "ICASSP 2025",
          year: "2025",
          type: "conference"
        }
      ]
    };
  }

  highlightAuthor = (authors) => {
    return authors.replace(/\bLin Geyu\b/g, '<strong>Lin Geyu</strong>');
  };

  render() {
    return (
      <section id="publications" className="publications-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Publications</h3>
                <p className="subtitle-a">
                  My academic contributions in machine learning, natural language processing, and audio processing.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="publications-content">
                {this.state.publications.map((pub, index) => (
                  <div key={pub.id} className="publication-item mb-4">
                    <div className="card shadow-sm">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <span className="badge badge-primary publication-year">{pub.year}</span>
                          {pub.award && (
                            <span className="badge badge-warning award-badge">
                              <i className="fa fa-trophy"></i> {pub.award}
                            </span>
                          )}
                        </div>
                        <h5 className="publication-title mb-2">{pub.title}</h5>
                        <p 
                          className="publication-authors mb-2" 
                          dangerouslySetInnerHTML={{ __html: this.highlightAuthor(pub.authors) }}
                        ></p>
                        <p className="publication-venue mb-0">
                          <em>{pub.venue}</em>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Publications;
