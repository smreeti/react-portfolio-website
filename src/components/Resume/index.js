import './index.scss'
const Resume = () => {

    return (
        <>
            <div className="resume-scroll-container">
                <div className="resume-container">
                    <header>
                        <h1>SMRITI MOOL</h1>
                        <p>382-885-0755 | mool.smreeti@gmail.com</p>
                        <p>
                            LinkedIn: <a href="https://www.linkedin.com/in/smriti-mool/" target="_blank"
                                rel="noopener noreferrer">Smriti Mool</a> |
                            GitHub: <a href="https://github.com/smreeti" target="_blank" rel="noopener noreferrer">smreeti </a> |
                            Portfolio: <a href="https://smritimool.vercel.app/" target="_blank" rel="noopener noreferrer">smritimool.vercel.app</a>
                        </p>
                    </header>

                    <section className="brief-summary">
                        <h2>Brief Summary</h2>
                        <p>
                            Detail-oriented full-stack developer with 5+ years of experience designing, developing, and supporting scalable,
large-scale customer-facing products across procurement, fintech, and healthcare domains. Strong technical and
problem-solving skills with expertise in Java, Spring Boot, MySQL, ReactJS, and microservices architecture. Certified Scrum Master with
strong stakeholder collaboration, leadership, and communication skills in Agile environments.
                        </p>
                    </section>

                    <section className="technical-skills">
                        <h2>Technical Skills</h2>
                        <ul>
                            <li>Languages: Java, JavaScript, XSLT, HTML, CSS, Bootstrap </li>
                            <li>Frameworks: Spring Framework, Spring Boot, Maven, ReactJS, Node.js</li>
                            <li>Database: MySQL, Oracle (SQL), MongoDB (NoSQL)</li>
                            <li>Tools: Git, GitHub, GitLab, Jenkins, JIRA, SonarQube, AWS, JFrog</li>
                            <li>Methodologies: Scrum, Agile, Microservice</li>
                            <li>Others: TDD, RESTful APIs, Object-Oriented Programming, SDLC</li>
                        </ul>
                    </section>

                    <section className="work-experience">
                        <h2>Work Experience</h2>
                         <article>
                            <h3>Frontend Developer <span>Jan 2024 - Feb 2026</span></h3>
                            <p>Mdf Commerce Inc., Canada</p>
                            <p>Technology: Java 21, ReactJS, JavaScript, XSLT, XML, Oracle, AWS</p>
                            <ul>
                                 <li>Built and maintained full-stack applications using Java, JavaScript, XML, XSLT, and Oracle DB, writing optimized queries and JUnit tests to ensure code reliability and high performance.</li>
                                <li>Designed and implemented the Document Consolidation workflow, enabling multiple contracts to be merged for signature in a single workflow, reducing manual processing by ~30%.</li>
                                <li>Developed an automated package synchronization system ensuring seamless service-oriented integration and preserving client customizations across 20+ enterprise clients.</li>
                                <li>Performed daily monitoring and quality checks using tools such as Jenkins, SonarQube, AWS Inspector, and JFrog to ensure application health, security, and compliance with quality standards.</li>
                                <li>Participated in peer code reviews, pull request validation, and architectural discussions, applying design patterns and best practices to enhance application performance and maintain coding standards.</li>
                                <li>Utilized Version Control Systems, tracked development tasks in JIRA, and maintained technical documentation in Confluence to ensure code traceability, collaboration, and long-term maintainability.</li>
                                <li>Collaborate with backend developers, QA teams, product owners, and other stakeholders in an Agile Scrum environment to design, develop, and deliver software features.</li>
                          </ul>
                        </article>

                        <article>
                            <h3>F1Soft International Pvt. Ltd., Nepal <span>Jan 2024 - Feb 2026</span></h3>
                            <h3>Senior Software Developer (Feb 2021 - Jan 2022) </h3>
                            <p>Technology: Java 8, Spring Boot, ReactJS, Spring Boot, MySQL</p>
                            <ul>
                                <li>Led backend API development team in building ‘Foneloan’ app serving 100K+ users with 115K+ loans disbursed (2.45B+ amount), driving significant user growth and business impact.</li>
                                <li>Integrated third-party payment system (eSewa) using secure RESTful APIs, implementing OAuth2 and JWT token-based authentication for secure EMI loan processing and data exchange.</li>
                                <li>Collaborated with product owners and multiple cross-functional teams (FonePay, Bankconnect, Banksmart) to troubleshoot complex integration issues and articulate effective technical solutions aligned with business objectives.</li>
                                <li>Served as Scrum Master and mentor, facilitating Agile ceremonies, coaching junior developers, and improving team velocity by 20% while strengthening collaboration and knowledge sharing.</li>
                            </ul>
                        </article>

                        <article>
                            <h3>Software Developer, Cogent Health, subsidiary of F1Soft International (Apr 2019 - Feb 2021) </h3>
                            <p>Technology: Java, Spring Boot, Microservices, Test-driven development, Jenkins, MongoDB, ReactJS</p>
                           <ul>
                                <li>Contributed to microservices-based architecture for the 'cogentEMR' platform, reducing medical record processing time by 40% and improving data accuracy.</li>
                                <li>Improved backend performance through SQL query optimization and implementing service-layer caching mechanisms, reducing average API response time from ~5 seconds to ~3 seconds.</li>
                                <li>Collaborated with eSewa on 'eappointments' to build secure REST APIs and optimize hospital scheduling, reducing appointment wait times by 50% and elevating patient satisfaction.</li>
                            </ul>
                        </article>

                           <article>
                            <h3>Software Developer (Nov 2017 - Apr 2019) </h3>
                            <p>Technology: Java, Spring Boot, MySQL, Angular</p>
                          <ul>
                            <li>Developed and enhanced core features for the Nepal Krishi web application, implementing multi-day reservations, transfer, and rescheduling workflows that streamlined agricultural service operations, increased user engagement by 25%, and improved overall system functionality by 15%.</li>
                            <li>Cooperated closely with the marketing team to strategize and execute user acquisition campaigns, leading to a 40% increase in the user base over six months.</li>
                         </ul>
                        </article>

                        <article>
                            <h3>Intern <span>Aug 2017 - Nov 2017</span></h3>
                            <p>Nepal Telecom, Nepal</p>
                            <p>Technology: Networking fundamentals, TCP/IP, LAN/WAN, basic network troubleshooting, telecom systems</p>
                            <ul>
                                <li>
                                    Leveraged outstanding interpersonal and communication skills, engaging with customers across diverse channels, resulting in a 95% inquiry resolution rate and strengthened customer loyalty.
                                </li>
                                <li>
                                    Conducted thorough research, collecting, and analyzing data to support data-driven decision-making, contributing to more informed and strategic business choices.
                                </li>
                            </ul>
                        </article>
                    </section>

                    <section className="education">
                        <h2>Education</h2>
                        <article>
                            <h3>Web Development, Ontario College Graduate Certificate <span>May 2022 - Aug 2023</span></h3>
                            <p>Conestoga College, Waterloo, Canada</p>
                            <p>Grade: 95.62%</p>
                        </article>
                        <p></p>
                        <article>
                            <h3>Bachelor in Computer Engineering <span>Oct 2013 - Sept 2017 </span></h3>
                            <p>Himalaya College of Engineering, Kathmandu, Nepal </p>
                            <p>Grade: 75.03%</p>
                        </article>
                    </section>
                    <p></p>
                    <section className="projects">
                        <h2>Projects</h2>
                    <article>
                        <h3 style={{ display: 'inline' }}>
                            College Connect - 
                            <a href="https://college-connect-app.vercel.app/" target="_blank" rel="noreferrer"> college-connect-app</a>
                        </h3>
                        <p>
                            CollegeConnect revolutionizes campus communication, offering colleges a unified platform to share event details and track registered students effortlessly. For users, it transforms the college experience by consolidating information, enabling seamless interaction with friends, and fostering an engaging environment akin to popular social media platforms.
                        </p>
                        <ul>
                            <li>Developed a full-stack social platform for campus communication serving multiple colleges with event management and student tracking capabilities.</li>
                            <li>Implemented a secure authentication and authorization system with JWT, bcrypt password hashing, and role-based access control spanning student, admin, and faculty roles.</li>
                        </ul>
                        </article>
                    </section>

                    <section className="certifications">
                        <h2>Certifications</h2>
                        <p>Licensed Certified Scrum Master – Scrum Alliance</p>

                    </section>
                </div>
            </div>
        </>
    );
}

export default Resume;