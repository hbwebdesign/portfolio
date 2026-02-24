import React from 'react'
import img1 from '../images/hemantbramhe.png'

export default function About() {

    return (
        <div>
            <section id="about" className="py-5">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="row align-items-center">

                        <div className="col-md-8 about-text">
                            <h3>Passionate UI Developer from Nagpur</h3>

                            <p>Self-taught UI Developer specializing in modern web and mobile applications using React, Angular, and Ionic frameworks. Experienced in creating responsive designs, handling routing, CRUD operations, and component management.</p>
                            <p>Strong focus on SEO, performance optimization, and delivering pixel-perfect user experiences. Always learning new technologies and exploring creative content ideas.</p>

                            <div className="about-buttons">
                                <a href="/Resume.pdf" className="cv-btn" download="">
                                    <i className="fas fa-download"></i> Download CV
                                </a>
                            </div>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/hemant-bramhe-b06427222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><i className="fab fa-linkedin"></i></a>
                                <a href="https://github.com/hbwebdesign/hemant" target='_blank'><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src={img1} alt='hemant-image' className="img-fluid rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
