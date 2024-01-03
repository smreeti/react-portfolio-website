import './index.scss'
const Resume = () => {

    return (
        <>
            <div className="resume-scroll-container">
                <div className="resume-container">
                    <header>
                        <h1>SMRITI MOOL</h1>
                        <p>647-915-1025 | mool.smreeti@gmail.com</p>
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
                            Experienced software developer with a robust four-year track record in Java, Spring, JavaScript, MERN, and SQL, delivering innovation and efficiency in web application development. Holding the Certified Scrum Master credential, I've consistently improved user experiences and streamlined development processes. Now actively seeking an opportunity in a dynamic and collaborative environment to expand my expertise further and drive impactful solutions.
                        </p>
                    </section>

                    <section className="technical-skills">
                        <h2>Technical Skills</h2>
                        <ul>
                            <li>Languages: Java, JavaScript, jQuery, HTML, CSS, Bootstrap, TypeScript</li>
                            <li>Frameworks: Spring Framework, Spring Boot, Maven, Angular, React, Node</li>
                            <li>Database Design: Relational Database Management System, MySQL, MongoDB</li>
                            <li>Tools: Git, GitHub, GitLab, JIRA, Build tools (npm, Webpack)</li>
                            <li>Methodologies: Scrum, Agile, Microservice</li>
                            <li>Others: TDD, RESTful APIs, GraphQL, Object-Oriented Programming</li>
                        </ul>
                    </section>

                    <section className="work-experience">
                        <h2>Work Experience</h2>
                        <article>
                            <h3>Senior Software Developer <span>Feb 2021 - Jan 2022</span></h3>
                            <p>F1Soft International Pvt. Ltd., Nepal</p>
                            <p>Technology: Java, Spring, React, Spring Boot, MySQL</p>
                            <ul>
                                <li>  Developed the 'Foneloan' app, enabling 100K+ users and 115K+ loans disbursed (2.45B+ amount), revolutionizing acquisition with a user-friendly interface for heightened accessibility and economic growth.
                                </li>
                                <li>
                                    Executed a user-centric approach by enhancing the high-volume API applications, resulting in a 30% increase in user engagement and a 25% decrease in bounce rates.</li>
                                <li>Implemented robust security measures and conducted rigorous testing protocols, resulting in an 80% reduction in security incidents and ensuring the safety of user data and financial transactions.</li>
                                <li>Resolved technical issues per client specifications and maintained documentation of user requirements by actively collaborating with stakeholders and cross-functional project teams, resulting in successfully resolving challenges and improved product quality.</li>
                            </ul>
                        </article>

                        <article>
                            <h3>Software Developer<span>Apr 2019 - Feb 2021</span></h3>
                            <p>Cogent Health Pvt Ltd., Nepal</p>
                            <p>Technology: Java, ReactJS, Microservices, TDD, Jenkins, MongoDB, HTML, CSS</p>
                            <ul>
                                <li>
                                    Collaborated with eSewa on 'eappointments,' optimizing hospital scheduling, reducing appointment wait times by 50%, and elevating patient satisfaction
                                </li>
                                <li>
                                    Led Scrum processes as Scrum Master and performed code reviews, driving a 20% increase in product delivery, fostering cross-functional collaboration, and contributing to enhanced customer satisfaction and revenue growth.
                                </li>
                                <li>
                                    Played an integral role in 'cogentEMR' app development, achieving a 40% reduction in medical record processing time and significantly improving data accuracy
                                </li>
                            </ul>
                        </article>

                        <article>
                            <h3>Software Developer<span>Nov 2017 - Apr 2019 </span></h3>
                            <p>F1Soft International Pvt. Ltd., Nepal</p>
                            <p>Technology: Java, Spring, Spring Boot, MySQL, Angular</p>
                            <ul>
                                <li>
                                    Spearheaded the development and implementation of innovative features for the Nepal Krishi Company web application, resulting in a remarkable 25% increase in user engagement and a 15% boost in overall functionality.
                                </li>
                                <li>
                                    Cooperated closely with the marketing team to strategize and execute user acquisition campaigns, leading to a 40% increase in the user base over six months.
                                </li>
                            </ul>
                        </article>

                        <article>
                            <h3>Intern <span>Aug 2017 - Nov 2017</span></h3>
                            <p>Nepal Telecom, Nepal</p>
                            <p>Technology: Java, Spring, Spring Boot, MySQL, Angular</p>
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

                    <section className="work-experience">
                        <h2>Other Work Experience</h2>
                        <article>
                            <h3>Crew Trainer <span>May 2022 - Present</span></h3>
                            <p>McDonald’s, Waterloo, Canada</p>
                            <p>Technology: Java, Spring, React, Spring Boot, MySQL</p>
                            <ul>
                                <li>
                                    Conduct comprehensive training sessions for new crew members, ensuring smooth onboarding and equipping them with essential skills.
                                </li>
                                <li>
                                    Showcased strong leadership, teamwork, and communication, improving training effectiveness for a 25% boost in trainee comprehension and application.
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
                            <h3>Bachelor in Computer Engineering <span>Oct 2013 - Sept 2017  </span></h3>
                            <p>Himalaya College of Engineering, Kathmandu, Nepal </p>
                            <p>Grade: 75.03%</p>
                        </article>
                    </section>
                    <p></p>
                    <section className="projects">
                        <h2>Projects</h2>
                        <article>
                            <h3>College Connect
                                <a href="https://collegeconnect.cyclic.app/" target="_blank">collegeconnect.cyclic.app</a></h3>
                            <p>
                                CollegeConnect revolutionizes campus communication, offering colleges a unified platform to share event details and track registered students effortlessly. For users, it transforms the college experience by consolidating information, enabling seamless interaction with friends, and fostering an engaging environment akin to popular social media platforms.
                            </p>
                            <p>Technology: MongoDB, Node.js, JavaScript, React.js</p>

                            <ul>
                                <li>
                                    Streamlined user registration and personalized profiles for seamless onboarding.
                                </li>
                                <li>
                                    Engineered an intuitive admin system for efficient content management.
                                </li>
                                <li>
                                    Encouraged interactive engagement through user-friendly features like photo uploads and algorithmic content sorting.
                                </li>
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