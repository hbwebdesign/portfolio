import React from 'react'
import img1 from '../images/projects-img/af-star.png'
import img2 from '../images/projects-img/bizhighlighters.jpg'
import img3 from '../images/projects-img/ganpati-home-stay.jpg'
import img4 from '../images/projects-img/kcc-pro1.png'
import img5 from '../images/projects-img/new-era2.png'
import img6 from '../images/projects-img/novasys.png'
import img7 from '../images/projects-img/raipur-hydrolics-pro2.png'
import img8 from '../images/projects-img/saojispaices-pro2.png'
import img9 from '../images/projects-img/pcards-img2.png'

export default function Portfolio() {
  const projects = [
    { title: "AF Star", image: img1, link: "https://afstar.co.in", description: "AF Star is a steel manufacturer delivering durable, high-quality steel products for industrial and construction sectors, emphasizing strength, reliability, and quality standards." },
    { title: "BizHighlighters", image: img2, link: "https://www.bizhighlighters.com", description: "BizHighlighters is a digital marketing agency offering SEO, social media, branding, and lead generation services, focused on creative strategies and business growth." },
    { title: "Ganpati Home Stay", image: img3, link: "#", description: "Ganpati Home Stay is a tourist-friendly hotel in Uttarakhand, India, offering comfortable stays, scenic views, local attractions, and easy booking for travelers." },
    { title: "KCC Project", image: img4, link: "https://kccgroup.co", description: "Khalatkar Construction Company (KCC) is an infrastructure firm delivering large-scale development projects, showcasing expertise, achievements, and ongoing construction work." },
    { title: "New Era", image: img5, link: "https://newerahospitalnagpur.com/", description: "New Era is a multi-specialty hospital in Nagpur offering advanced medical care, highlighting patient services, facilities, doctor profiles, and accessible information." },
    { title: "NovaSys", image: img6, link: "https://novasysgreen.com/", description: "NovaSys is a solar energy company delivering renewable solutions and solar installations, promoting sustainable, cost-effective clean energy for homes and businesses." },
    { title: "Raipur Hydraulics", image: img7, link: "https://raipurhydraulics.com/", description: "Raipur Hydraulics provides industrial hydraulic solutions and spare parts, highlighting a wide product range, technical expertise, and reliable supply of quality components." },
    { title: "Saoji Spices", image: img8, link: "https://saojispices.com/", description: "Saoji Spices is an e-commerce platform selling authentic, traditional spice blends, emphasizing quality, easy online ordering, and rich flavor experiences." },
    { title: "Pcards", image: img9, link: "https://pcards.org/", description: "Pcards is a mobile app providing customizable website templates and social media creatives for festivals and events, enabling quick, branded digital content creation." }
  ]


  return (
    <div>
      <section id="portfolio" className="py-5">
        <div className="container text-center">
          <h2 className="section-title">Projects</h2>
          <div className="row mt-4">
            {projects.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <div className="img-container">
                    <img
                      src={item.image} alt={item.title}
                      className="img-fluid rounded shadow"
                    />
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.description}</p>
                    <a href={item.link} target='_blank' class="btn visit_btn" rel="noreferrer noopener">Click to View</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
