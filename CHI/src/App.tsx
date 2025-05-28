import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './App.css';
import logo from '../logo.jpg';
import Seun from '../Seun Olufemi.jpg';
import Taofeeq from '../Taofeeq Ajibade.webp';
import Daniel from '../Daniel_Adediran.jpg';
import Bridget from '../Bridget Ogungbemi.jpeg';
import Elijah from '../Elijah Ayandeyi.jpg';
import Firdaws from '../Firdaws Alaga.jpg';
import Folorunso from '../Folorunso A. Toluwanimi.jpg';
import Grace from '../Grace Abiala.jpg';
import Chioma from '../Chioma Anyawu.jpg';
import cervicalCancer from '../cervical cancer.PNG';
import prostateCancer from '../prostate cancer.PNG';
import ProstateCancerProject2 from '../Prostate Cancer Project 2.PNG';
import BreastCancerProject3 from '../Breast cancer Project 3.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  // Team and volunteer data
  const cofounders = [
    { name: 'Seun Olufemi', role: 'Co-Founder', img: Seun },
    { name: 'Taofeeq Ajibade', role: 'Co-Founder', img: Taofeeq },
  ];
  const coreTeam = [
    { name: 'Daniel Adediran', role: 'Core Team', img: Daniel },
    { name: 'Bridget Ogungbemi', role: 'Core Team', img: Bridget },
    { name: 'Elijah Ayandeyi', role: 'Core Team', img: Elijah },
  ];
  const volunteers = [
    { name: 'Firdaws Alaga', img: Firdaws },
    { name: 'Folorunso A. Toluwanimi', img: Folorunso },
    { name: 'Grace Abiala', img: Grace },
    { name: 'Chioma Anyanwu', img: Chioma },
  ];

  // Placeholder data for sections
  const projects = [
    { title: 'Community Screening', desc: 'Free cancer screening in rural areas.' },
    { title: 'Awareness Campaign', desc: 'Workshops and seminars on cancer prevention.' },
    { title: 'Patient Support', desc: 'Providing support and resources to patients.' },
  ];
  return (
    <Router>
      <div className="container">
        <header className="header">
          <div className="header-top">
            <div className="social-links">
              <a href="https://www.linkedin.com/company/cancer-health-initiative/" target="_blank" rel="noopener noreferrer"><img src="/linkedin.svg" alt="LinkedIn" /></a>
              <a href="https://x.com/CancerHealthIni/" target="_blank" rel="noopener noreferrer"><img src="/twitter.svg" alt="Twitter" /></a>
              <a href="https://www.instagram.com/cancerhealthinitiative_?igsh=MXBtZDRsOGdwN2Y5Yg==" target="_blank" rel="noopener noreferrer"><img src="/instagram.svg" alt="Instagram" /></a>
            </div>
          </div>
          <div className="header-main">
            <img src={logo} alt="CHI Logo" className="logo-img" />
            <h1>Cancer Health Initiative</h1>
          </div>
          <nav>
            <Link to="/">About Us</Link>
            <Link to="/how-we-work">How We Work</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/team">Team</Link>
            <Link to="/volunteers">Volunteers</Link>
            <Link to="/report">Annual Report</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <main className="main-content main-content-fade">
          <Routes>
            <Route path="/" element={
              <section id="about" className="about-section">
                <div className="about-mission-vision-boxes">
                  <div className="about-mission-box">
                    <h3>Mission</h3>
                    <p>To bridge the gap between cancer health and information by delivering accessible education, advocacy, and support to the communities that need it the most.</p>
                    <ul>
                      <li>Providing accurate and culturally relevant cancer education to empower informed decisions.</li>
                      <li>Advocating for early detection, prevention, and access to care in underserved populations.</li>
                      <li>Building a network of cancer health advocates to drive awareness and community-focused interventions.</li>
                      <li>Partnering with researchers, healthcare providers, and policymakers to foster innovation and equity in cancer care.</li>
                    </ul>
                  </div>
                  <div className="about-vision-box">
                    <h3>Vision</h3>
                    <p>To ensure equitable access to cancer health access, information, and care for all, particularly underserved communities, empowering them to prevent, detect, and overcome cancer effectively.</p>
                  </div>
                </div>
                <div className="about-description-box">
                  <h2>About Us</h2>
                  <p className="about-description">The Cancer Health Initiative (CHI) is a non-profit organization committed to fighting cancer through innovative programs, research, and advocacy.</p>
                </div>
                <div className="what-we-do-boxes">
                  <div className="what-we-do-box">
                    <h3>What We Do</h3>
                    <ul>
                      <li>Community-driven cancer education and advocacy in schools, workplaces, and communities.</li>
                      <li>Empowering individuals with knowledge to make informed health decisions.</li>
                      <li>Collaborating with partners to amplify cancer awareness and prevention.</li>
                      <li>Supporting underserved populations with culturally relevant information and resources.</li>
                      <li>Building a network of advocates and volunteers for sustainable impact.</li>
                    </ul>
                  </div>
                </div>
                <div className="gallery-motion-section">
                  <h3>Gallery</h3>
                  <div className="gallery-motion gallery-motion-infinite">
                    <div className="gallery-track gallery-track-infinite">
                      <img src="/gallery%201.jpg" alt="Gallery 1" />
                      <img src="/gallery%202.jpeg" alt="Gallery 2" />
                      <img src="/gallery_3.jpg" alt="Gallery 3" />
                      <img src="/gallery%204.jpeg" alt="Gallery 4" />
                      <img src="/Breast%20cancer%20Project%203.jpg" alt="Breast Cancer Awareness" />
                      {/* Repeat images for infinite effect */}
                      <img src="/gallery%201.jpg" alt="Gallery 1" />
                      <img src="/gallery%202.jpeg" alt="Gallery 2" />
                      <img src="/gallery_3.jpg" alt="Gallery 3" />
                      <img src="/gallery%204.jpeg" alt="Gallery 4" />
                      <img src="/Breast%20cancer%20Project%203.jpg" alt="Breast Cancer Awareness" />
                    </div>
                  </div>
                  <div className="video-section">
                    <h3>Cervical Cancer Awareness Program</h3>
                    <video controls className="about-video">
                      <source src="/Video 1.MOV" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </section>
            } />
            <Route path="/how-we-work" element={
              <section id="howwework" className="how-we-work-section">
                <h2>How We Work</h2>
                <div className="how-we-work-boxes">
                  <div className="how-box how-box-icon">
                    <span className="how-icon">🤝</span>
                    <h4>Community Engagement</h4>
                    <p>We partner with local leaders, schools, and organizations to deliver tailored cancer education and awareness programs, ensuring our interventions are culturally relevant and impactful.</p>
                  </div>
                  <div className="how-box how-box-icon">
                    <span className="how-icon">🩺</span>
                    <h4>Screening & Early Detection</h4>
                    <p>We organize free and subsidized screening events for cervical, breast, and prostate cancer, focusing on underserved communities and providing follow-up support for those at risk.</p>
                  </div>
                  <div className="how-box how-box-icon">
                    <span className="how-icon">🧭</span>
                    <h4>Patient Navigation</h4>
                    <p>Our team supports patients through diagnosis, treatment, and survivorship, connecting them to resources, care, and psychosocial support.</p>
                  </div>
                  <div className="how-box how-box-icon">
                    <span className="how-icon">📢</span>
                    <h4>Advocacy & Policy</h4>
                    <p>We advocate for equitable cancer policies, collaborating with government and stakeholders to improve access to care and drive systemic change.</p>
                  </div>
                  <div className="how-box how-box-icon">
                    <span className="how-icon">📊</span>
                    <h4>Research & Data</h4>
                    <p>We collect and analyze data to inform interventions, drive evidence-based advocacy, and publish findings to advance cancer control in Nigeria.</p>
                  </div>
                  <div className="how-box how-box-icon">
                    <span className="how-icon">🎓</span>
                    <h4>Capacity Building</h4>
                    <p>We train health workers and volunteers to become cancer advocates and educators, building a sustainable network for long-term impact.</p>
                  </div>
                  <div className="how-box how-box-icon">
                    <span className="how-icon">🌍</span>
                    <h4>Partnerships</h4>
                    <p>We work with national and international partners to scale our impact, foster innovation, and ensure sustainability in cancer care delivery.</p>
                  </div>
                </div>
              </section>
            } />
            <Route path="/projects" element={
              <section id="projects">
                <h2>Projects</h2>
                <div className="projects-2x2-grid">
                  <div className="project-square">
                    <img src="/cervical_cancer%20Project%201.jpg" alt="Cervical Cancer Awareness Program" className="project-img" />
                    <h3>Cervical Cancer Awareness Program (Nurudeen Grammar School, Ogbomoso)</h3>
                    <p>We delivered cervical cancer education and advocacy to over 1,000 students at Nurudeen Grammar School, Ogbomoso. The program focused on awareness, prevention, and empowering young women with knowledge to make informed health decisions.</p>
                  </div>
                  <div className="project-square">
                    <img src="/Prostate%20Cancer%20Project%202.PNG" alt="Prostate Cancer Awareness" className="project-img" />
                    <h3>Prostate Cancer Awareness Program (Sawmill Industries)</h3>
                    <p>Our team provided prostate cancer education and advocacy at Sawmill Industries, engaging male workers in discussions about risk factors, prevention, and the importance of early awareness for men’s health.</p>
                  </div>
                  <div className="project-square">
                    <img src="/Breast%20cancer%20Project%203.jpg" alt="Breast Cancer Awareness" className="project-img" />
                    <h3>Breast Cancer Awareness Program (Ogbomoso Sabo Communities)</h3>
                    <p>This project reached women in the Sabo communities of Ogbomoso, focusing on breast self-examination, risk factors, and the importance of early detection. The program included demonstrations, testimonials, and distribution of breast health resources.</p>
                  </div>
                  <div className="project-square">
                    <img src="/Cervical%20Cener%20Project%204.jpg" alt="Cervical Cancer Awareness Schools" className="project-img" />
                    <h3>Cervical Cancer Awareness (Nurudeen Grammar School 1 & 2, Soun High School, Aduke Grammar School)</h3>
                    <p>We expanded our cervical cancer education and advocacy to multiple schools, including Nurudeen Grammar School 1 & 2, Soun High School, and Aduke Grammar School, impacting over 1,000 students and teachers across Ogbomoso.</p>
                  </div>
                </div>
              </section>
            } />
            <Route path="/team" element={
              <section id="team">
                <h2>Our Team</h2>
                <div className="team-group">
                  <h3>Co-Founders</h3>
                  <div className="team-list-mature team-list-big">
                    {cofounders.map((member, idx) => (
                      <div className="team-card-mature team-card-big" key={idx}>
                        <img src={member.img} alt={member.name} />
                        <div className="team-info">
                          <h4>{member.name}</h4>
                          <p>{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h3>Core Team</h3>
                  <div className="team-list-mature team-list-big">
                    <div className="team-card-mature team-card-big">
                      <img src={Daniel} alt="Daniel Adediran" />
                      <div className="team-info">
                        <h4>Daniel Adediran</h4>
                        <p>Research Lead</p>
                      </div>
                    </div>
                    <div className="team-card-mature team-card-big">
                      <img src={Bridget} alt="Bridget Ogungbemi" />
                      <div className="team-info">
                        <h4>Bridget Ogungbemi</h4>
                        <p>Communications Lead</p>
                      </div>
                    </div>
                    <div className="team-card-mature team-card-big">
                      <img src={Elijah} alt="Elijah Ayandeyi" />
                      <div className="team-info">
                        <h4>Elijah Ayandeyi</h4>
                        <p>Advocacy Lead</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            } />
            <Route path="/volunteers" element={
              <section id="volunteers">
                <h2>Volunteers</h2>
                <div className="team-list-mature team-list-big">
                  <div className="team-card-mature team-card-big">
                    <img src={Firdaws} alt="Firdaws Alaga" />
                    <div className="team-info">
                      <h4>Firdaws Alaga</h4>
                      <p>Content Writer</p>
                    </div>
                  </div>
                  <div className="team-card-mature team-card-big">
                    <img src={Folorunso} alt="Folorunso A. Toluwanimi" />
                    <div className="team-info">
                      <h4>Folorunso A. Toluwanimi</h4>
                      <p>Social Media Manager</p>
                    </div>
                  </div>
                  <div className="team-card-mature team-card-big">
                    <img src={Grace} alt="Grace Abiala" />
                    <div className="team-info">
                      <h4>Grace Abiala</h4>
                      <p>Graphic Designer</p>
                    </div>
                  </div>
                  <div className="team-card-mature team-card-big">
                    <img src={Chioma} alt="Chioma Anyanwu" />
                    <div className="team-info">
                      <h4>Chioma Anyanwu</h4>
                      <p>Community Engagement</p>
                    </div>
                  </div>
                </div>
              </section>
            } />
            <Route path="/report" element={
              <section className="hero-pdf" id="report">
                <h3>2024 Annual Report</h3>
                <div style={{ height: '400px', border: '1px solid #eee' }}>
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer fileUrl="/2024-Cancer-Health-Initiative-Annual-Report.pdf" />
                  </Worker>
                </div>
                <a href="/2024-Cancer-Health-Initiative-Annual-Report.pdf" download target="_blank" rel="noopener noreferrer">Download Full Report</a>
              </section>
            } />
            <Route path="/contact" element={
              <section id="contact" className="contact-section-mature">
                <h2>Contact Us</h2>
                <div className="contact-details">
                  <div className="contact-info-box">
                    <h4>Email</h4>
                    <a href="mailto:cancerhealthinitiative@gmail.com">cancerhealthinitiative@gmail.com</a>
                  </div>
                  <div className="contact-info-box">
                    <h4>Phone</h4>
                    <a href="tel:08106137662">08106137662</a>
                  </div>
                  <div className="contact-info-box">
                    <h4>Address</h4>
                    <p>Ogbomoso, Oyo State, Nigeria</p>
                  </div>
                </div>
                <form className="contact-form-mature">
                  <div className="form-row">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <textarea placeholder="Your Message" required></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </section>
            } />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/cancer-health-initiative/" target="_blank" rel="noopener noreferrer"><img src="/linkedin.svg" alt="LinkedIn" /></a>
            <a href="https://x.com/CancerHealthIni/" target="_blank" rel="noopener noreferrer"><img src="/twitter.svg" alt="Twitter" /></a>
            <a href="https://www.instagram.com/cancerhealthinitiative_?igsh=MXBtZDRsOGdwN2Y5Yg==" target="_blank" rel="noopener noreferrer"><img src="/instagram.svg" alt="Instagram" /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} Cancer Health Initiative. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
