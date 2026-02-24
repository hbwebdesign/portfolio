import React from 'react'

export default function Services() {


  const frontendSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS / SCSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Angular", level: 75 },
    { name: "React", level: 75 }
  ];

  const toolSkills = [
    { name: "WordPress", level: 70 },
    { name: "Figma", level: 65 },
    { name: "Bootstrap", level: 80 },
    { name: "Photoshop", level: 60 },
    { name: "PrimeReact", level: 60 }
  ];
  return (
    <div>
      <section id="services" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="section-title">Skills</h2>
          <div className="row">

            <div className="col-md-6">

              <h5 className="category-title">Frontend Skills</h5>
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="progress skill-progress">
                    <div
                      className="progress-bar  skill-bar"
                      role="progressbar"
                      style={{ width: `${skill.level}%` }}
                    >
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </div>
                </div>



              ))}

            </div>

            <div className="col-md-6">

              <h5 className="category-title">Tools & Other Skills</h5>

              {toolSkills.map((skill, index) => (
                <div key={index}>
                  <div className="progress skill-progress">
                    <div
                      className="progress-bar skill-bar"
                      role="progressbar"
                      style={{ width: `${skill.level}%` }}
                    >
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
