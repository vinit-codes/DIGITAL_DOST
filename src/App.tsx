import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Mail, Instagram, Globe, Search, Camera, TrendingUp, Palette, Send, ArrowRight, Phone } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const teamMembers = [
    {
      name: "Vineeth",
      email: "kunduvineeth0@gmail.com",
      phone: "7682887844",
      icon: <Phone className="h-8 w-8 text-gray-900" />
    },
    {
      name: "Abhishek",
      email: "abhishek.live.connect@gmail.com",
      phone: "8962276125",
      icon: <Phone className="h-8 w-8 text-gray-900" />
    },
    {
      name: "Aryan",
      email: "aryan12@gmail.com",
      phone: "7260075767",
      icon: <Phone className="h-8 w-8 text-gray-900" />
    }
  ];
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Design & Development",
      description: "Custom websites that convert visitors into customers with modern design and seamless user experience."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Boost your visibility on search engines and attract more organic traffic to grow your business."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Product Photography & Videography",
      description: "Professional visual content that showcases your products and tells your brand story effectively."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Instagram Optimization",
      description: "Strategic social media presence that engages your audience and drives meaningful business results."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Strategy",
      description: "Comprehensive brand development that creates lasting connections with your target audience."
    }
  ];

  const portfolio = [
    {
      title: "Salon Website",
      link: "https://saloon-next-js-9i6e.vercel.app/",
      description: "A sleek and elegant salon site built with Next.js. Clean layout, fast performance, and perfect for local beauty businesses.",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Next.js", "Responsive", "Beauty"]
    },
    {
      title: "Gym Website",
      link: "https://gym-site-nextjs-two.vercel.app/",
      description: "Bold, responsive gym website with class schedules, bookings, and brand-focused visuals. Built using modern frontend technologies.",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "Booking", "Fitness"]
    },
    {
      title: "Indowoven – Eco Bags Brand",
      link: "https://indowoven.com",
      description: "Website for a sustainable bag manufacturing company. Modern storytelling layout with clear call-to-actions and product presentation.",
      image: "https://images.pexels.com/photos/7771968/pexels-photo-7771968.jpeg",
      tags: ["E-commerce", "Sustainability", "Brand"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:abhishek.live.connect@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                HYPE
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-10">
                {['Home', 'About', 'Services', 'Work', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium text-lg relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-100">
                {['Home', 'About', 'Services', 'Work', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block px-4 py-3 text-gray-700 hover:text-gray-900 font-medium w-full text-left text-lg transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
                Digital Agency
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                HYPE
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Helping small businesses grow with design, content & digital marketing
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => scrollToSection('work')}
                className="group bg-gray-900 text-white px-10 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 font-semibold text-lg flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">About HYPE</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At HYPE, we help small businesses build their online presence through stunning websites, SEO, and impactful photography & videography. We make sure your brand not only looks great — but gets discovered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the online world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
                <div className="text-gray-900 mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent projects and see how we've helped businesses grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {portfolio.map((project, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-900 hover:text-gray-700 font-semibold text-lg transition-colors duration-200 group"
                  >
                    View Project 
                    <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Contact Us</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Contact us for more details. We're here to help you grow your business.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-lg"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-lg"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-lg resize-none"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 font-semibold text-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>


          {/* Team Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h3>
            
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 p-4 rounded-2xl mr-4">
                    {member.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl">{member.name}</h3>
                    <div className="mt-2">
                      <a 
                        href={`mailto:${member.email}`}
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg"
                      >
                        <Mail className="h-5 w-5 mr-2" />
                        {member.email}
                      </a>
                      <a 
                        href={`tel:+91${member.phone}`}
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg mt-2"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        +91 {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              HYPE
            </h3>
            <p className="text-gray-400 mb-10 text-xl max-w-2xl mx-auto">
              Helping small businesses grow with design, content & digital marketing
            </p>
            <div className="flex justify-center space-x-8 mb-12">
              <a 
                href="mailto:abhishek.live.connect@gmail.com"
                className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110"
              >
                <Mail className="h-8 w-8" />
              </a>
              <a 
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110"
              >
                <Instagram className="h-8 w-8" />
              </a>
            </div>
            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-lg">
                © 2025 HYPE. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;