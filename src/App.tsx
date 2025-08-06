import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Mail, Instagram, Globe, Search, Camera, TrendingUp, Palette, Send, ArrowRight, Phone, Linkedin, Github } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      icon: <Phone className="h-8 w-8 text-indigo-600" />
    },
    {
      name: "Abhishek",
      email: "abhishek.live.connect@gmail.com",
      phone: "8962276125",
      icon: <Phone className="h-8 w-8 text-indigo-600" />
    },
    {
      name: "Aryan",
      email: "aryan.live.media@gmail.com",
      phone: "7260075767",
      icon: <Phone className="h-8 w-8 text-indigo-600" />
    }
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      title: "Web Design & Development",
      description: "Custom websites that convert visitors into customers with modern design and seamless user experience."
    },
    {
      icon: <Search className="w-8 h-8 text-indigo-600" />,
      title: "SEO Optimization",
      description: "Boost your visibility on search engines and attract more organic traffic to grow your business."
    },
    {
      icon: <Camera className="w-8 h-8 text-indigo-600" />,
      title: "Product Photography & Videography",
      description: "Professional visual content that showcases your products and tells your brand story effectively."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      title: "Instagram Optimization",
      description: "Strategic social media presence that engages your audience and drives meaningful business results."
    },
    {
      icon: <Palette className="w-8 h-8 text-indigo-600" />,
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

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "3x", label: "Average Growth" },
    { value: "24/7", label: "Support" }
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
    setIsSubmitted(true);
    
    // Simulate form submission
    setTimeout(() => {
      const subject = encodeURIComponent(`New inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:abhishek.live.connect@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitted(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
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
                    className="text-slate-700 hover:text-indigo-600 transition-all duration-200 font-medium text-lg relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-indigo-600 focus:outline-none transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-slate-100">
                {['Home', 'About', 'Services', 'Work', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block px-4 py-3 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 font-medium w-full text-left text-lg transition-colors duration-200 rounded-lg"
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
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
                Digital Agency
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Transform Your Business with <br />
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 bg-clip-text text-transparent">
                HYPE Digital
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Helping small businesses grow with cutting-edge design, compelling content & strategic digital marketing solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => scrollToSection('work')}
                className="group bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-indigo-900 transition-all duration-300 font-semibold text-lg flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-indigo-600 text-indigo-700 px-8 py-4 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-indigo-700 mb-2">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* About Section */}
<section id="about" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Content */}
      <div>
        <div className="bg-slate-100 rounded-2xl p-1 inline-block mb-6">
          <span className="text-indigo-700 font-medium px-4 py-2">About Us</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
          We're Passionate About Your Growth
        </h2>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          At HYPE, we help small businesses build their online presence through stunning websites, SEO, and impactful photography & videography. We make sure your brand not only looks great — but gets discovered.
        </p>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Our team combines creative design with technical expertise to deliver solutions that drive real business results. We're not just service providers; we're your growth partners.
        </p>
        <button 
          onClick={() => scrollToSection('services')}
          className="group inline-flex items-center text-indigo-700 font-semibold text-lg hover:text-indigo-800"
        >
          Explore our services
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>

      {/* Right Image Grid */}
      <div className="grid grid-cols-2 gap-6">
        <div className="rounded-2xl h-64 overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/1528851/pexels-photo-1528851.jpeg"
            alt="Team working"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-2xl h-80 mt-8 overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/3069868/pexels-photo-3069868.jpeg"
            alt="Photography setup"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-2xl h-80 overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg"
            alt="Office design"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-2xl h-64 mt-8 overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/17115906/pexels-photo-17115906.jpeg"
            alt="Creative work"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-slate-100 rounded-2xl p-1 inline-block mb-6">
              <span className="text-indigo-700 font-medium px-4 py-2">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Digital Solutions That Drive Growth</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the online world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 transform hover:-translate-y-2">
                <div className="bg-indigo-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-slate-100 rounded-2xl p-1 inline-block mb-6">
              <span className="text-indigo-700 font-medium px-4 py-2">Our Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Projects We're Proud Of</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Take a look at some of our recent projects and see how we've helped businesses grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {portfolio.map((project, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white font-medium group-hover-link"
                    >
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-700 hover:text-indigo-800 font-semibold transition-colors duration-200 group"
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
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-slate-100 rounded-2xl p-1 inline-block mb-6">
              <span className="text-indigo-700 font-medium px-4 py-2">Contact Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Let's Start Your Project</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Contact us for more details. We're here to help you grow your business.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-lg"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-lg"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-lg resize-none"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className={`w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                      isSubmitted 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:from-indigo-700 hover:to-indigo-900 hover:shadow-xl hover:-translate-y-1'
                    }`}
                  >
                    {isSubmitted ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Team Contact Info */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Team</h3>
                
                {teamMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-indigo-100 p-4 rounded-2xl mr-4">
                        {member.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-xl">{member.name}</h3>
                        <div className="mt-2">
                          <a 
                            href={`mailto:${member.email}`}
                            className="flex items-center text-slate-600 hover:text-indigo-700 transition-colors duration-200"
                          >
                            <Mail className="h-5 w-5 mr-2" />
                            {member.email}
                          </a>
                          <a 
                            href={`tel:+91${member.phone}`}
                            className="flex items-center text-slate-600 hover:text-indigo-700 transition-colors duration-200 mt-2"
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
   //
    </div>
  );
}

export default App;