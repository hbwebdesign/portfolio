import React, { useEffect, useRef, useState } from 'react'

export default function Services() {

    const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);


  const frontendSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS / SCSS", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "Angular", level: 75 },
    { name: "React", level: 65 }
  ];

  const toolSkills = [
    { name: "WordPress", level: 80 },
    { name: "Figma", level: 70 },
    { name: "Bootstrap", level: 80 },
    { name: "Photoshop", level: 60 },
    { name: "PrimeReact", level: 60 }
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);



  return (
    <div>
      <section id="services" className="bg-light py-5" ref={sectionRef}>
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
                      style={{ width: visible ? `${skill.level}%` : '0%' }}
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
                      style={{ width: visible ? `${skill.level}%` : '0%' }}
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
