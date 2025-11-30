import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Download, Menu, X, Code, Palette, Search, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Formspree integration - replace with your form ID
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "B2B Lead Generation Landing Page",
      description: "Professional lead generation page with form validation, email integration, and conversion-focused design. Built with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Formspree", "Responsive Design"],
      liveLink: "https://b2b-leadgen-landing.vercel.app",
      githubLink: "https://github.com/rohinisakure25/b2b-leadgen-landing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "Chrono-Mug Landing Page - Interactive Theme Showcase",
      description: "Interactive landing page showcasing 5 professional color themes with live preview and theme switcher. Features smooth animations, modal interactions, and responsive design for a premium coffee mug product.",
      tags: ["React", "Tailwind CSS", "Interactive UI", "Theme System", "Animations"],
      liveLink: "https://chrono-mug-themes.vercel.app",
      githubLink: "https://github.com/rohinisakure25/chrono-mug-landing",
      image: "https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?w=600&h=400&fit=crop"
    }
  ];

  const skills = [
    { category: "Design & Development", items: ["HTML & CSS", "React (beginner)", "Tailwind CSS", "Responsive Design", "UI/UX Basics"] },
    { category: "Tools & Platforms", items: ["Framer AI", "Wix AI", "Webflow", "Canva", "ChatGPT"] },
    { category: "Deployment & Version Control", items: ["Vercel", "GitHub Pages", "Netlify", "GitHub"] },
    { category: "SEO & Content", items: ["On-page SEO", "Keyword Research", "SEO Content Writing"] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">Rohini Sakure</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">Contact Me</button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 pb-4">
              <button onClick={() => scrollToSection('about')} className="block text-gray-600 hover:text-blue-600 transition">About</button>
              <button onClick={() => scrollToSection('projects')} className="block text-gray-600 hover:text-blue-600 transition">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="block text-gray-600 hover:text-blue-600 transition">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">Contact Me</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Available for Freelance Projects
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm <span className="text-blue-600">Rohini Sakure</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
                Web Developer & Landing Page Specialist
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                I create high-converting landing pages and modern websites that help businesses grow. Specializing in responsive design, SEO optimization, and user-friendly interfaces.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button onClick={() => scrollToSection('projects')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition transform hover:scale-105 flex items-center gap-2">
                  View My Work <ArrowRight className="w-5 h-5" />
                </button>
                <button onClick={() => scrollToSection('contact')} className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg transition">
                  Get In Touch
                </button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                <a href="mailto:sakurerohini5@gmail.com" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-lg transition" title="Email">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+919579835440" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-lg transition" title="Phone">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/rohini-sakure-09453930b" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-lg transition" title="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/rohinisakure25" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-lg transition" title="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img src="photo.jpg" alt="Rohini Sakure" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="font-bold">Let's Build!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a passionate web developer specializing in creating impactful landing pages and modern websites. With a focus on clean design, responsive layouts, and conversion optimization, I help businesses establish a strong online presence.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              My expertise spans from AI-powered design tools to manual customization with code. I combine technical skills with creativity to deliver websites that not only look great but also drive results. Whether you need a high-converting landing page, SEO optimization, or a complete website redesign, I'm here to help bring your vision to life.
            </p>

            {/* What I Offer */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                { icon: Palette, title: "Landing Page Design", desc: "Custom, conversion-focused landing pages with AI tools and manual coding" },
                { icon: Code, title: "Web Development", desc: "Responsive websites built with React, HTML/CSS, and modern frameworks" },
                { icon: Search, title: "SEO Optimization", desc: "On-page SEO setup, keyword research, and SEO-friendly content writing" },
                { icon: Rocket, title: "Deployment & Support", desc: "Professional deployment on Vercel, Netlify, or GitHub Pages with ongoing support" }
              ].map((service, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Featured Projects</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Recent work showcasing my skills and expertise</p>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-semibold">
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">More projects coming soon! Currently working on exciting new designs.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">Let's Work Together</h2>
            <p className="text-center text-blue-100 mb-12 text-lg">Have a project in mind? Let's create something amazing together!</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <a href="mailto:sakurerohini5@gmail.com" className="flex items-center gap-3 hover:text-blue-200 transition">
                      <Mail className="w-5 h-5" />
                      <span>sakurerohini5@gmail.com</span>
                    </a>
                    <a href="tel:+919579835440" className="flex items-center gap-3 hover:text-blue-200 transition">
                      <Phone className="w-5 h-5" />
                      <span>+91 9579835440</span>
                    </a>
                    <a href="https://www.linkedin.com/in/rohini-sakure-09453930b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-200 transition">
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn Profile</span>
                    </a>
                    <a href="https://github.com/rohinisakure25" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-200 transition">
                      <Github className="w-5 h-5" />
                      <span>GitHub Profile</span>
                    </a>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Available For</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      <span>Freelance Projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      <span>Landing Page Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      <span>Website Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      <span>SEO Optimization</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl p-8">
                {!formSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                      ></textarea>
                      <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105"
                      >
                        Send Message
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">I'll get back to you within 24 hours.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2024 Rohini Sakure. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Designed & Developed with ❤️</p>
        </div>
      </footer>
    </div>
  );
}