import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Server, 
  Smartphone,
  Calendar,
  MapPin,
  Send,
  ChevronDown,
  Star,
  Eye,
  GitBranch
} from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';



const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    emailjs.send(
      'service_6j80m64',
      'template_9al2txi',
      formData,
      '99SMW_Dfq94La_1B5'
    )
    .then(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(error => {
      console.error('EmailJS Error:', error);
      alert('Oops! Something went wrong.');
    });
  };

  const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};


  const skills = [
    { name: 'React', icon: <Code className="w-6 h-6" />, level: 95 },
    { name: 'TypeScript', icon: <Code className="w-6 h-6" />, level: 90 },
    { name: 'Node.js', icon: <Server className="w-6 h-6" />, level: 85 },
    { name: 'Database', icon: <Database className="w-6 h-6" />, level: 80 },
    { name: 'Mobile Dev', icon: <Smartphone className="w-6 h-6" />, level: 75 },
    { name: 'DevOps', icon: <Server className="w-6 h-6" />, level: 70 }
  ];

  const projects = [
    {
      title: 'Website for A Business',
      description: 'Full website for a phone repairing shop.',
      image: '/phonegarage.jpg',
      live: 'https://www.phonegarage.com.au',
      tech: ['Godaddy']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop interface, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      tech: ['Kotlin', 'Firebase'],
      github: 'https://github.com/mesushantdkl/goodlist',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website using React and Typescript.',
      image: '/portweb.jpg',
      tech: ['React', 'Typescript'],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Information Technology',
      school: 'Victoria University',
      period: '2022-2025',
      location: 'Sydney, New South Wales, Australia',
      description: 'Comprehensive study of software development principles, algorithms, and system design.',
      gpa: '5.38'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sushant Dhakal
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === section
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <motion.img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sushant Dhakal</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Highly motivated and detail-oriented IT support professional with over 2 years of experience in putting expertise to
              practice, having outstanding communication skills to interact both with clients and company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="py-20 bg-white dark:bg-gray-800"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I enjoy building useful tools, exploring cybersecurity, and helping people through tech support. 
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I specialize in Networking as well as Web and Mobile Application Development. My journey began with a curiosity about how internet and websites work, and has evolved a career focused on creating exceptional digital experiences.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                  or sharing my knowledge through technical writing and mentoring.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="text-blue-600 dark:text-blue-400 mr-3">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative [perspective:1000px] w-full">
              {/* Flip Image Card - Click to Flip */}
              <div className="relative w-full [perspective:1000px]">
                <motion.div
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{ duration: 0.8 }}
                  onClick={() => setFlipped(!flipped)}
                  className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1"
                  style={{ transformStyle: 'preserve-3d', cursor: 'pointer' }}
                >
                  {/* Front Face */}
                  <motion.img
                    src="/profile2.jpg"
                    alt="About me"
                    className="w-full h-full object-cover rounded-2xl absolute top-0 left-0"
                    style={{ backfaceVisibility: 'hidden' }}
                  />

                  {/* Back Face */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white text-black text-lg font-semibold"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    Hello from the back!
                  </motion.div>
                </motion.div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 bg-gray-50 dark:bg-gray-900"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center text-white text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center text-white text-xs">
                      <Eye className="w-3 h-3 mr-1" />
                      
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    </div>
                    <GitBranch className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience & Education Section */}
      <motion.section
        id="experience"
        className="py-20 bg-white dark:bg-gray-800"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience & Education</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My professional journey and educational background.
            </p>
          </div>
        
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Code className="w-6 h-6 mr-2 text-purple-600 dark:text-purple-400" />
                Education
              </h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-purple-600 dark:border-purple-400">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">{edu.school}</p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                        <MapPin className="w-4 h-4 mr-1 ml-4" />
                        {edu.location}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.description}</p>
                      <div className="text-sm font-medium text-green-600 dark:text-green-400">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 bg-gray-50 dark:bg-gray-900"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">dhakalsushant1000@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">Sydney, New South Wales</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/johttps://github.com/mesushantdkl"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/johndoe"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:john.doe@example.com"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
              © 2025 Sushant Dhakal. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;