import React from 'react';
import '../styles/Projects.css';


const projectList = [
  {
    title: "Ecommerce Application",
    description: "Full-featured eCommerce site with Django backend and PayPal integration. User login, cart, checkout, and admin dashboard implemented.",
    technologies: ["Django", "MySQL", "PayPal", "JWT"],
    github: "https://github.com/MamathaMurthyVanga/django_ecommerce",
    demo: "https://djangoecommerce-production-607a.up.railway.app/",
    // image: EcommerceImage
  },
  {
    title: "LinkedIn Post Generator",
    description: "AI-based LinkedIn post generator using Llama3 model and Streamlit for creating professional posts with a click.",
    technologies: ["Python", "Streamlit", "Llama3"],
    github: "https://github.com/MamathaMurthyVanga/linkedin_post_generator",
    demo: "https://linkedin-posts-generator.streamlit.app/",
    // image: LinkedInPostImage
  },
  {
    title: "Web Research Agent",
    description: "Built an autonomous web research agent that searches the web, scrapes pages, and summarizes information using LLaMA-3 models.",
    technologies: ["LangChain", "Groq", "DuckDuckGo", "Beautifulsoup", "Python"],
    github: "https://github.com/MamathaMurthyVanga/web-research-agent",
    demo: "https://web-agent-demo.streamlit.app/",
    // image: WebAgentImage
  },
  {
    title: "Gramadevata",
    description: "Built an autonomous web research agent that searches the web, scrapes pages, and summarizes information using LLaMA-3 models.",
    technologies: ["Django", "MySQL workbench", "JWT"],
    // github: "https://github.com/MamathaMurthyVanga/web-research-agent",
    demo: "https://gramadevata.com/",
    // image: WebAgentImage
  },
  {
    title: "The Hindus World",
    description: "Built an autonomous web research agent that searches the web, scrapes pages, and summarizes information using LLaMA-3 models.",
    technologies: ["Django", "MySQL workbench", "JWT"],
    // github: "https://github.com/MamathaMurthyVanga/web-research-agent",
    demo: "https://thehindusworld.com/",
    // image: WebAgentImage
  },
  {
    title: "Om Sanatana",
    description: "Built an autonomous web research agent that searches the web, scrapes pages, and summarizes information using LLaMA-3 models.",
    technologies: ["Django", "MySQL workbench", "JWT"],
    // github: "https://github.com/MamathaMurthyVanga/web-research-agent",
    demo: "https://omsanatana.com/",
    // image: WebAgentImage
  }

];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project" key={index}>
            {/* <img src={project.image} alt={project.title} className="project-image" /> */}
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech">{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
