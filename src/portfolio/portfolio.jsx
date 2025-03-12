import React, { useState } from 'react';
import styles from './portfolio.module.css';

const NAVIGATION_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

const Header = () => {
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(NAVIGATION_ITEMS[0].href);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h4 className={styles.dev}>
          <span style={{ color: "black" }}>&lt;&gt;</span>
          Developer
          <span style={{ color: "black" }}>&lt;/&gt;</span>
        </h4>

        <nav className={`${styles.nav} ${opened ? styles.opened : ''}`}>
          <ul className={styles.navList}>
            {NAVIGATION_ITEMS.map(({ href, label }) => (
              <li key={label}>
                <a 
                  href={href} 
                  className={`${styles.navLink} ${active === href ? styles.active : ''}`}
                  onClick={(e) => {
                    setActive(href);
                    setOpened(false);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className={styles.burger} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={opened ? styles.opened : ''}></span>
          <span className={opened ? styles.opened : ''}></span>
          <span className={opened ? styles.opened : ''}></span>
        </button>
      </div>
    </header>
  );
};

const SKILLS = {
  technical: ['JavaScript', 'React', 'Python', 'Java', 'HTML/CSS', 'Git'],
  soft: ['Problem Solving', 'Team Leadership', 'Communication', 'Project Management']
};

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Header />
      {/* Hero Section */}
      <header className={styles.hero} id="home">
        <div className={styles.heroContent}>
          <div className={styles.animate}>
            <img src="softwareanimate.png" alt="Image" />
          </div>
          <h1 className={styles.name}>Adarsh J</h1>
          <p className={styles.title}>Software Engineer</p>
          <p className={styles.tagline}>
            Connecting ideas for better solutions
          </p>
          <div className={styles.coder}>
            <img src="coder.png" alt="Coder" style={{ width: "502px", height: "498px", marginTop: "-182px", marginRight: "-1012px" }} />
          </div>
        </div>
      </header>

      {/* About Section */}
      
      <section id="about" className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.aboutContent}>
          <img src="adarshpicportfolio.png" alt="Pic" />
          <div className={styles.aboutText}>
            <p>
            As a software engineer with a strong academic background in computer science, I am passionate about leveraging technology to solve real-world problems. My experience spans both technical development and creative problem-solving, enabling me to build robust, user-friendly applications tailored to customer needs. I thrive on designing and refining systems—whether backend, frontend, or improving existing solutions—while maintaining high standards of quality. Committed to continuous learning, I actively explore cutting-edge technologies to develop impactful tools that make a difference.
            </p>
            <a href="https://drive.google.com/file/d/1H982bGU9kl6BQsLZb5uz3GJ5YMGhWuOU/view?usp=drivesdk" target="_blank">
            <button className={styles.resume}>Resume</button></a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.educationCard}>
          <h3 className={styles.degree}>Application developer</h3>
          <p className={styles.university}>International Center for Free and Open Source Software(ICFOSS)</p>
          <p className={styles.cgpa}>Internship</p>
          <p className={styles.year}>2024 - Ongoing</p>
          <div className={styles.achievements}>
            <h4>Key Achievements:</h4>
            <ul>
              <li>Engineered responsive web applications using React.js, improving user engagement metrics by 40%</li>
              <li>Implemented modern frontend architecture practices, reducing page load times by 30%</li>
              <li>Led collaborative development efforts in an Agile environment, coordinating with 5+ team members</li>
              <li>Conducted code reviews and implemented best practices for maintainable, scalable code</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.educationCard}>
          <h3 className={styles.degree}>Bachelor of Technology</h3>
          <p className={styles.university}>APJ Abdul Kalam Technological University</p>
          <p className={styles.cgpa}>CGPA: 9.13</p>
          <p className={styles.year}>2020 - 2024</p>
          <div className={styles.achievements}>
            <h4>Key Achievements:</h4>
            <ul>
              <li>Maintained exceptional academic performance throughout the program</li>
              <li>Participated in technical competitions and hackathons</li>
              <li>Led student technical projects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsContainer}>
          <div className={styles.skillCategory}>
            <h3>Technical Skills</h3>
            <div className={styles.skillGrid}>
              {SKILLS.technical.map((skill) => (
                <div key={skill} className={styles.skillItem}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3>Soft Skills</h3>
            <div className={styles.skillGrid}>
              {SKILLS.soft.map((skill) => (
                <div key={skill} className={styles.skillItem}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <h3 style={{color:"orange"}}>Malayalam Plagiarism Detection System</h3>
            <ul className={styles.projectlist}>
              <li>Designed and developed a full-stack plagiarism detection system using React.js and RESTful APIs.</li>
              <li>Built a secure JWT-based authentication system, supporting over 1,000 concurrent users.</li>
              <li>Ensured 90% device accessibility through responsive design principles.</li>
            </ul>
            <p>GitLab: <a href=""></a></p>
            <div className={styles.projectTech}>
              <span>React</span>
              <span>Node.js</span>
              <span>Axios</span>
              <span>JWT Authentication</span>
              <span>Material UI</span>
              <span>Django</span>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3 style={{color:"blue"}}>DMS Conference</h3>
            <ul className={styles.projectlist}>
              <li>Contributed to the development of the DMS website for ICFOSS, a platform designed for uploading and managing conference papers.</li>
              <li>Ensured a user-friendly and efficient interface for researchers and conference organizers.</li>
            </ul>
            <p>GitLab: <a href=""></a></p>
            <div className={styles.projectTech}>
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>Bootstrap</span>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3 style={{color:"#8b008b"}}>HELLOGRAM</h3>
            <ul className={styles.projectlist}>
              <li>Developed a mobile social media application connecting users using Flutter and Node.js.</li>
              <li>Implemented advanced features such as emotion-driven posts, photo-based search, and encrypted messaging.</li>
              <li>Responsible for login and authentication development and automatic message generation for chats.</li>
            </ul>
            <p>GitHub: <a className={styles.repolink} href="https://github.com/adarsh4j/HELLOGRAM-APP">🔗</a></p>
            <div className={styles.projectTech}>
              <span>Flutter</span>
              <span>Node Js</span>
              <span>MYSQL</span>
              <span>API</span>
              <span>Material UI</span>
              <span>Django</span>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3 style={{color:"#ff1493"}}>CEC CONNECT</h3>
            <ul className={styles.projectlist}>
              <li>Developed a Flutter application for student-teacher interaction as well as student-student interaction.</li>
              <li>Implemented modules for User Registration, Authentication, Skill and Department Search, SGPA Calculator, and Chatbot.</li>
            </ul>
            <p>GitHub: <a className={styles.repolink} href="https://github.com/adarsh4j/CEC_CONNECT">🔗</a></p>
            <div className={styles.projectTech}>
              <span>Flutter</span>
              <span>Firebase</span>
              <span>Firebase Firestore</span>
              <span>Firebase Authentication</span>
              <span>NOSQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <div className={styles.contactContainer}>
          <p>Let's connect and discuss potential opportunities!</p>
          <div className={styles.contactLinks}>
            <a href="mailto:adarshjn444@gmail.com" className={styles.contactLink}>
              Email
            </a>
            <a href="https://www.linkedin.com/in/adarsh-j-514426322/" className={styles.contactLink}>
              LinkedIn
            </a>
            <a href="https://github.com/adarsh4j" className={styles.contactLink}>
              GitHub
            </a>
            <a href="https://github.com/yourusername" className={styles.contactLink}>
              GitLab
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;