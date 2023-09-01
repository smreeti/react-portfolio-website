import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>Greetings, <br />
            I'm Smriti Mool, a passionate full-stack developer with over 4.5 years of hands-on experience.
            My journey began with a Bachelor's degree in Computer Engineering, and I've recently added a Web
            Development Graduate Certificate from Conestoga College, located in the vibrant city of Waterloo, Canada.

            <br /><br />
            I'm known for my versatile approach to problem-solving, driven by a deep curiosity to explore various
            programming languages and craft innovative solutions. My technical proficiency spans from back-end
            technologies like JAVA and NodeJS to front-end mastery in Angular and ReactJS. This skill set has honed
            my critical thinking abilities and enabled me to navigate complex challenges.

            Beyond my technical expertise, I pride myself on effective communication and thrive in collaborative
            environments. My experience as a Certified Scrum Master and developer uniquely positions me to excel
            under pressure, facilitate team success, and drive projects to completion.

            I'm excited about the opportunity to contribute my skills and dedication to your dynamic
            team or project. Feel free to explore my portfolio to see how my passion for coding and problem-solving
            translates into real-world solutions.
            <br /><br />
            Thank you for visiting, and I look forward to connecting with you.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
