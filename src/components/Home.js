import React from 'react';
import '../styles/Home.css';  // Updated path
import ProfileImage from '../assets/murthy.png';
import PythonLogo from '../assets/python.jpeg';
import DjangoLogo from '../assets/django.jpeg';
import MySQLLogo from '../assets/mysql.png';
import Gitlogo from '../assets/git.png';
import HTMLLogo from '../assets/htmlcss.png';
import Docker from '../assets/docker.png';
import Redis from '../assets/redis.jpeg';
import ReactLogo from '../assets/react.png';
import LangChainLogo from '../assets/langchain.jpeg';



const Home = () => {
  return (
    <section id="home" className="home">
      <h1>Welcome to My Portfolio</h1>

      {/* Card Section */}
      <div className="card">
        <div className="card-left">
          <p>
            Hi, I'm Mamatha Vanga, a passionate Backend Developer with 2 years of experience building scalable web applications using Django, Django REST Framework, and MySQL.
          </p>
          <p>
            I specialize in creating robust RESTful APIs, secure authentication systems with JWT, and high-performance backend solutions optimized with Redis caching.
          </p>
          <p>
            I have hands-on experience integrating third-party services like PayPal and deploying applications to platforms like PythonAnywhere.
          </p>
          <p>Beyond backend development, I'm enthusiastic about AI integration, having built projects using LangChain, LLM models, and Streamlit.</p>
          <p>I believe in writing clean, maintainable code and continuously learning to deliver impactful, real-world solutions through technology.</p>
        </div>
        <div className="card-right">
          <div className="img-container">
            <img src={ProfileImage} alt="Murthy" className="profile-img" />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills">
        <h2>My Skills</h2>
        <div className="skills-list">
          <div className="skill">
            <img src={PythonLogo} alt="Python" className="skill-img" />
            <p>Python</p>
          </div>
          <div className="skill">
            <img src={DjangoLogo} alt="Django" className="skill-img" />
            <p>Django</p>
          </div>
          <div className="skill">
            <img src={MySQLLogo} alt="MySQL" className="skill-img" />
            <p>MySQL</p>
          </div>
          <div className="skill">
            <img src={Gitlogo} alt="Git" className="skill-img" />
            <p>Git</p>
          </div>
          <div className="skill">
            <img src={HTMLLogo} alt="HTML" className="skill-img" />
            <p>HTML</p>
          </div>
          <div className="skill">
            <img src={Docker} alt="Docker" className="skill-img" />
            <p>Docker</p>
          </div>
          <div className="skill">
            <img src={Redis} alt="Redis" className="skill-img" />
            <p>Redis</p>
          </div>
          <div className="skill">
            <img src={ReactLogo} alt="React" className="skill-img" />
            <p>React</p>
          </div>
          <div className="skill">
            <img src={LangChainLogo} alt="LangChain" className="skill-img" />
            <p>LangChain</p>
          </div>
        </div>
      </div>

 

    </section>
  );
};

export default Home;
