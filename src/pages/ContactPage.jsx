import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          organization: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Submission error:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-indigo-50 to-purple-50 py-24 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Ready to transform breast cancer screening? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 bg-gradient-to-b from-pink-50/20 to-white p-6 rounded-xl"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <div className="flex flex-col space-y-2">
                                          <a href="https://chat.whatsapp.com/JjNmOl4CwCc24aUTzGVMVM" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-violet-600 transition-colors">WhatsApp Group</a>
                                          <a href="mailto:founder@aviothic.in" className="text-gray-600 hover:text-violet-600 transition-colors">founder@aviothic.in</a>
                                        </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 9960567103</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">Mumbai<br />India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Partnership Opportunities</h3>
              <p className="text-gray-600 mb-4">
                Interested in integrating our AI platform into your healthcare system?
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                  Healthcare system integrations
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                  Research collaborations
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                  Policy development partnerships
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-b from-pink-50/15 to-white p-6 rounded-xl"
          >
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-800 font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">We'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-red-800 font-medium">Failed to send message</span>
                  </div>
                  <p className="text-red-700 text-sm mt-1">Please try again or contact us directly.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50"
                    placeholder="Your organization name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50"
                    placeholder="Tell us about your interest in our platform..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Newsletter Subscription Section */}
      <div className="mt-20 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 rounded-3xl shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to our Newsletter</h2>
              <p className="text-gray-600 leading-relaxed">
                Stay updated with our latest news, research findings, and product updates. Join our community of healthcare professionals and researchers.
              </p>
            </div>
            <div className="md:w-1/2 w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 bg-transparent border-b-2 border-gray-300 focus:border-purple-500 focus:outline-none pb-2 px-2 text-gray-900 placeholder-gray-500"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors duration-200 flex items-center justify-center min-w-[44px]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <footer className="mt-20 bg-white pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Logo */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-mono">Aviothic AI</h3>
              <p className="text-gray-600 text-sm">
                Advancing healthcare through artificial intelligence.
              </p>
            </div>
            
            {/* Meet Aviothic Column */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Meet Aviothic</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600 hover:underline transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 hover:underline transition-colors duration-200">Products</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 hover:underline transition-colors duration-200">Screening</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 hover:underline transition-colors duration-200">Impact & Implementation</a></li>
              </ul>
            </div>
            
            {/* Research Column */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Research</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600 hover:underline transition-colors duration-200">Decision Referral</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 hover:underline transition-colors duration-200">Publications</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 hover:underline transition-colors duration-200">Studies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 hover:underline transition-colors duration-200">Monitoring</a></li>
              </ul>
            </div>
            
            {/* Get in Touch Column */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Get in touch</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600 hover:underline transition-colors duration-200">Let's connect</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 hover:underline transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 hover:underline transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                © 2026 Aviothic AI. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="text-gray-600 hover:text-purple-600 hover:underline text-sm transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-purple-600 hover:underline text-sm transition-colors duration-200">Terms</a>
                <a href="#" className="text-gray-600 hover:text-purple-600 hover:underline text-sm transition-colors duration-200">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;